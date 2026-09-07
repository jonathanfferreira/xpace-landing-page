import { createHash } from 'crypto';
import { Lead, LeadPayload, LeadResponse, LeadStore, MessagingResult, SafeLog } from './types';

export interface LeadDependencies {
  store: LeadStore;
  sendMessages(lead: LeadPayload): Promise<MessagingResult>;
  log: SafeLog;
}
export function createLeadService({ store, sendMessages, log }: LeadDependencies) {
  return async (payload: LeadPayload): Promise<LeadResponse> => {
    const initial: MessagingResult = { user: { status: 'PENDING' }, internal: { status: 'PENDING' } };
    const lead: Lead = { ...payload, id: payload.requestId, idempotencyKey: payload.requestId, status: 'NEW',
      createdAt: store.serverTimestamp(), updatedAt: store.serverTimestamp(),
      messageStatus: 'PENDING', notificationStatus: 'PENDING', messaging: initial,
      payloadHash: createHash('sha256').update(JSON.stringify(payload)).digest('hex'),
      metadata: { schemaVersion: 1, privacyNoticeVersion: '2026-09-draft' } };
    // Atomic create/get prevents concurrent retries from duplicating leads or messages.
    const saved = await store.createOrGet(lead);
    if (!saved.created) {
      log('LEAD_REPLAYED', { leadId: lead.id });
      return { success: true, persisted: true, leadId: lead.id, messaging: { user: saved.lead.messageStatus, internal: saved.lead.notificationStatus }, auditRecorded: true };
    }
    log('LEAD_CREATED', { leadId: lead.id });
    let messaging: MessagingResult;
    try { messaging = await sendMessages(payload); }
    catch { messaging = { user: { status: 'FAILED', error: 'UNAVAILABLE' }, internal: { status: 'FAILED', error: 'UNAVAILABLE' } }; }
    for (const channel of ['user', 'internal'] as const) {
      const result = messaging[channel];
      log(`LEAD_MESSAGE_${result.status}`, { leadId: lead.id, channel, ...(result.error ? { code: result.error } : {}) });
    }
    let auditRecorded = true;
    try { await store.recordMessaging(lead.id, messaging); }
    catch { auditRecorded = false; log('LEAD_AUDIT_FAILED', { leadId: lead.id, code: 'STORAGE_UNAVAILABLE' }); }
    // Once persisted, an external or audit failure must never be reported as a lost lead.
    return { success: true, persisted: true, leadId: lead.id, messaging: { user: messaging.user.status, internal: messaging.internal.status }, auditRecorded };
  };
}

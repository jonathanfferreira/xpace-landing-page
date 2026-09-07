import * as functions from 'firebase-functions/v1';
import * as admin from 'firebase-admin';
import { createLeadHandler } from './leads/handler';
import { createMessenger } from './leads/messaging';
import { createLeadService } from './leads/service';
import { firestoreLeadStore } from './leads/store';
import { SafeLog } from './leads/types';

admin.initializeApp();
const log: SafeLog = (event, details) => functions.logger.info(event, details);
const service = createLeadService({
  store: firestoreLeadStore(admin.firestore()),
  sendMessages: createMessenger(() => ({
    apiKey: process.env.EVOLUTION_API_KEY,
    serverUrl: process.env.SERVER_URL,
    instance: process.env.EVOLUTION_INSTANCE,
    recipients: process.env.LEAD_NOTIFICATION_PHONES,
  })),
  log,
});
const handleLead = createLeadHandler(service, log);

// Functions SDK 4.9.0 / first generation: secrets are bound explicitly via Secret Manager.
export const api = functions.runWith({ secrets: ['EVOLUTION_API_KEY'], timeoutSeconds: 60, maxInstances: 10 }).https.onRequest(async (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.set('Vary', 'Origin');
  const origin = req.get('origin');
  const allowed = (process.env.LEAD_ALLOWED_ORIGINS || 'https://xpacecompany.com,https://www.xpacecompany.com').split(',').map(value => value.trim());
  const isDev = process.env.FUNCTIONS_EMULATOR === 'true' || process.env.NODE_ENV === 'development';
  const isAllowedOrigin = (orig: string) => allowed.includes(orig) || (isDev && /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(orig));
  if (origin && !isAllowedOrigin(origin)) {
    res.status(403).json({ success: false, persisted: false, error: { code: 'ORIGIN_NOT_ALLOWED' } });
    return;
  }
  if (origin) res.set('Access-Control-Allow-Origin', origin);
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(204).send(''); return; }
  const result = await handleLead({ method: req.method, path: req.path, body: req.body,
    contentType: req.get('content-type') || '', bodyBytes: req.rawBody?.length || 0 });
  if (result.status === 405) res.set('Allow', 'POST, OPTIONS');
  res.status(result.status).json(result.body);
});

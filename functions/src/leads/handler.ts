import { LeadResponse, LeadType, SafeLog } from './types';
import { LeadError, validateLead } from './validation';

export interface LeadRequest { method: string; path: string; body: unknown; contentType: string; bodyBytes: number }
export function createLeadHandler(save: (payload: ReturnType<typeof validateLead>) => Promise<LeadResponse>, log: SafeLog) {
  return async (req: LeadRequest) => {
    const routeTypes: Record<string, LeadType | undefined> = { '/leads': undefined, '/quiz': 'QUIZ', '/lead': 'CONTACT' };
    // Firebase Hosting keeps /api in req.path; direct Function URLs do not.
    const path = req.path.replace(/^\/api(?=\/)/, '').replace(/\/$/, '');
    if (!Object.prototype.hasOwnProperty.call(routeTypes, path)) return { status: 404, body: { success: false, persisted: false, error: { code: 'NOT_FOUND' } } };
    if (req.method !== 'POST') return { status: 405, body: { success: false, persisted: false, error: { code: 'METHOD_NOT_ALLOWED' } } };
    if (!/^application\/json(?:;|$)/i.test(req.contentType)) return { status: 415, body: { success: false, persisted: false, error: { code: 'JSON_REQUIRED' } } };
    if (req.bodyBytes > 16384) return { status: 413, body: { success: false, persisted: false, error: { code: 'PAYLOAD_TOO_LARGE' } } };
    try {
      const payload = validateLead(req.body, routeTypes[path]);
      return { status: 200, body: await save(payload) };
    } catch (error: unknown) {
      const safe = error instanceof LeadError ? error : new LeadError('STORAGE_UNAVAILABLE', 503);
      log('LEAD_REQUEST_FAILED', { code: safe.code });
      return { status: safe.httpStatus, body: { success: false, persisted: false, error: { code: safe.code } } };
    }
  };
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLeadHandler = void 0;
const validation_1 = require("./validation");
function createLeadHandler(save, log) {
    return async (req) => {
        const routeTypes = { '/leads': undefined, '/quiz': 'QUIZ', '/lead': 'CONTACT' };
        // Firebase Hosting keeps /api in req.path; direct Function URLs do not.
        const path = req.path.replace(/^\/api(?=\/)/, '').replace(/\/$/, '');
        if (!Object.prototype.hasOwnProperty.call(routeTypes, path))
            return { status: 404, body: { success: false, persisted: false, error: { code: 'NOT_FOUND' } } };
        if (req.method !== 'POST')
            return { status: 405, body: { success: false, persisted: false, error: { code: 'METHOD_NOT_ALLOWED' } } };
        if (!/^application\/json(?:;|$)/i.test(req.contentType))
            return { status: 415, body: { success: false, persisted: false, error: { code: 'JSON_REQUIRED' } } };
        if (req.bodyBytes > 16384)
            return { status: 413, body: { success: false, persisted: false, error: { code: 'PAYLOAD_TOO_LARGE' } } };
        try {
            const payload = (0, validation_1.validateLead)(req.body, routeTypes[path]);
            return { status: 200, body: await save(payload) };
        }
        catch (error) {
            const safe = error instanceof validation_1.LeadError ? error : new validation_1.LeadError('STORAGE_UNAVAILABLE', 503);
            log('LEAD_REQUEST_FAILED', { code: safe.code });
            return { status: safe.httpStatus, body: { success: false, persisted: false, error: { code: safe.code } } };
        }
    };
}
exports.createLeadHandler = createLeadHandler;
//# sourceMappingURL=handler.js.map
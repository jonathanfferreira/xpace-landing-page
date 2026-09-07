"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const functions = __importStar(require("firebase-functions/v1"));
const admin = __importStar(require("firebase-admin"));
const handler_1 = require("./leads/handler");
const messaging_1 = require("./leads/messaging");
const service_1 = require("./leads/service");
const store_1 = require("./leads/store");
admin.initializeApp();
const log = (event, details) => functions.logger.info(event, details);
const service = (0, service_1.createLeadService)({
    store: (0, store_1.firestoreLeadStore)(admin.firestore()),
    sendMessages: (0, messaging_1.createMessenger)(() => ({
        apiKey: process.env.EVOLUTION_API_KEY,
        serverUrl: process.env.SERVER_URL,
        instance: process.env.EVOLUTION_INSTANCE,
        recipients: process.env.LEAD_NOTIFICATION_PHONES,
    })),
    log,
});
const handleLead = (0, handler_1.createLeadHandler)(service, log);
// Functions SDK 4.9.0 / first generation: secrets are bound explicitly via Secret Manager.
exports.api = functions.runWith({ secrets: ['EVOLUTION_API_KEY'], timeoutSeconds: 60, maxInstances: 10 }).https.onRequest(async (req, res) => {
    var _a;
    res.set('Cache-Control', 'no-store');
    res.set('Vary', 'Origin');
    const origin = req.get('origin');
    const allowed = (process.env.LEAD_ALLOWED_ORIGINS || 'https://xpacecompany.com,https://www.xpacecompany.com').split(',').map(value => value.trim());
    const isDev = process.env.FUNCTIONS_EMULATOR === 'true' || process.env.NODE_ENV === 'development';
    const isAllowedOrigin = (orig) => allowed.includes(orig) || (isDev && /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(orig));
    if (origin && !isAllowedOrigin(origin)) {
        res.status(403).json({ success: false, persisted: false, error: { code: 'ORIGIN_NOT_ALLOWED' } });
        return;
    }
    if (origin)
        res.set('Access-Control-Allow-Origin', origin);
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        res.status(204).send('');
        return;
    }
    const result = await handleLead({ method: req.method, path: req.path, body: req.body,
        contentType: req.get('content-type') || '', bodyBytes: ((_a = req.rawBody) === null || _a === void 0 ? void 0 : _a.length) || 0 });
    if (result.status === 405)
        res.set('Allow', 'POST, OPTIONS');
    res.status(result.status).json(result.body);
});
//# sourceMappingURL=index.js.map
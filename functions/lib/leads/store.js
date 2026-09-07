"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestoreLeadStore = void 0;
const firebase_admin_1 = require("firebase-admin");
const validation_1 = require("./validation");
function firestoreLeadStore(db) {
    return {
        serverTimestamp: () => firebase_admin_1.firestore.FieldValue.serverTimestamp(),
        createOrGet: lead => db.runTransaction(async (transaction) => {
            const ref = db.collection('leads').doc(lead.id);
            const existing = await transaction.get(ref);
            if (existing.exists) {
                const stored = existing.data();
                if (stored.payloadHash !== lead.payloadHash)
                    throw new validation_1.LeadError('REQUEST_CONFLICT', 409);
                return { created: false, lead: stored };
            }
            transaction.create(ref, lead);
            return { created: true, lead };
        }),
        recordMessaging: async (id, messaging) => {
            await db.collection('leads').doc(id).update({ messaging,
                messageStatus: messaging.user.status, notificationStatus: messaging.internal.status,
                updatedAt: firebase_admin_1.firestore.FieldValue.serverTimestamp() });
        }
    };
}
exports.firestoreLeadStore = firestoreLeadStore;
//# sourceMappingURL=store.js.map
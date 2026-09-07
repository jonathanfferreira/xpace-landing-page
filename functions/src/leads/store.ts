import { firestore } from 'firebase-admin';
import { Lead, LeadStore } from './types';
import { LeadError } from './validation';

export function firestoreLeadStore(db: firestore.Firestore): LeadStore {
  return {
    serverTimestamp: () => firestore.FieldValue.serverTimestamp(),
    createOrGet: lead => db.runTransaction(async transaction => {
      const ref = db.collection('leads').doc(lead.id);
      const existing = await transaction.get(ref);
      if (existing.exists) {
        const stored = existing.data() as Lead;
        if (stored.payloadHash !== lead.payloadHash) throw new LeadError('REQUEST_CONFLICT', 409);
        return { created: false, lead: stored };
      }
      transaction.create(ref, lead);
      return { created: true, lead };
    }),
    recordMessaging: async (id, messaging) => {
      await db.collection('leads').doc(id).update({ messaging,
        messageStatus: messaging.user.status, notificationStatus: messaging.internal.status,
        updatedAt: firestore.FieldValue.serverTimestamp() });
    }
  };
}

export type LeadType = 'QUIZ' | 'CONTACT';
export type LeadStatus = 'NEW';
export type MessageStatus = 'PENDING' | 'SENT' | 'FAILED' | 'NOT_CONFIGURED';
export type SafeMessageError = 'NOT_CONFIGURED' | 'TIMEOUT' | 'PROVIDER_REJECTED' | 'UNAVAILABLE';
export interface MessageResult { status: MessageStatus; error?: SafeMessageError }
export interface MessagingResult { user: MessageResult; internal: MessageResult }
export interface LeadPayload {
  requestId: string;
  name: string;
  phone: string;
  leadType: LeadType;
  email: string;
  message: string;
  intent: string;
  source: string;
  page: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
  quizResult: string;
  quizAnswers: Record<string, number>;
  age?: number;
  preferredModalities?: string[];
  experience?: string;
  availability?: string[];
  objective?: string;
  recommendedClassIds?: string[];
  selectedClassId?: string;
}
export interface Lead extends LeadPayload {
  id: string;
  idempotencyKey: string;
  createdAt: unknown; // Firestore server timestamp; opaque to the service.
  updatedAt: unknown;
  status: LeadStatus;
  messageStatus: MessageStatus;
  notificationStatus: MessageStatus;
  messaging: MessagingResult;
  payloadHash: string;
  metadata: { schemaVersion: 1; privacyNoticeVersion: string };
}
export interface LeadResponse {
  success: true;
  persisted: true;
  leadId: string;
  messaging: { user: MessageStatus; internal: MessageStatus };
  auditRecorded: boolean;
}
export interface ErrorResponse { success: false; persisted: false; error: { code: string } }
export interface LeadStore {
  createOrGet(lead: Lead): Promise<{ created: boolean; lead: Lead }>;
  recordMessaging(id: string, messaging: MessagingResult): Promise<void>;
  serverTimestamp(): unknown;
}
export type SafeLog = (event: string, details: { leadId?: string; code?: string; channel?: string }) => void;

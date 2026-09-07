export type LeadType = 'QUIZ' | 'CONTACT';
export type MessageStatus = 'PENDING' | 'SENT' | 'FAILED' | 'NOT_CONFIGURED';
export interface LeadAttribution {
  page: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
}
export interface LeadInput {
  name: string;
  phone: string;
  leadType: LeadType;
  email?: string;
  message?: string;
  intent?: string;
  quizResult?: string;
  quizAnswers?: Record<string, number>;
  website?: string;
  age?: number;
  preferredModalities?: string[];
  experience?: string;
  availability?: string[];
  objective?: string;
  recommendedClassIds?: string[];
  selectedClassId?: string;
}
export interface LeadPayload extends LeadInput, LeadAttribution { requestId: string }
export interface LeadResponse {
  success: true;
  persisted: true;
  leadId: string;
  messaging: { user: MessageStatus; internal: MessageStatus };
  auditRecorded: boolean;
}

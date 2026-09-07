import type { LeadPayload, LeadResponse } from '../types/leads';

const baseUrl = (import.meta.env.VITE_LEADS_API_BASE_URL || '/api').replace(/\/+$/, '');
const statuses = new Set(['PENDING', 'SENT', 'FAILED', 'NOT_CONFIGURED']);
export class LeadSubmissionError extends Error {}
export async function sendLead(payload: LeadPayload): Promise<LeadResponse> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(`${baseUrl}/leads`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), signal: controller.signal });
    if (!response.ok) {
      throw new LeadSubmissionError(response.status === 400 ? 'Confira seu nome, telefone com DDD e os campos preenchidos. Seus dados continuam aqui para tentar novamente.' : 'Não foi possível confirmar o registro do seu contato. Seus dados continuam aqui; tente novamente.');
    }
    const result = await response.json() as Partial<LeadResponse>;
    if (result.success !== true || result.persisted !== true || typeof result.leadId !== 'string' || !result.leadId || !statuses.has(result.messaging?.user || '') || !statuses.has(result.messaging?.internal || '')) {
      throw new LeadSubmissionError('Não foi possível confirmar o registro do seu contato. Tente novamente.');
    }
    return result as LeadResponse;
  } catch (error: unknown) {
    if (error instanceof LeadSubmissionError) throw error;
    throw new LeadSubmissionError(controller.signal.aborted ? 'A confirmação demorou mais que o esperado. Seus dados continuam aqui; tente novamente.' : 'Não foi possível confirmar o registro. Verifique sua conexão e tente novamente.');
  } finally { window.clearTimeout(timer); }
}

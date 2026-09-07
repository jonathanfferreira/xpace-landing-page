import axios from 'axios';
import { LeadPayload, MessageResult, MessagingResult } from './types';
import { normalizePhone } from './validation';

export interface MessagingConfig { apiKey?: string; serverUrl?: string; instance?: string; recipients?: string }
export interface MessageTransport { post(url: string, data: { number: string; text: string; linkPreview: boolean }, config: { headers: Record<string, string>; timeout: number; maxRedirects: number }): Promise<unknown> }
export function createMessenger(getConfig: () => MessagingConfig, transport: MessageTransport = axios) {
  return async (lead: LeadPayload): Promise<MessagingResult> => {
    const config = getConfig();
    const absent: MessageResult = { status: 'NOT_CONFIGURED', error: 'NOT_CONFIGURED' };
    let server: URL;
    try {
      server = new URL(config.serverUrl || '');
      if (server.protocol !== 'https:' || server.username || server.password || server.search || server.hash || ['localhost', '127.0.0.1', '[::1]'].includes(server.hostname)) throw new Error();
      if (!config.apiKey || !config.instance || !/^[a-zA-Z0-9_-]{1,80}$/.test(config.instance)) throw new Error();
    } catch { return { user: absent, internal: absent }; }
    const send = async (number: string, text: string): Promise<MessageResult> => {
      try {
        await transport.post(`${server.toString().replace(/\/$/, '')}/message/sendText/${encodeURIComponent(config.instance!)}`, { number, text, linkPreview: false },
          { headers: { apikey: config.apiKey!, 'Content-Type': 'application/json' }, timeout: 5000, maxRedirects: 0 });
        return { status: 'SENT' };
      } catch (error: unknown) {
        const code = axios.isAxiosError(error) && ['ECONNABORTED', 'ETIMEDOUT'].includes(error.code || '') ? 'TIMEOUT' : axios.isAxiosError(error) && error.response ? 'PROVIDER_REJECTED' : 'UNAVAILABLE';
        return { status: 'FAILED', error: code }; // Never retain provider bodies, headers or error.message.
      }
    };
    let recipients: string[] = [];
    try { recipients = [...new Set((config.recipients || '').split(',').filter(Boolean).map(normalizePhone))]; if (recipients.length > 5) recipients = []; }
    catch { recipients = []; }
    const firstName = lead.name.split(' ')[0];
    const userText = lead.leadType === 'QUIZ'
      ? `Olá, ${firstName}! Seu resultado no quiz da XPACE é ${lead.quizResult}. Recebemos seu interesse. Nossa equipe pode ajudar você a conhecer as aulas.`
      : `Olá, ${firstName}! Recebemos seu contato na XPACE Escola de Dança. Nossa equipe poderá falar com você sobre seu interesse.`;
    const internalText = `Novo contato XPACE\nReferência: ${lead.requestId}\nNome: ${lead.name}\nTelefone: ${lead.phone}\nTipo: ${lead.leadType}${lead.quizResult ? `\nResultado: ${lead.quizResult}` : ''}`;
    const [user, internalResults] = await Promise.all([send(lead.phone, userText), Promise.all(recipients.map(number => send(number, internalText)))]);
    const internal = internalResults.length ? internalResults.find(result => result.status === 'FAILED') || { status: 'SENT' as const } : absent;
    return { user, internal };
  };
}

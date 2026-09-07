import { useRef, useState } from 'react';
import { sendLead } from '../services/leads';
import { captureAttribution } from '../utils/attribution';
import type { LeadInput, LeadPayload, LeadResponse } from '../types/leads';

export function useLeadSubmission() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const [response, setResponse] = useState<LeadResponse | null>(null);
  const pending = useRef<{ signature: string; payload: LeadPayload } | null>(null);
  const busy = useRef(false);
  const submit = async (input: LeadInput): Promise<LeadResponse | null> => {
    if (busy.current) return null;
    busy.current = true;
    setStatus('submitting'); setError(''); setResponse(null);
    try {
      const signature = JSON.stringify(input);
      if (!pending.current || pending.current.signature !== signature) {
        pending.current = { signature, payload: { ...input, ...captureAttribution(), requestId: crypto.randomUUID() } };
      }
      const result = await sendLead(pending.current.payload);
      setResponse(result); setStatus('success');
      return result;
    } catch (failure: unknown) {
      setError(failure instanceof Error ? failure.message : 'Não foi possível confirmar o registro. Tente novamente.');
      setStatus('error'); return null;
    } finally { busy.current = false; }
  };
  return { submit, status, error, response };
}

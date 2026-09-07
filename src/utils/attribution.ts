import type { LeadAttribution } from '../types/leads';

const storageKey = 'xpace.lead-attribution.v1';
const campaignKeys = { utmSource: 'utm_source', utmMedium: 'utm_medium', utmCampaign: 'utm_campaign', utmContent: 'utm_content', utmTerm: 'utm_term' } as const;
let memory: Omit<LeadAttribution, 'page'> | undefined;
function cleanReferrer(value: string): string {
  try { const url = new URL(value); return `${url.origin}${url.pathname}`.slice(0, 1000); } catch { return ''; }
}
export function captureAttribution(): LeadAttribution {
  const params = new URLSearchParams(window.location.search);
  const incomingCampaign = Object.values(campaignKeys).some(key => params.has(key));
  if (!memory) {
    try {
      const parsed: unknown = JSON.parse(sessionStorage.getItem(storageKey) || 'null');
      if (parsed && typeof parsed === 'object') {
        const stored = parsed as Record<string, unknown>;
        if (['referrer', ...Object.keys(campaignKeys)].every(key => typeof stored[key] === 'string')) {
          memory = { referrer: cleanReferrer(stored.referrer as string), utmSource: '', utmMedium: '', utmCampaign: '', utmContent: '', utmTerm: '' };
          for (const key of Object.keys(campaignKeys) as (keyof typeof campaignKeys)[]) memory[key] = (stored[key] as string).slice(0, 200);
        }
      }
    } catch { /* Storage may be disabled; memory still preserves attribution during SPA navigation. */ }
  }
  if (!memory || incomingCampaign) {
    memory = { referrer: cleanReferrer(document.referrer), utmSource: '', utmMedium: '', utmCampaign: '', utmContent: '', utmTerm: '' };
    for (const [key, query] of Object.entries(campaignKeys)) memory[key as keyof typeof campaignKeys] = (params.get(query) || '').slice(0, 200);
    try { sessionStorage.setItem(storageKey, JSON.stringify(memory)); } catch { /* Optional persistence only. */ }
  }
  return { ...memory, page: window.location.pathname.slice(0, 300) };
}

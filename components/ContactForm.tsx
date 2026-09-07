import React from 'react';
import { useLeadSubmission } from '../src/hooks/useLeadSubmission';
import { LeadPrivacyNotice } from '../src/components/LeadPrivacyNotice';
import { LeadHoneypot } from '../src/components/LeadHoneypot';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
    const { submit, status, error, response } = useLeadSubmission();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        await submit({
            leadType: 'CONTACT', name: String(data.get('name') || ''), phone: String(data.get('phone') || ''),
            email: String(data.get('email') || ''), message: String(data.get('message') || ''),
            intent: 'contact', website: String(data.get('website') || ''),
        });
    };

    return (
        <div className="bg-white dark:bg-black p-8 md:p-12 border border-gray-200 dark:border-gray-800 shadow-xl clip-card relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>

            <h3 className="font-display text-4xl font-black mb-6">FALE CONOSCO</h3>
            <p className="font-body text-gray-500 mb-8">Deixe seu contato e sua mensagem para a equipe da XPACE.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <LeadHoneypot />
                <fieldset disabled={status === "submitting" || status === "success"} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Nome</label>
                    <input type="text" name="name" id="name" required minLength={2} maxLength={100} className="w-full bg-surface-light dark:bg-surface-dark border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary px-0 py-3 transition-colors outline-none font-bold" placeholder="SEU NOME" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">WhatsApp</label>
                        <input type="tel" name="phone" id="phone" required maxLength={24} className="w-full bg-surface-light dark:bg-surface-dark border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary px-0 py-3 transition-colors outline-none font-bold" placeholder="(47) 99999-9999" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">E-mail</label>
                        <input type="email" name="email" id="email" required maxLength={254} className="w-full bg-surface-light dark:bg-surface-dark border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary px-0 py-3 transition-colors outline-none font-bold" placeholder="SEU@EMAIL.COM" />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Mensagem</label>
                    <textarea name="message" id="message" rows={4} required maxLength={2000} className="w-full bg-surface-light dark:bg-surface-dark border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary px-0 py-3 transition-colors outline-none font-bold resize-none" placeholder="OLÁ, GOSTARIA DE SABER MAIS SOBRE..."></textarea>
                </div>

                <LeadPrivacyNotice />
                <button type="submit" disabled={status === "submitting"} className="w-full bg-primary text-white py-4 font-tech text-xl tracking-widest hover:bg-primary/90 transition-all duration-300 clip-button disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(99,36,178,0.4)]">
                    <Send size={20} />
                    {status === "submitting" ? "ENVIANDO..." : status === "error" ? "TENTAR NOVAMENTE" : status === "success" ? "CONTATO REGISTRADO" : "ENVIAR MENSAGEM"}
                </button>

                </fieldset>
                {error && <p role="alert" className="text-red-600 dark:text-red-400 text-sm normal-case">{error}</p>}
                {status === "success" && (
                    <div role="status" className="p-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-bold text-center text-sm border border-green-200 dark:border-green-800">
                        Contato registrado! {response?.messaging.user === 'SENT' ? 'A confirmação foi encaminhada ao WhatsApp informado.' : 'Nossa equipe recebeu seu interesse. A confirmação por WhatsApp ainda não está disponível.'}
                    </div>
                )}
            </form>
        </div>
    );
};

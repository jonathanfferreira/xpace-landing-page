import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const message = formData.get('message') as string;

        // Validation
        if (!name || !email || !phone || !message) {
            setStatus("error");
            return;
        }

        try {
            // 1. Tenta chamar o Bot (API)
            await fetch('http://localhost:3000/api/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    phone,
                    intent: 'doubt', // Identifica como dúvida geral via site
                    unit: 'Joinville'
                })
            });

            setStatus("success");

            // 2. Redireciona para o WhatsApp da Escola também (garantia)
            // Aguarda um pouco para dar tempo da msg do bot chegar primeiro (efeito "Wow")
            setTimeout(() => {
                const phoneNumber = "554784970324";
                const text = `*NOVA MENSAGEM DO SITE (FALE CONOSCO)*\n\n*Nome:* ${name}\n*Tel:* ${phone}\n*Email:* ${email}\n\n*Mensagem:*\n${message}`;
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
                window.open(whatsappUrl, '_blank');
                setStatus("idle");
                form.reset();
            }, 1000);

        } catch (error) {
            console.error('Erro ao conectar com bot:', error);
            // Fallback: Apenas abre o WhatsApp
            const phoneNumber = "554784970324";
            const text = `*NOVA MENSAGEM DO SITE (FALE CONOSCO)*\n\n*Nome:* ${name}\n*Tel:* ${phone}\n*Email:* ${email}\n\n*Mensagem:*\n${message}`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
            window.open(whatsappUrl, '_blank');
            setStatus("idle");
            form.reset();
        }
    };

    return (
        <div className="bg-white dark:bg-black p-8 md:p-12 border border-gray-200 dark:border-gray-800 shadow-xl clip-card relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>

            <h3 className="font-display text-4xl font-black mb-6">FALE CONOSCO</h3>
            <p className="font-body text-gray-500 mb-8">Envie uma mensagem direta para nossa equipe via WhatsApp. O X-Bot irá te responder na hora!</p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Nome</label>
                    <input type="text" name="name" id="name" required className="w-full bg-surface-light dark:bg-surface-dark border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary px-0 py-3 transition-colors outline-none font-bold" placeholder="SEU NOME" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">WhatsApp</label>
                        <input type="tel" name="phone" id="phone" required className="w-full bg-surface-light dark:bg-surface-dark border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary px-0 py-3 transition-colors outline-none font-bold" placeholder="(47) 99999-9999" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">E-mail</label>
                        <input type="email" name="email" id="email" required className="w-full bg-surface-light dark:bg-surface-dark border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary px-0 py-3 transition-colors outline-none font-bold" placeholder="SEU@EMAIL.COM" />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Mensagem</label>
                    <textarea name="message" id="message" rows={4} required className="w-full bg-surface-light dark:bg-surface-dark border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary px-0 py-3 transition-colors outline-none font-bold resize-none" placeholder="OLÁ, GOSTARIA DE SABER MAIS SOBRE..."></textarea>
                </div>

                <button type="submit" disabled={status === "submitting"} className="w-full bg-primary text-white py-4 font-tech text-xl tracking-widest hover:bg-primary/90 transition-all duration-300 clip-button disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(99,36,178,0.4)]">
                    <Send size={20} />
                    {status === "submitting" ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
                </button>

                {status === "success" && (
                    <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-bold text-center text-sm border border-green-200 dark:border-green-800">
                        Mensagem enviada! Verifique seu WhatsApp.
                    </div>
                )}
            </form>
        </div>
    );
};

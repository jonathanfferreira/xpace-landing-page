import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const res = await fetch("https://formspree.io/f/xjkvzvgz", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <div className="bg-white dark:bg-black p-8 md:p-12 border border-gray-200 dark:border-gray-800 shadow-xl clip-card relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>

            <h3 className="font-display text-4xl font-black mb-6">FALE CONOSCO</h3>
            <p className="font-body text-gray-500 mb-8">Envie uma mensagem direta para nossa equipe. Responderemos em breve.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Nome</label>
                    <input type="text" name="name" id="name" required className="w-full bg-surface-light dark:bg-surface-dark border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary px-0 py-3 transition-colors outline-none font-bold" placeholder="SEU NOME" />
                </div>

                <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">E-mail</label>
                    <input type="email" name="email" id="email" required className="w-full bg-surface-light dark:bg-surface-dark border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary px-0 py-3 transition-colors outline-none font-bold" placeholder="SEU@EMAIL.COM" />
                </div>

                <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Mensagem</label>
                    <textarea name="message" id="message" rows={4} required className="w-full bg-surface-light dark:bg-surface-dark border-b-2 border-gray-300 dark:border-gray-700 focus:border-primary px-0 py-3 transition-colors outline-none font-bold resize-none" placeholder="OLÁ, GOSTARIA DE SABER MAIS SOBRE..."></textarea>
                </div>

                <button type="submit" disabled={status === "submitting"} className="w-full bg-black dark:bg-white text-white dark:text-black py-4 font-tech text-xl tracking-widest hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 clip-button disabled:opacity-50 disabled:cursor-not-allowed">
                    {status === "submitting" ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
                </button>

                {status === "success" && (
                    <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-bold text-center text-sm border border-green-200 dark:border-green-800">
                        Mensagem enviada com sucesso!
                    </div>
                )}
                {status === "error" && (
                    <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-bold text-center text-sm border border-red-200 dark:border-red-800">
                        Erro ao enviar. Tente novamente ou use o WhatsApp.
                    </div>
                )}
            </form>
        </div>
    );
};

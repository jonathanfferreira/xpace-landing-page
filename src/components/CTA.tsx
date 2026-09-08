import React from 'react';
import { motion } from 'framer-motion';

export const CTA: React.FC = () => {
  const scheduleUrl = "https://agendamento.nextfit.com.br/f9b1ea53-0e0e-4f98-9396-3dab7c9fbff4";
  const whatsappUrl = "https://wa.me/5547997931316?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20da%20XPACE%20em%20Joinville.";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bento-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative"
      >
        {/* Left Content Column */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10">
          
          <div className="pill-badge mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span>Experiência VIP em Joinville</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase leading-[0.95] text-text-main-light dark:text-text-main-dark mb-6">
            Sua primeira aula é <br />
            <span className="text-gradient inline-block">por nossa conta.</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl">
            Venha sentir a energia das nossas 4 salas acústicas, conhecer nossa metodologia acolhedora e encontrar seu próprio ritmo. Sem taxas ocultas, sem burocracia e com atenção total aos iniciantes.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <a
              href={scheduleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button-primary text-base group text-center"
            >
              <span>AGENDAR EXPERIMENTAL AGORA</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button-secondary text-base group text-center"
            >
              <span className="material-symbols-outlined text-emerald-500 text-lg">chat</span>
              <span>Dúvidas no WhatsApp</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-gray-500 dark:text-gray-400 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-emerald-500">lock</span>
              Agendamento Seguro NextFit
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-emerald-500">pin_drop</span>
              Centro de Joinville (R. Tijucas, 401)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-emerald-500">done_all</span>
              Vagas Limitadas por Turma
            </span>
          </div>

        </div>

        {/* Right Media Column */}
        <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full overflow-hidden group">
          <img
            src="/images/gallery/IMG_6201.JPG"
            alt="Bailarinos da XPACE em palco"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-background-dark/80 lg:via-transparent lg:to-transparent"></div>
          
          {/* Joinville Badge Floating Over Image */}
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white">
            <span className="text-[10px] font-mono tracking-widest text-secondary font-bold uppercase block mb-1">
              Joinville • Capital da Dança
            </span>
            <p className="text-xs text-gray-300 font-medium">
              Vibre no ritmo de quem transforma paixão em arte e potência todos os dias.
            </p>
          </div>
        </div>

      </motion.div>
    </section>
  );
};
import React from 'react';
import { motion } from 'framer-motion';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
      {/* Subtle Background Architectural Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Vision Pill & Vertical Accent */}
          <div className="md:w-1/3 flex flex-col items-start">
            <div className="pill-badge mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>Visão & Propósito</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase leading-[0.95] text-text-main-light dark:text-text-main-dark mb-6">
              O Código <br />
              <span className="text-gradient inline-block">XPACE.</span>
            </h2>

            <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">
              Joinville, Brasil • Desde 2023
            </p>
          </div>

          {/* Right Column: High-End Editorial Manifesto */}
          <div className="md:w-2/3 space-y-8">
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-text-main-light dark:text-text-main-dark"
            >
              Acreditamos que o corpo humano nasceu para se mover, criar e conectar — e não para passar a vida estático atrás de telas.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-black/10 dark:border-white/10 font-body text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Em um mundo hiperconectado e acelerado, a dança é o refúgio onde você desliga o ruído exterior e reencontra sua própria energia. Cada batida, cada respiração e cada coreografia são um convite para você ocupar o seu espaço com presença e verdade.
              </p>
              <p>
                Na XPACE, acolhemos quem nunca deu um passo de dança na vida e potencializamos quem sonha com os maiores palcos do país. Nosso compromisso no coração de Joinville é transformar o movimento em saúde, confiança inabalável e comunidade.
              </p>
            </div>

            {/* Quick Community Stats Chips */}
            <div className="pt-6 flex flex-wrap gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300">
                ⚡ Ambiente Zero Julgamento
              </span>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300">
                ❤️ Comunidade & Acolhimento
              </span>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300">
                🔥 Alta Energia & Expressão
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC<{ onOpenQuiz: () => void }> = ({ onOpenQuiz }) => {
  const scheduleUrl = "https://agendamento.nextfit.com.br/f9b1ea53-0e0e-4f98-9396-3dab7c9fbff4";

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Silicon Valley Precision Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(99,36,178,0.22)_0%,rgba(235,0,188,0.08)_40%,transparent_70%)] pointer-events-none -z-10"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        
        {/* Prestige Location Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/[0.06] border border-black/10 dark:border-white/10 mb-8 backdrop-blur-md shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
          <span className="text-xs font-mono tracking-widest uppercase font-bold text-gray-800 dark:text-gray-200">
            Joinville / SC • Capital Nacional da Dança
          </span>
        </motion.div>

        {/* Cinematic Display Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] mb-8 uppercase text-text-main-light dark:text-text-main-dark">
            ONDE O RITMO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent inline-block">
              VIRA POTÊNCIA.
            </span>
          </h1>
        </motion.div>

        {/* High-Impact Commercial Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-body font-normal leading-relaxed mb-10"
        >
          A maior escola de Danças Urbanas e Dança Contemporânea do Norte de SC. Metodologia transformadora do zero absoluto aos palcos nacionais, em 4 salas acústicas no coração de Joinville.
        </motion.p>

        {/* Silicon Valley Dual Action CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg"
        >
          {/* Primary Lead Trigger: Class Matcher */}
          <button
            onClick={onOpenQuiz}
            className="apple-button-primary w-full sm:w-auto text-base sm:text-lg group cursor-pointer"
          >
            <span>ENCONTRE SUA TURMA EM 30s</span>
            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
              bolt
            </span>
          </button>

          {/* Direct Trial Booking */}
          <a
            href={scheduleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button-secondary w-full sm:w-auto text-base sm:text-lg group"
          >
            <span className="material-symbols-outlined text-primary text-xl">calendar_today</span>
            <span>Aula Gratuita</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </motion.div>

        {/* Conversion Trust Bullets */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-y-2 gap-x-6 text-xs text-gray-500 dark:text-gray-400 font-mono"
        >
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-emerald-500">check_circle</span>
            Turmas Kids (4+), Teens e Adultos
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-emerald-500">check_circle</span>
            Piso especial que protege articulações
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-emerald-500">check_circle</span>
            1ª Aula Experimental 100% Gratuita
          </span>
        </motion.div>

        {/* Modern Minimalist Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => {
            const next = document.getElementById('manifesto') || document.getElementById('about');
            next?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="w-5 h-9 rounded-full border-2 border-gray-400 dark:border-gray-600 group-hover:border-primary flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-gray-300 group-hover:bg-primary transition-colors"
            />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase group-hover:text-primary transition-colors">
            EXPLORAR
          </span>
        </motion.div>

      </div>
    </section>
  );
};
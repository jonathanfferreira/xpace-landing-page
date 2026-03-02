import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';

export const CompanyHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyber-pink/5 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-tech tracking-widest text-sm border border-secondary/20">
            A ELITE DA XPACE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase mb-6 text-text-main-light dark:text-text-main-dark leading-[0.9]"
        >
          DANCE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-cyber-pink italic">COMPANY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Nossa equipe de competição e performances. O mais alto nível de excelência artística, técnica e representação da marca XPACE nos palcos do Brasil e do mundo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center relative"
        >
          {/* Seta de indicação */}
          <motion.img 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
            src="/images/seta-indicacao.png" 
            alt="Seta" 
            className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 hidden md:block"
          />

          <MagneticButton>
            <a href="#performances" className="relative group overflow-hidden rounded-sm">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-cyber-pink rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
              <div className="relative px-8 py-4 bg-black text-white dark:bg-white dark:text-black clip-button font-tech text-xl tracking-widest transition-all duration-300 flex items-center gap-2 group-hover:bg-opacity-90">
                <span>VER PERFORMANCES</span>
                <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">play_arrow</span>
              </div>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a href="#awards" className="px-8 py-4 bg-transparent border border-gray-300 dark:border-gray-700 text-text-main-light dark:text-text-main-dark clip-button font-tech text-xl tracking-widest hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
              <span>NOSSO LEGADO</span>
              <span className="material-symbols-outlined text-sm">emoji_events</span>
            </a>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};

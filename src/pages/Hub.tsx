import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TiltCard } from '../../components/TiltCard';
import { CustomCursor } from '../../components/CustomCursor';
import { SEO } from '../../components/SEO';
import { playHoverSound, playClickSound } from '../../utils/audio';

export const Hub: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background-dark text-white overflow-hidden p-4">
      <SEO
        title="XPACE | Escolha seu destino"
        description="Bem-vindo ao universo XPACE. Escolha entre a nossa Escola de Dança ou conheça a nossa Dance Company."
        keywords="xpace, escola de dança, joinville, dance company, danças urbanas"
      />
      <CustomCursor />

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/background-2026.png"
          alt="Xpace Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <img src="/images/logo/XPACE PERFIL BRANCO.png" alt="XPACE Logo" className="h-16 md:h-24 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
          <h1 className="font-display text-4xl md:text-6xl font-black tracking-tighter uppercase glitch-text" data-text="Escolha seu destino">
            Escolha seu destino
          </h1>
          <p className="font-tech text-gray-400 tracking-widest mt-4 text-lg md:text-xl">
            O UNIVERSO XPACE EM SUAS MÃOS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">

          {/* Card: Escola de Dança */}
          <TiltCard>
            <Link
              to="/escola"
              className="block h-full"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative h-full rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md p-8 hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,36,178,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary font-tech tracking-widest text-sm mb-6 border border-primary/30">
                      A BASE
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-black mb-4 uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all">
                      Escola de Dança
                    </h2>
                    <p className="font-body text-gray-400 leading-relaxed mb-8">
                      Aulas regulares, workshops, aluguel de salas e o projeto XPACE PRO. Onde tudo começa e a evolução acontece.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-primary font-tech tracking-widest text-xl group-hover:translate-x-2 transition-transform duration-300">
                    ACESSAR O SITE <span className="material-symbols-outlined">arrow_forward</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </TiltCard>

          {/* Card: Dance Company */}
          <TiltCard>
            <Link
              to="/company"
              className="block h-full"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative h-full rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md p-8 hover:border-secondary transition-all duration-500 hover:shadow-[0_0_30px_rgba(235,0,188,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary font-tech tracking-widest text-sm mb-6 border border-secondary/30">
                      A ELITE
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-black mb-4 uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-secondary transition-all">
                      Dance Company
                    </h2>
                    <p className="font-body text-gray-400 leading-relaxed mb-8">
                      Nossa equipe de competição e performances. O mais alto nível de excelência artística e representação da marca.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-secondary font-tech tracking-widest text-xl group-hover:translate-x-2 transition-transform duration-300">
                    CONHECER A EQUIPE <span className="material-symbols-outlined">arrow_forward</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </TiltCard>

        </div>
      </div>
    </div>
  );
};

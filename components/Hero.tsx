import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Blobs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-secondary rounded-full blur-[100px] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300 cursor-default">
          <span className="w-2 h-2 rounded-full bg-cyber-pink animate-pulse"></span>
          <span className="text-sm font-tech tracking-widest text-gray-500 uppercase">Experiência de Dança Digital</span>
        </div>

        {/* Main Title */}
        <h1 className="font-display font-bold text-7xl md:text-9xl tracking-tight mb-8 leading-[0.85]">
          MOVA-SE <br />
          <span className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-pink via-primary via-tertiary to-secondary relative group cursor-default">
            ALÉM
          </span> <br />
          DOS LIMITES
        </h1>

        {/* Subtext */}
        <div className="max-w-xl mx-auto backdrop-blur-sm bg-white/30 dark:bg-black/30 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors duration-300">
          <p className="text-lg md:text-xl text-text-main-light dark:text-text-main-dark font-body font-medium tracking-wide leading-relaxed">
            Educação em Dança Impulsionada por Tecnologia Premium. <br /> Onde o ritmo encontra o futuro.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6 items-center">
          
          {/* Main CTA with Enhanced Neon Pulse and Shimmer */}
          <div className="relative group">
            {/* Pulsing Glow Layer */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-cyber-pink to-secondary rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse group-hover:animate-none"></div>
            
            {/* Stronger Hover Glow */}
            <div className="absolute -inset-2 bg-primary/40 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <a href="#plans" className="relative block px-12 py-6 bg-black dark:bg-white text-white dark:text-black text-2xl font-tech tracking-widest clip-button transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden shadow-[0_0_15px_rgba(127,0,255,0.3)] group-hover:shadow-[0_0_40px_rgba(235,0,188,0.6)]">
              <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-3">
                COMECE A DANÇAR
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
              {/* Internal Shimmer Effect */}
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 dark:via-black/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>
            </a>
          </div>

          <a href="#schedule" className="px-8 py-4 border border-black dark:border-white text-2xl font-tech tracking-widest clip-button hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group hover:-translate-y-1 bg-transparent backdrop-blur-sm">
            <span className="material-symbols-outlined text-sm group-hover:rotate-180 transition-transform duration-500">calendar_month</span>
            Ver Horários
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
        <span className="text-sm font-tech tracking-widest animate-bounce">ROLEAR</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-black dark:via-white to-transparent"></div>
      </div>
    </section>
  );
};
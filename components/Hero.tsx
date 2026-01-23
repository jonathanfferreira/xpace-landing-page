import React from 'react';

export const Hero: React.FC<{ onOpenQuiz: () => void }> = ({ onOpenQuiz }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Animated Blobs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-secondary rounded-full blur-[100px] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">

        {/* Main Title */}
        <h1 className="font-display font-bold text-7xl md:text-9xl tracking-tight mb-8 leading-[0.85] text-black dark:text-white transition-colors duration-300">
          MOVA-SE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-gray-400 dark:from-white dark:via-gray-200 dark:to-gray-400">
            ALÉM DOS LIMITES
          </span>
        </h1>

        {/* Subtext */}
        <div className="max-w-xl mx-auto backdrop-blur-sm bg-white/5 dark:bg-black/20 p-4 rounded-xl border border-black/10 dark:border-white/10">
          <p className="text-lg md:text-xl text-text-main-light dark:text-text-main-dark font-body font-medium tracking-wide leading-relaxed">
            Educação em Dança Impulsionada por Tecnologia Premium.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6 items-center">

          {/* Main CTA - Quiz Trigger */}
          <div className="relative group cursor-pointer" onClick={onOpenQuiz}>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-tertiary rounded-full blur opacity-40 group-hover:opacity-80 transition duration-500"></div>

            <button className="relative block px-12 py-6 bg-black dark:bg-white text-white dark:text-black text-2xl font-tech tracking-widest rounded-full transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10 font-bold flex items-center justify-center gap-3">
                DESCUBRA SEU ESTILO
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">school</span>
              </span>
            </button>
          </div>

          <a href="#plans" className="px-8 py-4 border border-black dark:border-white text-black dark:text-white text-xl font-tech tracking-widest rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group hover:-translate-y-1">
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
            Matricule-se
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
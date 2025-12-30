import React from 'react';

export const CTA: React.FC = () => {
  const scheduleUrl = "https://agendamento.nextfit.com.br/f9b1ea53-0e0e-4f98-9396-3dab7c9fbff4";

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
      <div className="bg-black text-white flex flex-col justify-center p-12 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>

        <h2 className="font-display text-5xl font-black mb-6 relative z-10">
          Primeira Aula <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyber-pink">Grátis</span>
        </h2>

        <p className="font-body text-gray-400 text-lg mb-10 max-w-md tracking-wide relative z-10">
          Experimente a atmosfera, conheça nossa comunidade e encontre seu ritmo. Sem compromisso necessário.
        </p>

        <div className="max-w-sm relative z-10">
          <a
            href={scheduleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white text-black py-4 font-tech text-xl tracking-widest hover:bg-primary hover:text-white transition-all duration-300 clip-button flex justify-between px-6 items-center group active:scale-[0.98]"
          >
            <span>AGENDAR AULA AGORA</span>
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
          </a>
          <p className="mt-4 text-xs text-gray-500 font-bold tracking-widest uppercase flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">open_in_new</span>
            Agendamento via NextFit
          </p>
        </div>
      </div>

      <div className="relative h-[400px] md:h-auto overflow-hidden group">
        <img
          alt="Group of dancers in motion with colorful lighting"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src="/images/gallery/IMG_6201.JPG"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent mix-blend-multiply opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
      </div>
    </section>
  );
};
import React from 'react';

export const Marquee: React.FC = () => {
  return (
    <div className="bg-black dark:bg-white text-white dark:text-black py-10 md:py-12 overflow-hidden border-y border-gray-800 dark:border-gray-200 relative z-20">
      <div className="flex whitespace-nowrap animate-marquee gap-16 font-tech font-bold text-2xl tracking-widest items-center">
        {/* We repeat the content to ensure smooth scrolling loop */}
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="flex items-center gap-4"><span className="w-3 h-3 bg-secondary rounded-full"></span> Melhor Escola de Dança Urbana 2023</span>
            <span className="flex items-center gap-4"><span className="w-3 h-3 bg-primary rounded-full"></span> Campeões Nacionais de Hip Hop</span>
            <span className="flex items-center gap-4"><span className="w-3 h-3 bg-tertiary rounded-full"></span> Instrutores Mais Bem Avaliados</span>
            <span className="flex items-center gap-4"><span className="w-3 h-3 bg-cyber-pink rounded-full"></span> Instalações de Última Geração</span>
            <span className="flex items-center gap-4"><span className="w-3 h-3 bg-secondary rounded-full"></span> Melhor Escola de Dança Urbana 2023</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
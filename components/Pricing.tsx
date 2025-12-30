import React from 'react';

export const Pricing: React.FC = () => {
  const nextFitUrl = "https://venda.nextfit.com.br/54a0cf4a-176f-46d3-b552-aad35019a4ff/contratos";

  return (
    <section id="plans" className="py-40 bg-background-light dark:bg-background-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary via-tertiary to-secondary opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-display text-6xl md:text-8xl font-black text-center mb-6 tracking-tighter">PLANOS</h2>
        <p className="text-center font-tech text-gray-500 mb-24 tracking-widest text-sm md:text-base">VÁLIDO PARA TODAS AS MODALIDADES • 2026</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch mb-20">
          
          {/* MENSAL */}
          <div className="border border-gray-200 dark:border-gray-800 p-8 flex flex-col bg-white dark:bg-black clip-card hover:-translate-y-2 transition-transform duration-300 h-full relative group hover:shadow-xl dark:hover:shadow-neon/20">
            <h3 className="font-display text-4xl font-bold mb-2 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">MENSAL</h3>
            <p className="text-gray-500 font-tech font-bold mb-6 text-sm tracking-widest">FIDELIDADE 30 DIAS</p>
            
            <div className="mb-8 pb-8 border-b border-dashed border-gray-300 dark:border-gray-700">
                <span className="block text-xs font-bold text-gray-400 mb-1 tracking-wider">ACESSO TOTAL</span>
                <div className="text-5xl font-display font-bold tracking-tighter">R$215<span className="text-lg text-gray-400 font-body tracking-normal">/mês</span></div>
            </div>

            <div className="mb-8">
                <span className="block text-xs font-bold text-gray-400 mb-1 tracking-wider">TURMAS 1X NA SEMANA</span>
                <div className="text-3xl font-display font-bold tracking-tighter text-gray-600 dark:text-gray-300">R$130<span className="text-base text-gray-400 font-body tracking-normal">/mês</span></div>
            </div>

            <a href={nextFitUrl} target="_blank" rel="noopener noreferrer" className="mt-auto w-full border-2 border-black dark:border-white py-4 font-tech text-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 tracking-widest clip-button active:scale-95 text-center flex items-center justify-center">
              ESCOLHER MENSAL
            </a>
          </div>

          {/* ANUAL (Hero/Ticket) */}
          <div className="border-2 border-primary p-1 bg-gradient-to-br from-primary via-cyber-pink to-secondary relative transform md:-translate-y-6 shadow-2xl shadow-primary/20 clip-card z-10 hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-surface-light dark:bg-[#0f0f0f] p-8 h-full clip-card flex flex-col relative overflow-hidden">
               {/* Noise texture for paper feel */}
               <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay pointer-events-none"></div>
               
              <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-cyber-pink text-white text-sm font-tech font-bold px-6 py-2 uppercase tracking-widest z-10 clip-button shadow-neon animate-pulse">
                Melhor Valor
              </div>
              
              <h3 className="font-display text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyber-pink mt-4">ANUAL</h3>
              <p className="text-primary font-tech font-bold mb-8 text-lg tracking-widest">FIDELIDADE 90 DIAS</p>
              
              {/* Ticket Cutout Effect Visuals */}
              <div className="absolute -left-2 top-1/2 w-4 h-8 bg-black rounded-r-full"></div>
              <div className="absolute -right-2 top-1/2 w-4 h-8 bg-black rounded-l-full"></div>
              <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-gray-700 my-2 opacity-50"></div>

              <div className="py-6">
                <span className="block text-sm font-bold text-primary mb-1 tracking-wider uppercase">Acesso Total</span>
                <div className="text-7xl font-display font-bold mb-2 tracking-tighter text-black dark:text-white">R$165<span className="text-2xl text-gray-400 font-body tracking-normal">/mês</span></div>
                <p className="text-xs text-gray-500 font-bold max-w-[200px] leading-tight">*Valor referente ao plano anual com acesso livre.</p>
              </div>

              <div className="mb-10 bg-black/5 dark:bg-white/5 p-4 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 tracking-wider uppercase">Opção 1x na Semana</span>
                <div className="text-4xl font-display font-bold tracking-tighter text-gray-700 dark:text-gray-200">R$100<span className="text-lg text-gray-500 font-body tracking-normal">/mês</span></div>
              </div>

              <a href={nextFitUrl} target="_blank" rel="noopener noreferrer" className="mt-auto w-full bg-gradient-to-r from-primary to-cyber-pink text-white py-5 font-tech text-2xl hover:brightness-110 hover:shadow-neon transition-all duration-300 tracking-widest clip-button flex justify-center items-center gap-2 group active:scale-95 transform text-center">
                <span>GARANTIR ANUAL</span>
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* SEMESTRAL */}
          <div className="border border-gray-200 dark:border-gray-800 p-8 flex flex-col bg-white dark:bg-black clip-card hover:-translate-y-2 transition-transform duration-300 h-full relative group hover:shadow-xl dark:hover:shadow-neon/20">
            <h3 className="font-display text-4xl font-bold mb-2 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">SEMESTRAL</h3>
            <p className="text-gray-500 font-tech font-bold mb-6 text-sm tracking-widest">FIDELIDADE 60 DIAS</p>
            
            <div className="mb-8 pb-8 border-b border-dashed border-gray-300 dark:border-gray-700">
                <span className="block text-xs font-bold text-gray-400 mb-1 tracking-wider">ACESSO TOTAL</span>
                <div className="text-5xl font-display font-bold tracking-tighter">R$195<span className="text-lg text-gray-400 font-body tracking-normal">/mês</span></div>
            </div>

            <div className="mb-8">
                <span className="block text-xs font-bold text-gray-400 mb-1 tracking-wider">TURMAS 1X NA SEMANA</span>
                <div className="text-3xl font-display font-bold tracking-tighter text-gray-600 dark:text-gray-300">R$115<span className="text-base text-gray-400 font-body tracking-normal">/mês</span></div>
            </div>

            <a href={nextFitUrl} target="_blank" rel="noopener noreferrer" className="mt-auto w-full border-2 border-black dark:border-white py-4 font-tech text-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 tracking-widest clip-button active:scale-95 text-center flex items-center justify-center">
              ESCOLHER SEMESTRAL
            </a>
          </div>

        </div>

        {/* Footer Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 p-8 flex items-center justify-between clip-card group hover:border-primary transition-colors cursor-pointer duration-300 hover:shadow-lg">
                <div>
                    <h4 className="font-display text-2xl font-bold mb-1 group-hover:text-primary transition-colors">MATRÍCULA</h4>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Taxa Única de Ingresso</p>
                </div>
                <div className="text-4xl font-display font-black text-primary group-hover:scale-110 transition-transform duration-300">R$80</div>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 p-8 flex items-center justify-between clip-card group hover:border-secondary transition-colors cursor-pointer duration-300 hover:shadow-lg">
                <div>
                    <h4 className="font-display text-2xl font-bold mb-1 group-hover:text-secondary transition-colors">MODALIDADE EXTRA</h4>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Adicione ao seu plano</p>
                </div>
                <div className="text-4xl font-display font-black text-secondary group-hover:scale-110 transition-transform duration-300">+R$75<span className="text-sm text-gray-400 font-body font-normal">/mês</span></div>
            </div>
        </div>

      </div>
    </section>
  );
};
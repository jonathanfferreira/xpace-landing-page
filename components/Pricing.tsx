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

          {/* PASSE LIVRE (Feature) */}
          <div className="md:col-span-3 border-2 border-[#FFD700] p-1 bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] relative transform hover:scale-[1.01] transition-transform duration-300 shadow-[0_0_30px_rgba(255,215,0,0.3)] z-20 mb-8 rounded-3xl">
            <div className="bg-black p-8 h-full rounded-[20px] flex flex-col md:flex-row items-center justify-between relative overflow-hidden gap-8">
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-shimmer pointer-events-none"></div>

              <div className="text-center md:text-left z-10">
                <div className="inline-block bg-[#FFD700] text-black font-tech font-bold px-4 py-1 rounded-full text-sm mb-4 tracking-widest uppercase">
                  Acesso Ilimitado
                </div>
                <h3 className="font-display text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#white] mb-2 uppercase italic">PASSE LIVRE</h3>
                <p className="text-gray-300 font-body text-lg max-w-xl">
                  A experiência XPACE definitiva. <strong className="text-[#FFD700]">Faça quantas aulas quiser</strong>, em qualquer modalidade. Liberdade total para sua evolução.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center bg-white/5 p-6 rounded-2xl border border-[#FFD700]/30 min-w-[280px]">
                <span className="text-[#FFD700] font-tech text-sm tracking-widest uppercase mb-2">Plano Anual</span>
                <div className="text-6xl font-display font-black text-white mb-2">R$350<span className="text-xl text-gray-400 font-body font-normal">/mês</span></div>
                <a href={nextFitUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-[#FFD700] text-black hover:bg-white transition-colors duration-300 py-4 px-8 rounded-xl font-bold font-tech text-lg tracking-widest uppercase text-center mt-2">
                  QUERO SER VIP
                </a>
              </div>
            </div>
          </div>


          {/* MENSAL */}
          <div className="border border-gray-200 dark:border-gray-800 p-8 flex flex-col bg-white dark:bg-black clip-card hover:-translate-y-2 transition-transform duration-300 h-full relative group hover:shadow-xl dark:hover:shadow-neon/20">
            <h3 className="font-display text-4xl font-bold mb-2 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">MENSAL</h3>
            <p className="text-gray-500 font-tech font-bold mb-6 text-sm tracking-widest">FIDELIDADE 30 DIAS</p>

            <div className="mb-8 pb-8 border-b border-dashed border-gray-300 dark:border-gray-700">
              <span className="block text-xs font-bold text-gray-400 mb-1 tracking-wider">TURMAS 2X NA SEMANA</span>
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
                <span className="block text-sm font-bold text-primary mb-1 tracking-wider uppercase">Turmas 2x na Semana</span>
                <div className="text-7xl font-display font-bold mb-2 tracking-tighter text-black dark:text-white">R$165<span className="text-2xl text-gray-400 font-body tracking-normal">/mês</span></div>
                <p className="text-xs text-gray-500 font-bold max-w-[200px] leading-tight">*Valor referente ao plano anual para turmas 2x na semana.</p>
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
              <span className="block text-xs font-bold text-gray-400 mb-1 tracking-wider">TURMAS 2X NA SEMANA</span>
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

        {/* Corporate Benefits */}
        {/* <div className="mt-16 text-center">
          <h3 className="font-display text-3xl font-black mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white uppercase">Parceiros Corporativos</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">

            <div className="flex flex-col items-center group">
              <div className="h-24 px-8 bg-white rounded-2xl flex items-center justify-center mb-4 border border-gray-200 hover:border-[#F22953] transition-colors duration-300 shadow-lg">
                <img src="/images/partners/wellhub.png" alt="Wellhub" className="h-12 w-auto object-contain" />
              </div>
              <div>
                <p className="font-display text-xl font-bold text-[#F22953]">Silver+</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">A partir do plano</p>
              </div>
            </div>

            <div className="flex flex-col items-center group">
              <div className="h-24 px-8 bg-white rounded-2xl flex items-center justify-center mb-4 border border-gray-200 hover:border-[#00C86F] transition-colors duration-300 shadow-lg">
                <img src="/images/partners/totalpass.png" alt="TotalPass" className="h-12 w-auto object-contain" />
              </div>
              <div>
                <p className="font-display text-xl font-bold text-[#00C86F]">TP3+</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">A partir do plano</p>
              </div>
            </div>

          </div>
        </div> */}

      </div>
    </section>
  );
};
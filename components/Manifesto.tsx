import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-40 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="absolute right-0 top-20 text-[20vw] font-display font-bold text-gray-50 dark:text-gray-900 leading-none select-none pointer-events-none opacity-50">
        X
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/4 pt-4 border-t-2 border-primary">
            <span className="font-tech text-xs tracking-widest text-primary font-bold block mb-2">01 // VISÃO</span>
            <h2 className="font-display text-4xl font-bold leading-none mb-4">O<br />CÓDIGO<br />XPACE</h2>
          </div>
          <div className="md:w-3/4 space-y-12">
            <div className="manifesto-block font-display text-2xl md:text-4xl font-bold leading-snug tracking-tight text-text-main-light dark:text-text-main-dark">
              <p className="mb-8">
                SOMOS MAIS DO QUE APENAS UMA ESCOLA DE DANÇA — SOMOS UM ESPAÇO QUE OFERECE UMA NOVA EXPERIÊNCIA DE DANÇA, UMA QUE TRANSFORMA MOVIMENTOS EM ARTE. EM UM UNIVERSO ONDE A DANÇA INTERSECTA COM O DIGITAL, TRANSFORMAMOS O MOVIMENTO EM UMA LINGUAGEM CAPAZ DE CONECTAR CORAÇÕES E MENTES.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-body text-sm font-medium tracking-widest text-text-muted-light dark:text-text-muted-dark border-t border-gray-200 dark:border-gray-800 pt-10">
              <p>
                ESTAMOS COMPROMETIDOS EM CONTINUAR NOSSA DEFESA DA DANÇA ATRAVÉS DA MOBILIDADE CORPORAL. [DADOS TÊM MOSTRADO QUE CADA VEZ MAIS PESSOAS ESTÃO PASSANDO SEU TEMPO PRESAS AO USO DE TELAS].
              </p>
              <p>
                SENTIMOS QUE HAVIA UMA MISSÃO: RESGATAR O RITMO EM UM ESPAÇO FÍSICO, DESAFIANDO O ORDINÁRIO E DESPERTANDO NOVAS FORMAS DE SOCIALIZAR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
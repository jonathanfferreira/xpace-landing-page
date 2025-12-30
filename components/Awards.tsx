import React from 'react';

const awardsData = [
  {
    month: "JULHO",
    event: "Temporada de Festivais",
    color: "primary",
    items: [
      { text: "FIH2: 2º Lugar - Categoria Avançado", medal: "silver" },
      { text: "HHU: 1º Lugar - Small Crew Cadet", medal: "gold" },
      { text: "HHU: 1º Lugar - Duo Cadet", medal: "gold" },
      { text: "HHU: 1º Lugar - Duo Júnior", medal: "gold" },
      { text: "FDJ: 2º Lugar - Solo Masculino Sênior", medal: "silver" }
    ]
  },
  {
    month: "SETEMBRO",
    event: "Joinfestival",
    color: "secondary",
    items: [
      { text: "Prêmio Melhor Coreógrafo", medal: "trophy" },
      { text: "1º Lugar - Conjunto Sênior", medal: "gold" },
      { text: "1º Lugar - Conjunto Júnior", medal: "gold" },
      { text: "1º Lugar - Conjunto Infantil", medal: "gold" },
      { text: "1º Lugar - Solo Masculino", medal: "gold" },
      { text: "1º Lugar - Duo Sênior", medal: "gold" },
      { text: "2º Lugar - Duo Júnior", medal: "silver" }
    ]
  },
  {
    month: "OUTUBRO",
    event: "Hip Hop International",
    color: "cyber-pink",
    items: [
      { text: "2º Lugar - Júnior", medal: "silver" },
      { text: "2º Lugar - Mini Crew", medal: "silver" },
      { text: "5º Lugar - Adult", medal: "bronze" }
    ]
  },
  {
    month: "DEZEMBRO",
    event: "Festival de Dança de Indaial",
    color: "tertiary",
    items: [
      { text: "Prêmio Melhor Coreógrafo", medal: "trophy" },
      { text: "Prêmio Melhor Grupo", medal: "trophy" },
      { text: "1º Lugar - Conjunto Júnior", medal: "gold" },
      { text: "1º Lugar - Conjunto Adulto", medal: "gold" },
      { text: "1º Lugar - Solo Masculino", medal: "gold" },
      { text: "1º Lugar - Duo Sênior", medal: "gold" },
      { text: "1º Lugar - Duo Adulto", medal: "gold" },
      { text: "1º Lugar - Trio Sênior", medal: "gold" },
      { text: "2º Lugar - Conjunto Júnior", medal: "silver" }
    ]
  }
];

const curiosities = [
  "Único grupo de Danças Urbanas de Joinville a garantir 2º Lugar na Categoria Avançada do FIH2.",
  "Único grupo de Danças Urbanas de Joinville a classificar-se com 3 coreografias para o FDJ.",
  "Destaque no HHI com 4 coreografias classificadas e 2º lugar na categoria Mini Crew."
];

export const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-32 bg-background-light dark:bg-background-dark relative border-t border-gray-100 dark:border-gray-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <span className="font-tech text-primary tracking-widest uppercase mb-2 block">Hall of Fame // Temporada 2025</span>
          <h2 className="font-display text-5xl md:text-7xl font-black text-text-main-light dark:text-text-main-dark mb-6">
            NOSSO <br/> LEGADO
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-tertiary"></div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {awardsData.map((data, index) => (
            <div key={index} className={`relative group`}>
               {/* Border Gradient */}
               <div className={`absolute -inset-0.5 bg-gradient-to-b from-${data.color} to-transparent opacity-20 group-hover:opacity-100 transition duration-500 rounded-2xl`}></div>
               
               <div className="relative h-full bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col">
                  {/* Month Badge */}
                  <div className={`inline-block px-3 py-1 bg-${data.color}/10 text-${data.color} font-tech text-lg tracking-widest font-bold rounded mb-4 w-max`}>
                    {data.month}
                  </div>
                  
                  {/* Event Title */}
                  <h3 className="font-display text-2xl font-bold leading-tight mb-6 min-h-[3rem] text-text-main-light dark:text-text-main-dark">
                    {data.event}
                  </h3>

                  {/* List */}
                  <ul className="space-y-3 font-body text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
                    {data.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <span className={`mt-0.5 material-symbols-outlined text-lg ${
                            item.medal === 'gold' ? 'text-yellow-500' : 
                            item.medal === 'silver' ? 'text-gray-400' : 
                            item.medal === 'bronze' ? 'text-orange-700' : 
                            'text-primary'
                        }`}>
                            {item.medal === 'trophy' ? 'emoji_events' : 'workspace_premium'}
                        </span>
                        <span className={`${item.medal === 'gold' || item.medal === 'trophy' ? 'text-text-main-light dark:text-text-main-dark font-bold' : ''}`}>
                            {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          ))}
        </div>

        {/* Curiosities / Highlights Section */}
        <div className="relative rounded-3xl overflow-hidden bg-black text-white p-8 md:p-12 border border-gray-800">
             {/* Animated Background */}
             <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[shimmer_3s_linear_infinite]"></div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10 items-center">
                <div className="lg:col-span-1">
                    <h3 className="font-display text-4xl md:text-5xl font-black mb-4 uppercase leading-none">
                        Destaques <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Inéditos</span>
                    </h3>
                    <p className="font-tech text-gray-400 tracking-widest text-lg">XPACE RECORDS // DATA LOG</p>
                </div>

                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {curiosities.map((fact, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                            <span className="material-symbols-outlined text-3xl text-primary mb-4">verified</span>
                            <p className="font-body text-sm font-medium leading-relaxed text-gray-300">
                                {fact}
                            </p>
                        </div>
                    ))}
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};
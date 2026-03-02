import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, CheckCircle2 } from 'lucide-react';

const awardsData = [
  {
    month: "JULHO",
    event: "Temporada de Julho // 2025",
    color: "primary",
    items: [
      { text: "Conquista: 2º Lugar - Categoria Avançado (FIH2)", medal: "silver" },
      { text: "Destaque: Único grupo de Joinville na categoria Avançado", medal: "star" },
      { text: "HHU: 1º Lugar - Small Crew Cadet", medal: "gold" },
      { text: "HHU: 1º Lugar - Duo Júnior", medal: "gold" },
      { text: "FDJ: 2º Lugar - Solo Masculino Sênior", medal: "silver" }
    ]
  },
  {
    month: "SETEMBRO",
    event: "Joinfestival // 2025",
    color: "secondary",
    items: [
      { text: "Prêmio Melhor Coreógrafo", medal: "trophy" },
      { text: "1º Lugar - Conjunto Sênior", medal: "gold" },
      { text: "1º Lugar - Conjunto Júnior", medal: "gold" },
      { text: "1º Lugar - Conjunto Infantil", medal: "gold" },
      { text: "1º Lugar - Duo Sênior", medal: "gold" }
    ]
  },
  {
    month: "OUTUBRO",
    event: "Hip Hop International // 2025",
    color: "cyber-pink",
    items: [
      { text: "2º Lugar Nacional - Mini Crew (SANTOS)", medal: "silver" },
      { text: "2º Lugar Nacional - Júnior", medal: "silver" },
      { text: "Classificação para o World Finals", medal: "star" },
      { text: "5º Lugar - Adult Crew", medal: "bronze" }
    ]
  },
  {
    month: "DEZEMBRO",
    event: "Festival de Indaial // 2025",
    color: "tertiary",
    items: [
      { text: "Prêmio Melhor Coreógrafo", medal: "trophy" },
      { text: "Prêmio Melhor Grupo", medal: "trophy" },
      { text: "1º Lugar - Conjunto Júnior", medal: "gold" },
      { text: "1º Lugar - Conjunto Adulto", medal: "gold" },
      { text: "1º Lugar - Duo Adulto", medal: "gold" }
    ]
  }
];

const highlights = [
  {
    icon: <Medal className="w-8 h-8 text-primary" />,
    text: "Único grupo de Joinville a garantir dois 2º lugares na Categoria Avançada na temporada de Julho 2025."
  },
  {
    icon: <Star className="w-8 h-8 text-secondary" />,
    text: "Classificação histórica no HHI Brasil (Santos) com 2 coreografias no pódio nacional (Mini Crew e Júnior)."
  },
  {
    icon: <Trophy className="w-8 h-8 text-cyber-pink" />,
    text: "Múltiplos prêmios de Melhor Coreógrafo e Melhor Grupo em festivais competitivos estaduais."
  }
];

export const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-32 bg-white dark:bg-background-dark relative border-t border-gray-100 dark:border-gray-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-tech text-primary tracking-widest uppercase mb-2 block font-bold">Hall of Fame // Temporada 2025</span>
          <h2 className="font-display text-5xl md:text-8xl font-black text-text-main-light dark:text-text-main-dark mb-6 leading-none">
            LEGADO <br />
            <span className="text-primary italic">VITORIOSO</span>
          </h2>
          <div className="h-1.5 w-32 bg-primary"></div>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {awardsData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full"
            >
              <div className="relative h-full bg-surface-light dark:bg-surface-dark p-8 rounded-[2rem] border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                {/* Month */}
                <div className={`px-4 py-1.5 rounded-full font-tech font-bold text-sm tracking-widest mb-6 w-max bg-opacity-10`} style={{
                  backgroundColor: `var(--${data.color})1a`,
                  color: `var(--${data.color})`
                }}>
                  {data.month}
                </div>

                {/* Event */}
                <h3 className="font-display text-2xl font-bold leading-tight mb-8 text-text-main-light dark:text-text-main-dark">
                  {data.event}
                </h3>

                {/* Items list */}
                <ul className="space-y-4 font-body text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
                  {data.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 transition-colors ${item.medal === 'gold' ? 'text-yellow-500' :
                          item.medal === 'silver' ? 'text-gray-400' :
                            item.medal === 'star' ? 'text-primary' :
                              'text-primary/50'
                        }`} />
                      <span className={`${item.medal === 'star' || item.medal === 'gold' ? 'text-text-main-light dark:text-text-main-dark font-bold' : ''}`}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex flex-col gap-6 hover:bg-white/10 transition-colors group"
            >
              <div className="w-16 h-16 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {h.icon}
              </div>
              <p className="font-body text-lg font-medium leading-relaxed dark:text-gray-300">
                {h.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
import React from 'react';

export const Features: React.FC = () => {
  const items = [
    {
      subtitle: "EDUCAÇÃO",
      title: "XPACE\nESCOLA",
      description: "Nossa metodologia de ensino é pilar central. Oferecemos turmas regulares de Hip Hop, Jazz Funk, K-Pop, Heels e muito mais. Do nível iniciante ao avançado, focamos no desenvolvimento técnico, consciência corporal e autoconfiança de cada aluno.",
      icon: "school",
      borderColor: "border-primary",
      iconColor: "text-primary",
      hoverShadow: "hover:shadow-neon"
    },
    {
      subtitle: "COMPETIÇÃO",
      title: "XPACE\nCOMPANY",
      description: "A elite da performance. Nossos grupos de competição representam a XPACE em festivais nacionais e internacionais (como FIH2 e Festival de Joinville). Treinamento de alto rendimento para quem busca o cenário profissional.",
      icon: "trophy",
      borderColor: "border-secondary",
      iconColor: "text-secondary",
      hoverShadow: "hover:shadow-neon-orange"
    },
    {
      subtitle: "CRIATIVO",
      title: "XPACE\nPROJECTS",
      description: "O laboratório de inovação artística. Produção de videoclipes conceituais, espetáculos imersivos, workshops com convidados internacionais e projetos especiais que unem moda, dança e tecnologia.",
      icon: "movie_creation",
      borderColor: "border-tertiary",
      iconColor: "text-tertiary",
      hoverShadow: "hover:shadow-xl"
    },
    {
      subtitle: "IMERSÃO",
      title: "XPERIENCE\nURBAN",
      description: "Mais que um evento, um movimento. O Xperience Urban Dance é nossa imersão anual que reúne a comunidade para battles, jams, workshops intensivos e showcases, celebrando a cultura urbana em sua essência.",
      icon: "festival",
      borderColor: "border-cyber-pink",
      iconColor: "text-cyber-pink",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(235,0,188,0.3)]"
    }
  ];

  return (
    <section id="features" className="py-40 bg-surface-light dark:bg-surface-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4 uppercase">O Universo XPACE</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-tertiary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {items.map((item, index) => (
            <div key={index} className={`group p-8 lg:p-10 bg-background-light dark:bg-background-dark relative overflow-hidden clip-card border-l-4 ${item.borderColor} shadow-lg ${item.hoverShadow} transition-all duration-300 flex flex-col h-full hover:-translate-y-2`}>
              {/* Background Icon Faded */}
              <div className="absolute -top-4 -right-4 p-0 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                <span className="material-symbols-outlined text-[150px] leading-none">{item.icon}</span>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8">
                  <span className={`material-symbols-outlined text-3xl ${item.iconColor}`}>{item.icon}</span>
                  <span className={`text-xs font-tech ${item.iconColor} block tracking-widest font-bold`}>{item.subtitle}</span>
                </div>

                <h3 className="font-display text-3xl font-black mb-6 uppercase leading-none whitespace-pre-line min-h-[60px]">
                  {item.title}
                </h3>

                <p className="font-body text-sm text-text-muted-light dark:text-text-muted-dark tracking-wide leading-relaxed border-l border-gray-200 pl-4 mb-8 flex-grow">
                  {item.description}
                </p>

                <div className="mt-auto pt-4 border-t border-dashed border-gray-200 dark:border-gray-800">
                  <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${item.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2`}>
                    Saiba Mais <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
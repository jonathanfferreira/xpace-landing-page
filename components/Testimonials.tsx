import React from 'react';

const reviews = [
  {
    name: "Andrea Veiga da Silva",
    text: "A Xpace é a melhor escola de dança de Joinville! Um espaço incrível onde a paixão pela dança é sentida. O ambiente é seguro e acolhedor, ideal tanto para crianças quanto para adultos que desejam se aprimorar ou começar a dançar.",
    stars: 5
  },
  {
    name: "Jonathan Ferreira",
    text: "A melhor de Joinville e SC, com qualidade e disciplina. Respeito, Humildade, um lugar de refúgio, pra se divertir e esquecer os problemas da vida! ❤️🙏",
    stars: 5
  },
  {
    name: "Graciela Kirinus",
    text: "É um espaço artístico que abraça à todos. Minha filha foi muito bem acolhida. A escola vai muito além da dança, onde incentivam valores de amizade, união, de pertencimento ao grupo e responsabilidade. 💚",
    stars: 5
  },
  {
    name: "Delcio Camelo",
    text: "Lugar abençoado, acolhedor para todas as pessoas. Não precisa saber dançar, lá você aprende desde do básico até o competitivo. Pessoas de bom coração para te deixar a vontade e curtir bastante cada momento.",
    stars: 5
  },
  {
    name: "Paulo Moura",
    text: "As aulas de danças urbanas com o professor Ruan são excelentes, possui experiência e ótima didática, turma perfeita para aqueles que, assim como eu, estão começando do zero.",
    stars: 5
  },
  {
    name: "Vanessa Ferreira",
    text: "Escola incrível, ambiente maravilhoso, uma vista externa linda, ótimos professores, a sala de aula é enorme, eu super indico!",
    stars: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-background-light dark:bg-background-dark relative border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-tech text-primary tracking-widest uppercase mb-2">Google Reviews</span>
          <h2 className="font-display text-5xl md:text-6xl font-black text-text-main-light dark:text-text-main-dark mb-6">
            QUEM DANÇA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyber-pink">CONFIA</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-tertiary to-secondary"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="relative group h-full">
              {/* Card Background & Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
              
              <div className="relative h-full bg-surface-light dark:bg-surface-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col hover:-translate-y-1 transition-transform duration-300">
                {/* Quote Icon */}
                <div className="absolute top-6 right-8 text-6xl font-display font-black text-gray-200 dark:text-gray-800/50 select-none">"</div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 text-secondary">
                  {[...Array(review.stars)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg fill-current">star</span>
                  ))}
                </div>

                {/* Text */}
                <p className="font-body text-text-muted-light dark:text-text-muted-dark font-medium leading-relaxed mb-8 relative z-10 flex-grow text-sm md:text-base">
                  {review.text}
                </p>

                {/* User Info (Simplified) */}
                <div className="flex items-center justify-between mt-auto border-t border-dashed border-gray-300 dark:border-gray-700 pt-6">
                  <h4 className="font-display font-bold text-lg leading-none text-text-main-light dark:text-text-main-dark">{review.name}</h4>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
                  </div>
                </div>

                {/* Cyber Corner Accents */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-secondary opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="mt-16 text-center">
            <a href="https://www.google.com/search?q=XPACE+Escola+de+Dan%C3%A7a+Joinville+Reviews" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-tech font-bold tracking-widest text-gray-500 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
                VER TODAS AS 40+ AVALIAÇÕES NO GOOGLE
                <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
        </div>
      </div>
    </section>
  );
};
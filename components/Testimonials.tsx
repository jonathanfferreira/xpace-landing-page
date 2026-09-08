import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Andrea Veiga da Silva",
    role: "Aluna Adulto • Danças Urbanas",
    text: "A XPACE é a melhor escola de dança de Joinville! Um espaço incrível onde a paixão pela dança é sentida em cada detalhe. O ambiente é seguro, acolhedor e perfeito tanto para quem quer começar do zero quanto para quem busca se aprimorar.",
    stars: 5
  },
  {
    name: "Graciela Kirinus",
    role: "Mãe de Aluna • Kids/Teens",
    text: "É um espaço artístico que abraça a todos. Minha filha foi acolhida com muito amor. A escola vai muito além da técnica da dança: desenvolve disciplina, amizades sinceras, sensação de pertencimento e responsabilidade. Recomendo de olhos fechados!",
    stars: 5
  },
  {
    name: "Delcio Camelo",
    role: "Aluno Iniciante • Ritmos",
    text: "Lugar acolhedor demais! Você não precisa saber dançar para entrar: os professores ensinam com muita paciência desde o básico até o avançado. A energia da escola faz você esquecer todo o estresse do dia a dia.",
    stars: 5
  },
  {
    name: "Jonathan Ferreira",
    role: "Comunidade XPACE",
    text: "A melhor de Joinville e de Santa Catarina! Qualidade técnica de padrão mundial, respeito e humildade. É mais que uma escola, é um refúgio para se expressar, se divertir e superar limites.",
    stars: 5
  },
  {
    name: "Paulo Moura",
    role: "Aluno • Danças Urbanas",
    text: "As aulas de danças urbanas são excepcionais! Didática clara e acolhedora, ritmo contagiante e uma estrutura que não tem comparação na cidade. Turmas perfeitas para quem está começando do zero absoluto.",
    stars: 5
  },
  {
    name: "Vanessa Ferreira",
    role: "Aluna • Heels & Jazz Funk",
    text: "Escola impecável! Salas climatizadas enormes com piso flutuante que protege as articulações, vista externa linda e professores que realmente se importam com a sua evolução pessoal.",
    stars: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-28 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="pill-badge mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Avaliações Verificadas no Google</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase mb-6 text-text-main-light dark:text-text-main-dark">
            Quem dança na XPACE, <br />
            <span className="text-gradient inline-block">recomenda sem hesitar.</span>
          </h2>

          <p className="max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400 font-body leading-relaxed">
            Mais de 40 famílias e bailarinos de Joinville avaliaram nossa escola com nota máxima. Veja o que diz quem vive nossa rotina:
          </p>
        </div>

        {/* Silicon Valley Review Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bento-card p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Google Verified & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.stars)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-lg fill-current">star</span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-500 font-bold">✓</span> Google
                  </span>
                </div>

                {/* Review Body */}
                <p className="font-body text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Category Footer */}
              <div className="pt-4 border-t border-black/5 dark:border-white/10 flex flex-col">
                <h4 className="font-display font-bold text-base text-text-main-light dark:text-text-main-dark uppercase">
                  {review.name}
                </h4>
                <span className="text-xs font-mono text-gray-500">
                  {review.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Direct Badge CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/search?q=XPACE+Escola+de+Dan%C3%A7a+Joinville+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-button-secondary text-sm group"
          >
            <span className="material-symbols-outlined text-primary text-lg">star</span>
            <span>Ver todas as 40+ avaliações reais no Google</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">open_in_new</span>
          </a>
        </div>

      </div>
    </section>
  );
};
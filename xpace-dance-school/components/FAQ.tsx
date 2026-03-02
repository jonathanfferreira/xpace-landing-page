import React, { useState } from 'react';
import { motion } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Preciso ter experiência para começar?",
    answer: "Absolutamente não! A XPACE foi criada para todos. Temos turmas específicas para nível Iniciante (Intro) onde ensinamos os fundamentos desde o zero. Nossos instrutores são treinados para fazer você se sentir confortável desde o primeiro passo."
  },
  {
    question: "Qual roupa devo usar nas aulas?",
    answer: "O conforto é fundamental. Recomendamos roupas largas que permitam movimento (calças de moletom, camisetas oversized, leggings) e, obrigatoriamente, tênis limpos e confortáveis. Para aulas de Heels, traga seus saltos e joelheiras."
  },
  {
    question: "Existe idade mínima ou máxima?",
    answer: "A dança não tem idade! Temos turmas Kids (a partir de 4 anos), Teens e Adulto. Nossas turmas adultas não têm limite de idade – temos alunos de 18 a 60+ anos arrasando na pista."
  },
  {
    question: "Posso fazer uma aula experimental?",
    answer: "Sim! A primeira aula é por nossa conta. Queremos que você sinta a energia da XPACE antes de se comprometer. Basta clicar no botão de 'Agendar Aula' na seção abaixo para escolher seu horário diretamente em nossa agenda digital."
  },
  {
    question: "Como funcionam os planos?",
    answer: "Oferecemos flexibilidade total. O Plano Mensal é perfeito para liberdade, enquanto os planos Semestral e Anual oferecem descontos significativos para quem quer evoluir a longo prazo. Todos os planos dão acesso às vantagens de aluno XPACE."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-surface-light dark:bg-surface-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
            <span className="font-tech text-primary tracking-widest uppercase mb-2 block">Tira-Dúvidas</span>
            <h2 className="font-display text-5xl md:text-6xl font-black text-text-main-light dark:text-text-main-dark mb-4">
            PERGUNTAS FREQUENTES
            </h2>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border transition-colors duration-500 ease-out ${
                openIndex === index 
                  ? 'border-primary bg-background-light dark:bg-background-dark shadow-neon' 
                  : 'border-gray-300 dark:border-gray-800 bg-transparent hover:border-gray-400 dark:hover:border-gray-700'
              }`}
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-display font-bold text-xl tracking-wide transition-colors ${openIndex === index ? 'text-primary' : 'text-text-main-light dark:text-text-main-dark'}`}>
                  {item.question}
                </span>
                <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : 'text-gray-400'}`}>
                  keyboard_arrow_down
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0 text-text-muted-light dark:text-text-muted-dark font-body leading-relaxed border-t border-dashed border-gray-200 dark:border-gray-800 mt-2 pt-4">
                  {item.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
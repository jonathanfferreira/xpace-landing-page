import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-28 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="pill-badge mb-4">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span>Ecossistema XPACE 2026</span>
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase mb-6 text-text-main-light dark:text-text-main-dark">
            Tudo o que você precisa para <br />
            <span className="text-gradient inline-block">evoluir na dança.</span>
          </h2>
          
          <p className="max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400 font-body leading-relaxed">
            Uma infraestrutura de padrão internacional concebida para todas as idades e objetivos — da primeira aula ao circuito competitivo profissional.
          </p>
        </div>

        {/* Silicon Valley Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Bento Card 1: XPACE ESCOLA (Col Span 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bento-card p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group min-h-[380px]"
          >
            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <img 
                src="/images/gallery/IMG_8693.JPG" 
                alt="Turma XPACE em aula"
                className="w-full h-full object-cover object-center opacity-25 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light/80 dark:via-background-dark/80 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
                  01 // Formação & Aulas Regulares
                </span>
                <span className="text-xs font-mono text-gray-500">44+ Turmas Ativas</span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-text-main-light dark:text-text-main-dark mb-4">
                XPACE Escola
              </h3>

              <p className="max-w-xl text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-body">
                Nossa metodologia é o coração da XPACE. Turmas para <strong>Kids (4-11 anos)</strong>, <strong>Teens (12-16 anos)</strong> e <strong>Adultos</strong>, com didática acolhedora focada em ritmo, autoconfiança, queima calórica e expressão corporal.
              </p>

              {/* Modality Chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Hip Hop', 'Jazz Funk', 'K-Pop', 'Heels', 'Dança Contemporânea', 'Ritmos & Salão', 'Acrobacia'].map((style, i) => (
                  <span key={i} className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                    {style}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
              <a href="#schedule" className="font-display font-bold text-sm text-primary group-hover:text-secondary flex items-center gap-2 transition-colors">
                <span>Ver Grade Completa de Horários</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <span className="text-xs font-mono text-emerald-500 font-bold">Aceita Experimental</span>
            </div>
          </motion.div>

          {/* Bento Card 2: DANCE COMPANY (Col Span 1) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bento-card p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="text-xs font-mono font-bold tracking-widest text-secondary uppercase bg-secondary/10 px-3 py-1 rounded-full">
                  02 // Competição
                </span>
                <span className="material-symbols-outlined text-secondary">emoji_events</span>
              </div>

              <h3 className="font-display font-black text-3xl uppercase tracking-tight text-text-main-light dark:text-text-main-dark mb-4">
                Dance Company
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-body">
                O núcleo de alta performance da XPACE. Grupos competitivos premiados no <strong>Festival de Dança de Joinville</strong>, <strong>FIH2</strong> e selecionados para o <strong>Hip Hop Unite</strong>.
              </p>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-black/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 mb-6">
                <span className="text-xs font-mono text-secondary font-bold uppercase tracking-wider">Alto Rendimento</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Audições anuais e preparação física e coreográfica de padrão mundial.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-white/10">
              <Link to="/dance/company" className="font-display font-bold text-sm text-secondary flex items-center gap-2 group-hover:underline">
                <span>Conheça a Companhia</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </motion.div>

          {/* Bento Card 3: INFRAESTRUTURA & LOCAÇÃO (Col Span 1) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bento-card p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
                  03 // Espaço Físico
                </span>
                <span className="material-symbols-outlined text-accent">apartment</span>
              </div>

              <h3 className="font-display font-black text-3xl uppercase tracking-tight text-text-main-light dark:text-text-main-dark mb-4">
                4 Salas VIP
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-body">
                Ambientes projetados com isolamento acústico, ar-condicionado e piso flutuante especial que amortece impactos e previne lesões.
              </p>

              <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="p-3 rounded-lg bg-black/5 dark:bg-white/[0.04] text-center">
                  <span className="block font-display font-bold text-xs uppercase text-text-main-light dark:text-text-main-dark">XPERIENCE</span>
                  <span className="text-[10px] text-gray-500 font-mono">Sala Principal</span>
                </div>
                <div className="p-3 rounded-lg bg-black/5 dark:bg-white/[0.04] text-center">
                  <span className="block font-display font-bold text-xs uppercase text-text-main-light dark:text-text-main-dark">XLAB</span>
                  <span className="text-[10px] text-gray-500 font-mono">Pesquisa Corporal</span>
                </div>
                <div className="p-3 rounded-lg bg-black/5 dark:bg-white/[0.04] text-center">
                  <span className="block font-display font-bold text-xs uppercase text-text-main-light dark:text-text-main-dark">XCORE</span>
                  <span className="text-[10px] text-gray-500 font-mono">Condicionamento</span>
                </div>
                <div className="p-3 rounded-lg bg-black/5 dark:bg-white/[0.04] text-center">
                  <span className="block font-display font-bold text-xs uppercase text-text-main-light dark:text-text-main-dark">XTAGE</span>
                  <span className="text-[10px] text-gray-500 font-mono">Espaço & Ensaio</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-white/10">
              <a href="#rental" className="font-display font-bold text-sm text-accent flex items-center gap-2 group-hover:underline">
                <span>Locação para Ensaios</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </motion.div>

          {/* Bento Card 4: XPERIENCE URBAN & PROJETOS CRIATIVOS (Col Span 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bento-card p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group min-h-[340px]"
          >
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyber-pink/15 via-primary/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="text-xs font-mono font-bold tracking-widest text-cyber-pink uppercase bg-cyber-pink/10 px-3 py-1 rounded-full">
                  04 // Cultura, Festivais & Imersões
                </span>
                <span className="text-xs font-mono text-gray-500">Joinville / SC</span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-text-main-light dark:text-text-main-dark mb-4">
                Xperience Urban & Projetos Especiais
              </h3>

              <p className="max-w-xl text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-body">
                Muito mais que aulas: a XPACE é um movimento cultural ativo. Realizamos imersões anuais, batalhas de danças urbanas (*battles*), videoclipes conceituais e workshops com coreógrafos de destaque internacional.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="border-l-2 border-primary pl-3">
                  <span className="block font-display font-bold text-sm text-text-main-light dark:text-text-main-dark">Workshops VIP</span>
                  <span className="text-xs text-gray-500">Coreógrafos convidados do Brasil e exterior</span>
                </div>
                <div className="border-l-2 border-secondary pl-3">
                  <span className="block font-display font-bold text-sm text-text-main-light dark:text-text-main-dark">Batalhas de Dança</span>
                  <span className="text-xs text-gray-500">Freestyle, Hip Hop, K-Pop e All Styles</span>
                </div>
                <div className="border-l-2 border-accent pl-3">
                  <span className="block font-display font-bold text-sm text-text-main-light dark:text-text-main-dark">Audiovisual</span>
                  <span className="text-xs text-gray-500">Produção de videoclipes e portfólios</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
              <a href="#about" className="font-display font-bold text-sm text-cyber-pink group-hover:underline flex items-center gap-2">
                <span>Conheça Nossa História e Valores</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
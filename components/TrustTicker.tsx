import React from 'react';
import { motion } from 'framer-motion';

export const TrustTicker: React.FC = () => {
  const metrics = [
    {
      value: '+1.200',
      label: 'Alunos Transformados',
      subtext: 'Pela arte, ritmo e disciplina',
      icon: 'groups',
      color: 'text-primary'
    },
    {
      value: '4 Salas',
      label: 'Acústicas & Climatizadas',
      subtext: 'Piso flutuante anti-impacto',
      icon: 'apartment',
      color: 'text-secondary'
    },
    {
      value: '44+',
      label: 'Turmas Semanais',
      subtext: 'Do Kids 4 anos ao Adulto',
      icon: 'calendar_month',
      color: 'text-accent'
    },
    {
      value: '5.0 ★',
      label: 'Google Reviews',
      subtext: 'A mais bem avaliada de Joinville',
      icon: 'star',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section className="relative z-20 -mt-10 mb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Silicon Valley Bento Trust Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bento-card p-6 sm:p-8 relative overflow-hidden"
      >
        {/* Subtle Brand Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-72 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-32 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Header Ribbon */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-black/[0.06] dark:border-white/[0.08] mb-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono tracking-wider uppercase font-bold text-gray-700 dark:text-gray-300">
              Joinville / SC • Matrículas Abertas para Temporada 2026
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-primary">verified</span>
              Convênios Oficiais:
            </span>
            <div className="flex items-center gap-2 font-bold text-gray-800 dark:text-gray-200">
              <span className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/10">Wellhub</span>
              <span className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/10">TotalPass</span>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((item, index) => (
            <div key={index} className="flex flex-col group">
              <div className="flex items-center gap-2 mb-1">
                <span className={`material-symbols-outlined text-xl ${item.color}`}>
                  {item.icon}
                </span>
                <span className="font-display font-black text-3xl sm:text-4xl text-text-main-light dark:text-text-main-dark tracking-tight">
                  {item.value}
                </span>
              </div>
              <span className="font-display font-bold text-sm sm:text-base text-gray-900 dark:text-gray-100 uppercase tracking-tight">
                {item.label}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {item.subtext}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

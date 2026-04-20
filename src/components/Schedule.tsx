import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

type ScheduleItem = {
  time: string;
  activity: string;
  level: string;
  age?: string;
  tag?: string;
};

type WeeklySchedule = {
  [key: string]: ScheduleItem[];
};

const scheduleData: WeeklySchedule = {
  "SEGUNDA": [
    { time: "19:00", activity: "Street Dance", level: "INICIANTE", age: "ACIMA 5 ANOS" },
    { time: "19:00", activity: "Contemporâneo", level: "INICIANTE", age: "ACIMA 12 ANOS" },
    { time: "19:00", activity: "Street Dance", level: "AVANÇADO", age: "ACIMA 12 ANOS" },
    { time: "20:00", activity: "Acrobacia", level: "INICIANTE", age: "ACIMA 12 ANOS" },
    { time: "20:00", activity: "Street Dance", level: "AVANÇADO", age: "ACIMA 16 ANOS" },
    { time: "20:00", activity: "Jazz", level: "INICIANTE", age: "ACIMA 15 ANOS" },
    { time: "21:00", activity: "Jazz", level: "INTERMEDIÁRIO", age: "ACIMA 18 ANOS" },
  ],
  "TERÇA": [
    { time: "19:00", activity: "K-Pop", level: "INTERMEDIÁRIO", age: "ACIMA 12 ANOS" },
    { time: "19:00", activity: "Ritmos", level: "INICIANTE", age: "ACIMA 18 ANOS" },
    { time: "20:00", activity: "Jazz Funk", level: "INICIANTE", age: "ACIMA 15 ANOS", tag: "SÓ TERÇA" },
    { time: "20:00", activity: "Street Dance", level: "INICIANTE", age: "ACIMA 15 ANOS" },
    { time: "20:00", activity: "Dança de Salão", level: "INICIANTE", age: "ACIMA 18 ANOS" },
  ],
  "QUARTA": [
    { time: "19:00", activity: "Street Dance", level: "INICIANTE", age: "ACIMA 5 ANOS" },
    { time: "19:00", activity: "Contemporâneo", level: "INICIANTE", age: "ACIMA 12 ANOS" },
    { time: "19:00", activity: "Street Dance", level: "AVANÇADO", age: "ACIMA 12 ANOS" },
    { time: "20:00", activity: "Acrobacia", level: "INICIANTE", age: "ACIMA 12 ANOS" },
    { time: "20:00", activity: "Street Dance", level: "AVANÇADO", age: "ACIMA 16 ANOS" },
    { time: "20:00", activity: "Jazz", level: "INICIANTE", age: "ACIMA 15 ANOS" },
    { time: "21:00", activity: "Jazz", level: "INTERMEDIÁRIO", age: "ACIMA 18 ANOS" },
  ],
  "QUINTA": [
    { time: "19:00", activity: "K-Pop", level: "INTERMEDIÁRIO", age: "ACIMA 12 ANOS" },
    { time: "19:00", activity: "Ritmos", level: "INICIANTE", age: "ACIMA 18 ANOS" },
    { time: "20:00", activity: "Heels", level: "INICIANTE", age: "ACIMA 15 ANOS", tag: "SÓ QUINTA" },
    { time: "20:00", activity: "Street Dance", level: "INICIANTE", age: "ACIMA 15 ANOS" },
    { time: "20:00", activity: "Dança de Salão", level: "INICIANTE", age: "ACIMA 18 ANOS" },
  ],
  "SEXTA": [
    { time: "19:00", activity: "Street Funk", level: "INTERMEDIÁRIO", age: "ACIMA 15 ANOS" },
    { time: "19:00", activity: "Street Dance", level: "INICIANTE", age: "ACIMA 18 ANOS" },
  ],
  "SÁBADO": [
    { time: "09:00", activity: "Jazz Funk", level: "INTERMEDIÁRIO", age: "ACIMA 15 ANOS" },
    { time: "09:15", activity: "Ballet Baby Class", level: "INICIANTE", age: "ACIMA 3 ANOS" },
    { time: "10:00", activity: "Street Dance", level: "INTERMEDIÁRIO", age: "ACIMA 16 ANOS" },
    { time: "10:00", activity: "Ballet Fit", level: "INICIANTE", age: "ACIMA 16 ANOS" },
    { time: "11:00", activity: "Heels", level: "INTERMEDIÁRIO", age: "ACIMA 15 ANOS" },
    { time: "14:30", activity: "Dancehall", level: "INTERMEDIÁRIO", age: "ACIMA 15 ANOS", tag: "VYBZ PROJECT" },
  ]
};

const getLevelColor = (level: string) => {
  switch (level) {
    case 'INICIANTE': return 'text-primary border-primary';
    case 'INTERMEDIÁRIO': return 'text-secondary border-secondary';
    case 'AVANÇADO': return 'text-accent border-accent';
    default: return 'text-white border-white';
  }
};

const getLevelBg = (level: string) => {
  switch (level) {
    case 'INICIANTE': return 'bg-primary/10';
    case 'INTERMEDIÁRIO': return 'bg-secondary/10';
    case 'AVANÇADO': return 'bg-accent/10';
    default: return 'bg-gray-800';
  }
};

const getCategory = (age?: string): string => {
  if (!age) return 'GERAL';
  const number = parseInt(age.replace(/\D/g, ''), 10);
  if (isNaN(number)) return 'GERAL';
  if (number < 12) return 'KIDS';
  if (number >= 18) return 'ADULTO';
  return 'TEENS'; // 12-17
};

const openWhatsApp = (activity: string, time: string, day: string) => {
  const message = `Olá! Vi a aula de *${activity}* de *${day} às ${time}* no site e gostaria de agendar uma experimental.`;
  const url = `https://wa.me/554791700812?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

export const Schedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState("SEGUNDA");
  const [activeFilter, setActiveFilter] = useState("TODOS");
  const days = ["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO"];
  const filters = ["TODOS", "KIDS", "TEENS", "ADULTO"];

  const filteredData = scheduleData[activeTab].filter(item => {
    if (activeFilter === "TODOS") return true;
    return getCategory(item.age) === activeFilter;
  });

  return (
    <section id="schedule" className="py-24 md:py-32 bg-background-light dark:bg-background-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-black dark:border-white pb-6">
          <div>
            <h2 className="font-display text-5xl md:text-8xl font-black text-text-main-light dark:text-text-main-dark mb-2 tracking-tighter">
              GRADE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SEMANAL</span>
            </h2>
          </div>

          {/* Legend for Levels */}
          <div className="mt-6 md:mt-0 flex gap-4 text-xs font-tech tracking-widest flex-wrap">
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>INICIANTE</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-secondary rounded-full"></span>INTERMEDIÁRIO</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-accent rounded-full"></span>AVANÇADO</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-center md:justify-start gap-4 mb-8 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg font-tech font-bold text-sm tracking-widest uppercase transition-all duration-300 border ${activeFilter === filter
                ? 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(255,82,0,0.5)]'
                : 'bg-transparent text-gray-500 border-gray-700 hover:border-primary hover:text-primary'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Day Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 md:gap-4 no-scrollbar">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveTab(day)}
              className={`px-6 py-3 rounded-full font-bold text-sm tracking-widest whitespace-nowrap transition-all duration-300 ${activeTab === day
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-[0_0_15px_rgba(99,36,178,0.5)]'
                : 'border border-gray-300 dark:border-gray-800 text-gray-500 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white'
                }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {[...filteredData]
                .sort((a, b) => a.time.localeCompare(b.time))
                .map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark hover:border-primary/50 transition-colors duration-300 group shadow-sm hover:shadow-md relative overflow-hidden"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-tech text-2xl font-bold text-primary">
                        {item.time}
                      </span>
                      <div className="flex gap-2 items-center flex-wrap">
                        {item.tag && (
                          <span className="px-2 py-1 rounded-full text-[10px] font-tech font-bold tracking-widest uppercase border border-gray-400 text-gray-500">
                            {item.tag}
                          </span>
                        )}
                        {item.age && (
                          <span className="px-2 py-1 rounded-sm text-[10px] font-tech font-bold tracking-widest uppercase bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                            {item.age}
                          </span>
                        )}
                        <span className={`px-3 py-1 rounded-full text-[10px] font-tech font-bold tracking-widest uppercase border ${getLevelColor(item.level)} ${getLevelBg(item.level)}`}>
                          {item.level}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <h3 className="font-display text-xl md:text-2xl font-black text-text-main-light dark:text-text-main-dark uppercase leading-tight group-hover:text-primary transition-colors flex-1 pr-4">
                        {item.activity}
                      </h3>

                      {/* WhatsApp Action Button */}
                      <button
                        onClick={() => openWhatsApp(item.activity, item.time, activeTab)}
                        className="p-2 rounded-full bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
                        title="Agendar Experimental"
                      >
                        <MessageCircle size={20} />
                      </button>
                    </div>
                  </div>
                ))}

              {filteredData.length === 0 && (
                <div className="col-span-full py-20 text-center text-gray-500 font-tech tracking-widest flex flex-col items-center gap-4">
                  <span className="text-4xl opacity-20">∅</span>
                  NENHUMA AULA ENCONTRADA NESTA CATEGORIA
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

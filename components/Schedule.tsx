import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

import { getWeeklySchedule } from '../src/data/classes';
import { DayOfWeek, WeeklySchedule } from '../src/types/classes';

const scheduleData: WeeklySchedule = getWeeklySchedule();

const getRoomColor = (room: string) => {
  switch (room) {
    case 'XPERIENCE': return 'text-primary border-primary';
    case 'XLAB': return 'text-secondary border-secondary';
    case 'XCORE': return 'text-tertiary border-tertiary';
    case 'XTAGE': return 'text-primary border-primary';
    default: return 'text-white border-white';
  }
};

const getRoomBg = (room: string) => {
  switch (room) {
    case 'XPERIENCE': return 'bg-primary/10';
    case 'XLAB': return 'bg-secondary/10';
    case 'XCORE': return 'bg-tertiary/10';
    case 'XTAGE': return 'bg-primary/10';
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

const openWhatsApp = (activity: string, time: string, day: string, teacher?: string) => {
  const teacherText = teacher ? ` com prof. ${teacher}` : '';
  const message = `Olá! Vi a aula de *${activity}*${teacherText} de *${day} às ${time}* no site e gostaria de agendar uma experimental.`;
  const url = `https://wa.me/554791700812?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

export const Schedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DayOfWeek>("SEGUNDA");
  const [activeFilter, setActiveFilter] = useState("TODOS");
  const days: DayOfWeek[] = ["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO"];
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

          {/* Legend for Rooms */}
          <div className="mt-6 md:mt-0 flex gap-4 text-xs font-tech tracking-widest flex-wrap">
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>XPERIENCE</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-secondary rounded-full"></span>XLAB</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-tertiary rounded-full"></span>XCORE</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>XTAGE</div>
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
                      <div className="flex gap-2">
                        {item.age && (
                          <span className="px-2 py-1 rounded-sm text-[10px] font-tech font-bold tracking-widest uppercase bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                            {item.age}
                          </span>
                        )}
                        <span className={`px-3 py-1 rounded-full text-[10px] font-tech font-bold tracking-widest uppercase border ${getRoomColor(item.room)} ${getRoomBg(item.room)}`}>
                          {item.room}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex-1 pr-4">
                        <h3 className="font-display text-xl md:text-2xl font-black text-text-main-light dark:text-text-main-dark uppercase leading-tight group-hover:text-primary transition-colors">
                          {item.activity}
                        </h3>
                        {item.teacher && (
                          <p className="text-xs font-tech text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1 font-semibold">
                            Prof. <span className="text-text-main-light dark:text-gray-200">{item.teacher}</span>
                          </p>
                        )}
                      </div>

                      {/* WhatsApp Action Button */}
                      <button
                        onClick={() => openWhatsApp(item.activity, item.time, activeTab, item.teacher)}
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

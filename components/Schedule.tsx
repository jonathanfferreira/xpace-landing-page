import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ScheduleItem = {
  time: string;
  activity: string;
  room: string;
};

type WeeklySchedule = {
  [key: string]: ScheduleItem[];
};

const scheduleData: WeeklySchedule = {
  "SEGUNDA": [
    { time: "08:00", activity: "Street Dance Kids", room: "XPERIENCE" },
    { time: "09:00", activity: "Teatro", room: "XPERIENCE" },
    { time: "09:00", activity: "Ritmos", room: "XTAGE" },
    { time: "14:00", activity: "Danças Populares", room: "XPERIENCE" },
    { time: "14:30", activity: "Street Dance Kids", room: "XLAB" },
    { time: "15:30", activity: "Teatro", room: "XLAB" },
    { time: "19:00", activity: "Street Dance Junior", room: "XPERIENCE" },
    { time: "19:00", activity: "Contemporâneo", room: "XLAB" },
    { time: "19:00", activity: "Street Dance Kids", room: "XCORE" },
    { time: "19:00", activity: "Ritmos", room: "XTAGE" },
    { time: "19:00", activity: "Jiu Jitsu", room: "XTAGE" },
    { time: "20:00", activity: "Street Dance Senior", room: "XPERIENCE" },
    { time: "20:00", activity: "Jazz Iniciante", room: "XCORE" },
    { time: "20:00", activity: "Acrobacia", room: "XTAGE" },
    { time: "20:00", activity: "Jiu Jitsu", room: "XTAGE" },
    { time: "20:00", activity: "Muay Thai", room: "XLAB" },
    { time: "21:00", activity: "Jazz", room: "XPERIENCE" },
  ],
  "TERÇA": [
    { time: "09:00", activity: "Street Dance Teens Iniciante", room: "XPERIENCE" },
    { time: "14:30", activity: "Street Dance Iniciante", room: "XLAB" },
    { time: "15:30", activity: "Baby Class", room: "XLAB" },
    { time: "19:00", activity: "Jazz Funk (Prof. Gus)", room: "XLAB" },
    { time: "19:00", activity: "Ritmos", room: "XCORE" },
    { time: "19:00", activity: "Muay Thai", room: "XTAGE" },
    { time: "20:00", activity: "Dança de Salão", room: "XLAB" },
    { time: "20:00", activity: "Ballet Iniciante", room: "XCORE" },
    { time: "20:00", activity: "K-Pop", room: "XTAGE" },
    { time: "20:00", activity: "Muay Thai", room: "XTAGE" },
    { time: "21:00", activity: "Street Dance Iniciante", room: "XLAB" },
  ],
  "QUARTA": [
    { time: "08:30", activity: "Street Dance Kids", room: "XLAB" },
    { time: "09:00", activity: "Ritmos", room: "XTAGE" },
    { time: "09:30", activity: "Teatro", room: "XCORE" },
    { time: "14:00", activity: "Danças Populares", room: "XPERIENCE" },
    { time: "14:30", activity: "Street Dance Kids", room: "XLAB" },
    { time: "15:30", activity: "Teatro", room: "XLAB" },
    { time: "19:00", activity: "Street Dance Junior", room: "XPERIENCE" },
    { time: "19:00", activity: "Contemporâneo", room: "XLAB" },
    { time: "19:00", activity: "Street Dance Kids", room: "XCORE" },
    { time: "19:00", activity: "Ritmos", room: "XTAGE" },
    { time: "19:00", activity: "Jiu Jitsu", room: "XTAGE" },
    { time: "20:00", activity: "Street Dance Senior", room: "XPERIENCE" },
    { time: "20:00", activity: "Jazz Iniciante", room: "XCORE" },
    { time: "20:00", activity: "Acrobacia", room: "XTAGE" },
    { time: "20:00", activity: "Jiu Jitsu", room: "XTAGE" },
    { time: "20:00", activity: "Muay Thai", room: "XLAB" },
    { time: "21:00", activity: "Jazz", room: "XPERIENCE" },
  ],
  "QUINTA": [
    { time: "09:00", activity: "Street Dance Teens Iniciante", room: "XPERIENCE" },
    { time: "14:30", activity: "Street Dance Iniciante", room: "XLAB" },
    { time: "15:30", activity: "Baby Class", room: "XLAB" },
    { time: "17:00", activity: "Heels (Prof. Duda)", room: "XPERIENCE" },
    { time: "18:00", activity: "Heels (Prof. Duda)", room: "XPERIENCE" },
    { time: "19:00", activity: "Heels (Geral)", room: "XLAB" },
    { time: "19:00", activity: "Ritmos", room: "XCORE" },
    { time: "19:00", activity: "Muay Thai", room: "XTAGE" },
    { time: "20:00", activity: "Dança de Salão", room: "XLAB" },
    { time: "20:00", activity: "Ballet Iniciante", room: "XCORE" },
    { time: "20:00", activity: "K-Pop", room: "XTAGE" },
    { time: "20:00", activity: "Muay Thai", room: "XTAGE" },
    { time: "21:00", activity: "Street Dance Iniciante", room: "XLAB" },
  ],
  "SEXTA": [
    { time: "19:00", activity: "Danças Urbanas Iniciante", room: "XPERIENCE" },
    { time: "19:00", activity: "Jiu Jitsu Kids", room: "XLAB" },
    { time: "19:00", activity: "Jiu Jitsu", room: "XTAGE" },
    { time: "20:00", activity: "Street Funk", room: "XPERIENCE" },
    { time: "20:00", activity: "Jiu Jitsu", room: "XTAGE" },
  ],
  "SÁBADO": [
    { time: "09:00", activity: "Jazz Funk", room: "XPERIENCE" },
    { time: "10:00", activity: "Danças Urbanas (Geral)", room: "XPERIENCE" },
    { time: "11:00", activity: "Heels", room: "XPERIENCE" },
    { time: "12:00", activity: "Heels", room: "XPERIENCE" },
    { time: "14:00", activity: "Cia Heels", room: "XPERIENCE" },
    { time: "14:30", activity: "Salão / Dancehall", room: "XLAB" },
    { time: "14:30", activity: "Cia Danças Populares", room: "XTAGE" },
    { time: "15:00", activity: "Cia Heels", room: "XPERIENCE" },
    { time: "15:30", activity: "Salão / Dancehall", room: "XLAB" },
    { time: "15:30", activity: "Cia Danças Populares", room: "XTAGE" },
  ]
};

const getRoomColor = (room: string) => {
  switch (room) {
    case 'XPERIENCE': return 'text-primary border-primary';
    case 'XLAB': return 'text-secondary border-secondary';
    case 'XCORE': return 'text-tertiary border-tertiary';
    case 'XTAGE': return 'text-cyber-pink border-cyber-pink';
    default: return 'text-white border-white';
  }
};

const getRoomBg = (room: string) => {
  switch (room) {
    case 'XPERIENCE': return 'bg-primary/10';
    case 'XLAB': return 'bg-secondary/10';
    case 'XCORE': return 'bg-tertiary/10';
    case 'XTAGE': return 'bg-cyber-pink/10';
    default: return 'bg-gray-800';
  }
};

export const Schedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState("SEGUNDA");
  const days = ["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO"];

  return (
    <section id="schedule" className="py-24 md:py-32 bg-background-light dark:bg-background-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 border-b border-black dark:border-white pb-6">
          <div>
            <h2 className="font-display text-5xl md:text-8xl font-black text-text-main-light dark:text-text-main-dark mb-2 tracking-tighter">
              GRADE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyber-pink">SEMANAL</span>
            </h2>
          </div>

          {/* Legend for Rooms (Optional, but helpful) */}
          <div className="mt-6 md:mt-0 flex gap-4 text-xs font-tech tracking-widest flex-wrap">
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>XPERIENCE</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-secondary rounded-full"></span>XLAB</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-tertiary rounded-full"></span>XCORE</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 bg-cyber-pink rounded-full"></span>XTAGE</div>
          </div>
        </div>

        {/* Day Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 md:gap-4 no-scrollbar">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveTab(day)}
              className={`px-6 py-3 rounded-full font-bold text-sm tracking-widest whitespace-nowrap transition-all duration-300 ${activeTab === day
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-[0_0_15px_rgba(124,58,237,0.5)]'
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
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {[...scheduleData[activeTab]] // Create a shallow copy to sort
                .sort((a, b) => a.time.localeCompare(b.time))
                .map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark hover:border-primary/50 transition-colors duration-300 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-tech text-2xl font-bold text-cyber-pink">
                        {item.time}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-tech font-bold tracking-widest uppercase border ${getRoomColor(item.room)} ${getRoomBg(item.room)}`}>
                        {item.room}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-black text-text-main-light dark:text-text-main-dark uppercase leading-tight group-hover:text-primary transition-colors">
                      {item.activity}
                    </h3>
                  </div>
                ))}

              {scheduleData[activeTab].length === 0 && (
                <div className="col-span-full py-20 text-center text-gray-500 font-tech tracking-widest">
                  NENHUMA AULA PROGRAMADA
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
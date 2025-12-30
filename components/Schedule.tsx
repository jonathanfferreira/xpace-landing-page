import React, { useState } from 'react';

type DaySchedule = {
  seg?: string;
  ter?: string;
  qua?: string;
  qui?: string;
  sex?: string;
  sab?: string;
};

type ScheduleItem = DaySchedule & {
  time: string;
};

type RoomSchedule = {
  [key: string]: ScheduleItem[];
};

const scheduleData: RoomSchedule = {
  "Sala 1": [
    { time: "08:00", seg: "Street Dance Kids", sab: "" },
    { time: "09:00", seg: "Teatro", ter: "Street Dance Teens Iniciante", qui: "Street Dance Teens Iniciante", sab: "Jazz Funk" },
    { time: "10:00", sab: "Danças Urbanas (Geral)" },
    { time: "11:00", sab: "Heels" },
    { time: "12:00", sab: "Heels" },
    { time: "14:00", seg: "Danças Populares", qua: "Danças Populares", sab: "Cia Heels (Grupo)" },
    { time: "15:00", sab: "Cia Heels (Grupo)" },
    { time: "17:00", qui: "Heels (Prof. Duda)" },
    { time: "18:00", qui: "Heels (Prof. Duda)" },
    { time: "19:00", seg: "Street Dance Junior", qua: "Street Dance Junior", sex: "Danças Urbanas Iniciante" },
    { time: "20:00", seg: "Street Dance Senior", qua: "Street Dance Senior", sex: "Street Funk" },
    { time: "21:00", seg: "Jazz", qua: "Jazz" },
  ],
  "Sala 2": [
    { time: "08:30", qua: "Street Dance Kids" },
    { time: "14:30", seg: "Street Dance Kids", ter: "Street Dance Iniciante", qua: "Street Dance Kids", qui: "Street Dance Iniciante", sab: "Dancehall (Prof. Lucas)" },
    { time: "15:30", seg: "Teatro", ter: "Baby Class", qua: "Teatro", qui: "Baby Class", sab: "Dancehall (Prof. Lucas)" },
    { time: "19:00", seg: "Contemporâneo", ter: "Jazz Funk (Prof. Gus)", qua: "Contemporâneo", qui: "Heels", sex: "Jiu Jitsu Kids" },
    { time: "20:00", ter: "Dança de Salão", qui: "Dança de Salão" },
    { time: "21:00", ter: "Street Dance Iniciante", qui: "Street Dance Iniciante" },
  ],
  "Sala 3": [
    { time: "17:00", qui: "Heels (Prof. Duda)" },
    { time: "18:00", qui: "Heels (Prof. Duda)" },
    { time: "19:00", seg: "Street Dance (DU) Kids", qua: "Street Dance (DU) Kids", qui: "Heels" },
    { time: "20:00", seg: "Jazz Iniciante", qua: "Jazz Iniciante", qui: "Dança de Salão (Prof. Lucas)" },
    { time: "21:00", seg: "K-Pop", qua: "K-Pop", qui: "Dança de Salão (Prof. Lucas)" },
  ],
  "Sala 4 (Tenda)": [
    { time: "19:00", seg: "Jiu Jitsu", ter: "Muay Thai", qua: "Jiu Jitsu", qui: "Muay Thai", sex: "Jiu Jitsu" },
    { time: "20:00", seg: "Jiu Jitsu", ter: "Muay Thai", qua: "Jiu Jitsu", qui: "Muay Thai", sex: "Jiu Jitsu" },
  ],
};

export const Schedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Sala 1");
  const rooms = ["Sala 1", "Sala 2", "Sala 3", "Sala 4 (Tenda)"];

  return (
    <section id="schedule" className="py-32 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-black dark:border-white pb-6">
          <div>
            <h2 className="font-display text-6xl md:text-8xl font-black text-text-main-light dark:text-text-main-dark mb-2 tracking-tighter">
              Grade <br /> Semanal
            </h2>
            <div className="h-3 w-32 bg-gradient-to-r from-primary to-cyber-pink"></div>
          </div>
          
          {/* Room Tabs */}
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2 md:gap-4">
            {rooms.map((room) => (
              <button
                key={room}
                onClick={() => setActiveTab(room)}
                className={`px-6 md:px-8 py-3 clip-button font-bold text-sm tracking-widest transition-all duration-300 ${
                  activeTab === room
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-neon'
                    : 'border border-gray-300 dark:border-gray-700 text-gray-500 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white'
                }`}
              >
                {room.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        <div className="overflow-x-auto min-h-[500px] relative">
           {/* Empty State for other rooms */}
           {scheduleData[activeTab].length === 0 && (
             <div className="absolute inset-0 flex items-center justify-center text-center p-8 bg-surface-light dark:bg-surface-dark rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
               <div>
                  <span className="material-symbols-outlined text-4xl mb-4 text-gray-400">calendar_clock</span>
                  <p className="font-tech text-xl text-gray-400 tracking-widest">GRADE DE HORÁRIOS EM BREVE</p>
               </div>
             </div>
           )}

          {scheduleData[activeTab].length > 0 && (
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="py-6 px-4 font-tech text-xl text-primary w-24">Hora</th>
                  <th className="py-6 px-4 font-display text-xl font-bold text-gray-800 dark:text-gray-200">SEG</th>
                  <th className="py-6 px-4 font-display text-xl font-bold text-gray-800 dark:text-gray-200">TER</th>
                  <th className="py-6 px-4 font-display text-xl font-bold text-gray-800 dark:text-gray-200">QUA</th>
                  <th className="py-6 px-4 font-display text-xl font-bold text-gray-800 dark:text-gray-200">QUI</th>
                  <th className="py-6 px-4 font-display text-xl font-bold text-gray-800 dark:text-gray-200">SEX</th>
                  <th className="py-6 px-4 font-display text-xl font-bold text-gray-800 dark:text-gray-200">SÁB</th>
                </tr>
              </thead>
              <tbody className="font-body text-base tracking-wide">
                {scheduleData[activeTab].map((row, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-100 dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors group"
                  >
                    <td className="py-5 px-4 font-bold text-cyber-pink font-tech text-lg">{row.time}</td>
                    
                    {/* Segunda */}
                    <td className={`py-5 px-4 font-bold ${row.seg ? 'text-black dark:text-white' : 'text-gray-200 dark:text-gray-800'}`}>
                      {row.seg || '-'}
                    </td>
                    
                    {/* Terça */}
                    <td className={`py-5 px-4 font-bold ${row.ter ? 'text-black dark:text-white' : 'text-gray-200 dark:text-gray-800'}`}>
                      {row.ter || '-'}
                    </td>
                    
                    {/* Quarta */}
                    <td className={`py-5 px-4 font-bold ${row.qua ? 'text-black dark:text-white' : 'text-gray-200 dark:text-gray-800'}`}>
                      {row.qua || '-'}
                    </td>
                    
                    {/* Quinta */}
                    <td className={`py-5 px-4 font-bold ${row.qui ? 'text-black dark:text-white' : 'text-gray-200 dark:text-gray-800'}`}>
                      {row.qui || '-'}
                    </td>
                    
                    {/* Sexta */}
                    <td className={`py-5 px-4 font-bold ${row.sex ? 'text-black dark:text-white' : 'text-gray-200 dark:text-gray-800'}`}>
                      {row.sex || '-'}
                    </td>

                    {/* Sábado */}
                     <td className={`py-5 px-4 font-bold ${row.sab ? 'text-black dark:text-white' : 'text-gray-200 dark:text-gray-800'}`}>
                      {row.sab || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
};
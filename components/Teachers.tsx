import React from 'react';

interface Teacher {
  id: number;
  name: string;
  role: string;
  roleColor: 'primary' | 'secondary' | 'tertiary' | 'cyber-pink';
  image: string;
  description: string;
}

const teachersData: Teacher[] = [
  {
    id: 1,
    name: 'Gabriel "Flow"',
    role: 'Danças Urbanas',
    roleColor: 'primary',
    description: 'Foto 1: Homem de boné preto e hoodie',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAljTIRXqnlnrADOTpjNWSDC4tegoiKKW3uWHhUUaj9vZhmL2NK2KR_W3Z3bdPFJOJbI8cSa3xX6L3O0-_yCodCsbPBKwU9BKGJ_RD42nctbbBjiD93MYvZ0cZXkcef9uyfP-D0Dzhn9WaDTiOXYd_PSRk4xQ1HB5B40kxN-JakthyhyHsfLR5g_SSY1dNwlwTdUc47m75rUQsPJtomHNJNrOuyERj9R2m-FypuyzGS7X6jpT-GN0Ce_yvfiKgR6H-UMhZYfkGjrgY' 
  },
  {
    id: 2,
    name: 'Bianca',
    role: 'Jazz & Contemporâneo',
    roleColor: 'tertiary',
    description: 'Foto 2: Mulher ruiva posing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsfnxTIofuLPL7knOEv2JbnQAXS0HvLUzoNQRnDdtz2Ulqi4S0C3V2KD_aDcBgeNJCmNLK3L33qh2Q4kGM26RvDDXe4CSgUiJOpeM37u_ExTP0BtF0FzmX3T1AT7N4VRQoBEAOB9LcHraZWwooEUdX--d1zqZMJQ_3jF6UFxtL-HEDNLfx92y2xkoZHDzvWIkouyxXjIV7mrUGM-exuD0GezvXuJd3x_x4xYirnKAvxgjrDE7EamTEOraPiTpel3rMhXjjophtJrQ'
  },
  {
    id: 3,
    name: 'Rafa "Vogue"',
    role: 'Danças Urbanas',
    roleColor: 'secondary',
    description: 'Foto 3: Homem de camisa vermelha',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Beatriz',
    role: 'Danças Urbanas',
    roleColor: 'cyber-pink',
    description: 'Foto 4: Mulher com bandana e jeans',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJzm6A7VwRFHpuZ7LsGJF5-Fir7W9ta9G-C_7cRzBEquW-DfkqlPmsdA7AvI8NUpA7Lio0QX14Bp9dXANRKMIFicf9fCcIDUWnOrr4DNEb0zEn8DnY7FJ2aFB-QDfnKWaZWGRkgK72XEO3uDQfY-meI50vtME3j0mTvuXuC-HbcfdAiJ2v_1DzkVpYIafgVPf3xvrAs8uLF7NOFbC5MWEie28rO1UfXUsJ7lOa-mjGiwiAf7GnLUdF-bjp__0nLigd2V946og1JE8'
  },
  {
    id: 5,
    name: 'Bruno K.',
    role: 'Danças Urbanas',
    roleColor: 'primary',
    description: 'Foto 5: Homem de óculos escuros estilo party',
    image: 'https://images.unsplash.com/photo-1527010154944-f2241763d806?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Eduarda',
    role: 'Jazz Funk & Heels',
    roleColor: 'cyber-pink',
    description: 'Foto 6: Mulher no carro (Heels)',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 7,
    name: 'Matheus',
    role: 'Danças Urbanas',
    roleColor: 'secondary',
    description: 'Foto 7: Homem de boné sorrindo (fundo noturno)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJE30rvKi1l6onQ_3iVdCZsIqMBNaONz0eXtw3l6iplITr5uABwrfYqs6gXPGcrPkDA5X8Uoh6QlxnJvZ_u20SdmIEZrZQsAxX_Umby9MHyxn7tPSUzXQEJJFuClvdCc863Z_6jR2kyb755YdiNJEPXZexsn9UjXX5bOY1s6dEHjDpr1tTtyMoLPv-NYoVxv2Dh4JY6WqGqNYOtMOrBqRa4wyBK3HQqCdYX6qzgvT4wMEGtyREXRlzbEtC0ZSG_kT0AK-omnNXqS4'
  },
  {
    id: 8,
    name: 'Júlia',
    role: 'Danças Urbanas',
    roleColor: 'tertiary',
    description: 'Foto 8: Mulher de óculos sentada',
    image: 'https://images.unsplash.com/photo-1502518272426-841360638e77?q=80&w=1000&auto=format&fit=crop'
  }
];

const TeacherCard: React.FC<{
  teacher: Teacher;
}> = ({ teacher }) => (
  <div className={`group relative rounded-3xl overflow-hidden bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:border-${teacher.roleColor === 'primary' ? 'primary' : teacher.roleColor === 'secondary' ? 'secondary' : teacher.roleColor === 'tertiary' ? 'tertiary' : 'cyber-pink'} transition-all duration-300 hover:-translate-y-2`}>
    <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
    
    {/* Background Decorative Blob - Randomized position/color feeling */}
    <div className="absolute inset-0 bg-gray-100 dark:bg-neutral-900">
        <div className={`absolute -top-10 -right-10 w-40 h-40 bg-${teacher.roleColor}/20 rounded-full blur-2xl`}></div>
        <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-${teacher.roleColor}/10 to-transparent opacity-50`}></div>
    </div>

    <div className="relative h-[420px] p-4 flex flex-col items-center justify-end z-10">
      <div className="absolute inset-0 overflow-hidden mx-0 mt-0 mb-0 grayscale group-hover:grayscale-0 transition-all duration-500">
        <img alt={`${teacher.name} - ${teacher.role}`} className="w-full h-full object-cover object-top" src={teacher.image} />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
      </div>
      
      <div className="w-full relative z-20 text-white pb-4 px-2">
        <h3 className="font-display text-3xl font-black leading-none mb-2">{teacher.name}</h3>
        <div className="flex justify-between items-end border-t border-white/20 pt-3">
          <p className={`text-xs font-bold text-${teacher.roleColor === 'primary' ? 'primary' : teacher.roleColor === 'secondary' ? 'secondary' : teacher.roleColor === 'tertiary' ? 'tertiary' : 'cyber-pink'} tracking-widest uppercase bg-white/10 backdrop-blur-md px-2 py-1 rounded`}>{teacher.role}</p>
          <span className={`material-symbols-outlined text-white group-hover:text-${teacher.roleColor === 'primary' ? 'primary' : teacher.roleColor === 'secondary' ? 'secondary' : teacher.roleColor === 'tertiary' ? 'tertiary' : 'cyber-pink'} transition-colors`}>arrow_outward</span>
        </div>
      </div>
    </div>
  </div>
);

export const Teachers: React.FC = () => {
  return (
    <section id="teachers" className="py-40 bg-surface-light dark:bg-surface-dark relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div>
              <h2 className="font-display text-6xl md:text-8xl font-black tracking-tighter mb-2">XPACE <br/> TEAM</h2>
              <div className="h-2 w-20 bg-gradient-to-r from-primary to-cyber-pink"></div>
          </div>
          <div className="text-left md:text-right max-w-md">
            <p className="font-body text-text-muted-light dark:text-text-muted-dark font-medium leading-relaxed">
              Nossa equipe é formada por artistas premiados e educadores apaixonados, prontos para guiar você em cada movimento.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {teachersData.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
};
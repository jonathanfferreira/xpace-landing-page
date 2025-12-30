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
    name: "Alisson Felipe",
    role: "Hip Hop",
    roleColor: "primary",
    description: "Hip Hop",
    image: "/images/teachers/alissonfelipe.jpg"
  },
  {
    id: 2,
    name: "Bianca Marcela",
    role: "Jazz & Contemporâneo",
    roleColor: "tertiary",
    description: "Jazz & Contemporâneo",
    image: "/images/teachers/bianca.jpg"
  },
  {
    id: 3,
    name: "Dil",
    role: "Vogue • Jazz Funk",
    roleColor: "cyber-pink",
    description: "Vogue • Jazz Funk • Waacking",
    image: "/images/teachers/dil.jpg"
  },
  {
    id: 4,
    name: "Eduarda Rodrigues",
    role: "Heels & Jazz Funk",
    roleColor: "secondary",
    description: "Heels & Jazz Funk",
    image: "/images/teachers/eduarda.jpg"
  },
  {
    id: 5,
    name: "Engels",
    role: "Vogue & Waacking",
    roleColor: "primary",
    description: "Vogue & Waacking",
    image: "/images/teachers/engels.jpg"
  },
  {
    id: 6,
    name: "Isis",
    role: "Hip Hop",
    roleColor: "secondary",
    description: "Hip Hop",
    image: "/images/teachers/isis.jpg"
  },
  {
    id: 7,
    name: "Jhonney",
    role: "Dancehall & Hip Hop",
    roleColor: "tertiary",
    description: "Dancehall & Hip Hop",
    image: "/images/teachers/jhonney.jpg"
  },
  {
    id: 8,
    name: "Lóren Stefany",
    role: "Hip Hop & House",
    roleColor: "primary",
    description: "Hip Hop & House",
    image: "/images/teachers/loren.jpg"
  },
  {
    id: 9,
    name: "Lucas Maciel",
    role: "Dancehall",
    roleColor: "secondary",
    description: "Dancehall",
    image: "/images/teachers/lucasmaciel.jpg"
  },
  {
    id: 10,
    name: "Marcelinho",
    role: "Hip Hop",
    roleColor: "tertiary",
    description: "Hip Hop",
    image: "/images/teachers/marcelinho.jpg"
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
        <img alt={`${teacher.name} - ${teacher.role}`} className="w-full h-full object-cover object-top" src={teacher.image} onError={(e) => {
          // Fallback for missing images
          e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + teacher.name.replace(' ', '+') + '&background=random';
        }} />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
      </div>

      <div className="w-full relative z-20 text-white pb-4 px-2">
        <h3 className="font-display text-3xl font-black leading-none mb-2">{teacher.name}</h3>
        <div className="flex justify-between items-end border-t border-white/20 pt-3">
          <p className={`text-xs font-bold text-${teacher.roleColor === 'primary' ? 'primary' : teacher.roleColor === 'secondary' ? 'secondary' : teacher.roleColor === 'tertiary' ? 'tertiary' : 'cyber-pink'} tracking-widest uppercase bg-white/10 backdrop-blur-md px-2 py-1 rounded`}>{teacher.role}</p>
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
            <h2 className="font-display text-6xl md:text-8xl font-black tracking-tighter mb-2">XPACE <br /> TEAM</h2>
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
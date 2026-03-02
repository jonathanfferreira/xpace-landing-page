import React from 'react';
import { Instagram } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { motion } from 'framer-motion';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  roleColor: 'primary' | 'secondary' | 'tertiary' | 'cyber-pink';
  image: string;
  description: string;
  instagram?: string;
}

const directorsData: TeamMember[] = [
  {
    id: 101,
    name: "Alceu",
    role: "Diretor Financeiro e Administrativo",
    roleColor: "primary",
    description: "Diretor Financeiro e Administrativo",
    image: "/images/teachers/alceu.jpg"
  },
  {
    id: 7,
    name: "Jhonney",
    role: "Diretor Artístico e Marketing",
    roleColor: "tertiary",
    description: "Diretor Artístico e Marketing",
    image: "/images/teachers/jhonney-director.jpg",
    instagram: "https://www.instagram.com/jhonney.xp/"
  }
];

const teachersData: TeamMember[] = [
  {
    id: 12,
    name: "Alana Veiga",
    role: "Hip Hop & House",
    roleColor: "cyber-pink",
    description: "Hip Hop & House",
    image: "/images/teachers/alana.jpg",
    instagram: "https://www.instagram.com/veigalanaa/"
  },
  {
    id: 2,
    name: "Bianca Marcela",
    role: "Jazz & Contemporâneo",
    roleColor: "tertiary",
    description: "Jazz & Contemporâneo",
    image: "/images/teachers/bianca.webp",
    instagram: "https://www.instagram.com/biancamarceela/"
  },
  {
    id: 3,
    name: "Dil",
    role: "Vogue • Jazz Funk",
    roleColor: "cyber-pink",
    description: "Vogue • Jazz Funk • Waacking",
    image: "/images/teachers/dil.webp",
    instagram: "https://www.instagram.com/dilschulz/"
  },
  {
    id: 14,
    name: "Duda Biz",
    role: "Hip Hop & Dancehall",
    roleColor: "primary",
    description: "Hip Hop & Dancehall",
    image: "/images/teachers/dudabiz.jpg",
    instagram: "https://www.instagram.com/dudabizs/"
  },
  {
    id: 16,
    name: "Gus Joesting",
    role: "Jazz Funk & Femme Style",
    roleColor: "cyber-pink",
    description: "Jazz Funk, Waacking & Heels",
    image: "/images/teachers/gus.jpg",
    instagram: "https://www.instagram.com/gusjoesting/"
  },
  {
    id: 4,
    name: "Eduarda Rodrigues",
    role: "Heels & Jazz Funk",
    roleColor: "secondary",
    description: "Heels & Jazz Funk",
    image: "/images/teachers/eduarda.webp"
  },
  {
    id: 5,
    name: "Engels",
    role: "Vogue & Waacking",
    roleColor: "primary",
    description: "Vogue & Waacking",
    image: "/images/teachers/engels.webp",
    instagram: "https://www.instagram.com/engelsmatheus_/"
  },
  {
    id: 11,
    name: "Icaro Alves",
    role: "Dança de Salão",
    roleColor: "primary",
    description: "Dança de Salão",
    image: "/images/teachers/icaro.jpg",
    instagram: "https://www.instagram.com/icaroalvesdancer/"
  },
  {
    id: 6,
    name: "Isis",
    role: "Hip Hop",
    roleColor: "secondary",
    description: "Hip Hop",
    image: "/images/teachers/isis.webp",
    instagram: "https://www.instagram.com/isislkr/"
  },
  {
    id: 107,
    name: "Jhonney",
    role: "Dancehall & Hip Hop",
    roleColor: "tertiary",
    description: "Dancehall & Hip Hop",
    image: "/images/teachers/jhonney.webp",
    instagram: "https://www.instagram.com/jhonney.xp/"
  },

  {
    id: 8,
    name: "Lóren Stefany",
    role: "Hip Hop & House",
    roleColor: "primary",
    description: "Hip Hop & House",
    image: "/images/teachers/loren.webp",
    instagram: "https://www.instagram.com/ftloren/"
  },
  {
    id: 9,
    name: "Lucas Maciel",
    role: "Dancehall",
    roleColor: "secondary",
    description: "Dancehall",
    image: "/images/teachers/lucasmaciel.jpg",
    instagram: "https://www.instagram.com/lucasmacieldx/"
  },
  {
    id: 10,
    name: "Marcelinho",
    role: "Hip Hop",
    roleColor: "tertiary",
    description: "Hip Hop",
    image: "/images/teachers/marcelinho.jpg",
    instagram: "https://www.instagram.com/marcelinho_hiphop/"
  },
  {
    id: 115,
    name: "Ruan Amorim",
    role: "Fundador e Coreógrafo",
    roleColor: "secondary",
    description: "Fundador e Coreógrafo",
    image: "/images/teachers/ruan.jpg",
    instagram: "https://www.instagram.com/ruan_amrm/"
  },
  {
    id: 13,
    name: "Samuel",
    role: "Hip Hop & Jazz Funk",
    roleColor: "tertiary",
    description: "Hip Hop & Jazz Funk",
    image: "/images/teachers/samuel.jpg",
    instagram: "https://www.instagram.com/samuzek/"
  }
];

const TeamCard: React.FC<{
  member: TeamMember;
}> = ({ member }) => (
  <TiltCard>
    <div className={`group relative rounded-3xl overflow-hidden bg-white dark:bg-black border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(127,0,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(127,0,255,0.5)]`}>

      {/* Holographic Border Gradient on Hover */}
      <div className={`absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-transparent via-${member.roleColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>

      {/* Background Decorative Blob - Randomized position/color feeling */}
      <div className="absolute inset-0 bg-gray-100 dark:bg-neutral-900">
        <div className={`absolute -top-10 -right-10 w-40 h-40 bg-${member.roleColor}/20 rounded-full blur-2xl group-hover:bg-${member.roleColor}/40 transition-colors duration-500`}></div>
        <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-${member.roleColor}/10 to-transparent opacity-50`}></div>
      </div>

      <div className="relative h-[420px] p-4 flex flex-col items-center justify-end z-10">
        <div className="absolute inset-0 overflow-hidden mx-0 mt-0 mb-0 grayscale group-hover:grayscale-0 transition-all duration-500">
          <img alt={`${member.name} - ${member.role}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" src={member.image} onError={(e) => {
            // Fallback for missing images
            e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + member.name.replace(' ', '+') + '&background=random';
          }} />

          {/* Glitch Overlay Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-cyber-pink mix-blend-color-dodge transition-opacity duration-300"></div>

          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

          {/* Instagram Link Overlay */}
          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 text-white z-20"
              title="Ver Instagram"
            >
              <Instagram size={24} />
            </a>
          )}
        </div>

        <div className="w-full relative z-20 text-white pb-4 px-2">
          <h3 className="font-display text-3xl font-black leading-none mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{member.name}</h3>
          <div className="flex justify-between items-end border-t border-white/20 pt-3 group-hover:border-white/50 transition-colors">
            <p className={`text-xs font-bold text-${member.roleColor === 'primary' ? 'primary' : member.roleColor === 'secondary' ? 'secondary' : member.roleColor === 'tertiary' ? 'tertiary' : 'cyber-pink'} tracking-widest uppercase bg-white/10 backdrop-blur-md px-2 py-1 rounded shadow-[0_0_10px_rgba(0,0,0,0.5)]`}>{member.role}</p>
          </div>
        </div>
      </div>
    </div>
  </TiltCard>
);

export const Teachers: React.FC = () => {
  return (
    <section id="teachers" className="py-20 bg-surface-light dark:bg-surface-dark relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter mb-2 uppercase">Equipe</h2>
            <div className="h-2 w-20 bg-gradient-to-r from-primary to-cyber-pink"></div>
          </div>
          <div className="text-left md:text-right max-w-md">
            <p className="font-body text-text-muted-light dark:text-text-muted-dark font-medium leading-relaxed">
              Nossa equipe é formada por artistas premiados e educadores apaixonados, prontos para guiar você em cada movimento.
            </p>
          </div>
        </div>

        {/* Directors Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="font-display text-3xl md:text-5xl font-black tracking-tighter mb-8 uppercase text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 transition-all duration-300">Direção</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {directorsData.map((director) => (
              <TeamCard key={director.id} member={director} />
            ))}
          </div>
        </motion.div>

        {/* Teachers Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-display text-3xl md:text-5xl font-black tracking-tighter mb-8 uppercase text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 transition-all duration-300">Professores</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {teachersData.map((teacher) => (
              <TeamCard key={teacher.id} member={teacher} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
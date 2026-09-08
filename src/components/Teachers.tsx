import React from 'react';
import { Instagram } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { motion } from 'framer-motion';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  schedule?: string;
  roleColor: 'primary' | 'secondary' | 'tertiary' | 'cyber-pink';
  image?: string;
  description: string;
  instagram?: string;
  isFixed?: boolean;
}

const directorsData: TeamMember[] = [
  {
    id: 101,
    name: "Alceu de Miranda Junior",
    role: "Diretor Financeiro",
    roleColor: "primary",
    description: "Diretor Financeiro",
    image: "/images/teachers/alceu.jpg"
  },
  {
    id: 102,
    name: "Tayonara Cristina",
    role: "Diretora Administrativa",
    roleColor: "cyber-pink",
    description: "Sócia e Diretora Administrativa"
  },
  {
    id: 7,
    name: "Jhonney",
    role: "Diretor Artístico",
    roleColor: "secondary",
    description: "Diretor Artístico",
    image: "/images/teachers/jhonney-director.jpg",
    instagram: "https://www.instagram.com/jhonney.xp/"
  }
];

const fixedTeachersData: TeamMember[] = [
  {
    id: 2,
    name: "Bianca Marcela",
    role: "Jazz & Contemporâneo",
    schedule: "Segunda & Quarta",
    roleColor: "tertiary",
    description: "Jazz & Contemporâneo",
    image: "/images/teachers/bianca.webp",
    instagram: "https://www.instagram.com/biancamarceela/",
    isFixed: true
  },
  {
    id: 4,
    name: "Eduarda Rodrigues",
    role: "Jazz Funk & Heels",
    schedule: "Sábado (09h e 11h)",
    roleColor: "secondary",
    description: "Heels & Jazz Funk",
    image: "/images/teachers/eduarda.webp",
    isFixed: true
  },
  {
    id: 16,
    name: "Gus Joesting",
    role: "Jazz Funk & Heels",
    schedule: "Terça (19h) & Quinta (20h)",
    roleColor: "cyber-pink",
    description: "Jazz Funk, Waacking & Heels",
    image: "/images/teachers/gus.jpg",
    instagram: "https://www.instagram.com/gusjoesting/",
    isFixed: true
  },
  {
    id: 18,
    name: "Natália",
    role: "Ritmos",
    schedule: "Terça & Quinta (19h)",
    roleColor: "primary",
    description: "Ritmos",
    isFixed: true
  },
  {
    id: 17,
    name: "Lizbeth",
    role: "K-Pop",
    schedule: "Terça, Quinta & Sexta",
    roleColor: "cyber-pink",
    description: "K-Pop",
    instagram: "https://www.instagram.com/lisbeth._.gabriela/",
    isFixed: true
  },
  {
    id: 19,
    name: "Leonardo Silvério",
    role: "Acrobacia",
    schedule: "Segunda & Quarta (20h)",
    roleColor: "primary",
    description: "Acrobacias de Solo",
    isFixed: true
  },
  {
    id: 11,
    name: "Icaro Alves",
    role: "Dança de Salão",
    schedule: "Terça (Forró) & Quinta (Gafieira)",
    roleColor: "primary",
    description: "Dança de Salão: Forró & Samba de Gafieira",
    image: "/images/teachers/icaro.jpg",
    instagram: "https://www.instagram.com/icaroalvesdancer/",
    isFixed: true
  },
  {
    id: 13,
    name: "Samuel",
    role: "Danças Urbanas",
    schedule: "Sábado (10h)",
    roleColor: "tertiary",
    description: "Danças Urbanas",
    image: "/images/teachers/samuel.jpg",
    instagram: "https://www.instagram.com/samuzek/",
    isFixed: true
  },
  {
    id: 107,
    name: "Jhonney",
    role: "Danças Urbanas",
    schedule: "Sexta-feira (19h)",
    roleColor: "secondary",
    description: "Danças Urbanas",
    image: "/images/teachers/jhonney.webp",
    instagram: "https://www.instagram.com/jhonney.xp/",
    isFixed: true
  },
  {
    id: 20,
    name: "Samu",
    role: "Street Funk",
    schedule: "Sexta-feira (19h)",
    roleColor: "cyber-pink",
    description: "Street Funk",
    image: "/images/teachers/samuel.jpg",
    instagram: "https://www.instagram.com/samuzek/",
    isFixed: true
  }
];

const guestTeachersData: TeamMember[] = [
  {
    id: 12,
    name: "Alana Veiga",
    role: "Hip Hop & House",
    roleColor: "cyber-pink",
    description: "Danças Urbanas Júnior & Avançado",
    image: "/images/teachers/alana.jpg",
    instagram: "https://www.instagram.com/veigalanaa/"
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
  }
];

const roleColorThemes: Record<TeamMember['roleColor'], {
  badgeText: string;
  blobColor: string;
  gradientVia: string;
  avatarBorder: string;
  avatarBg: string;
  avatarGlow: string;
  avatarDot: string;
}> = {
  primary: {
    badgeText: 'text-primary',
    blobColor: 'bg-primary/20 group-hover:bg-primary/40',
    gradientVia: 'via-primary',
    avatarBorder: 'border-primary/50 group-hover:border-primary',
    avatarBg: 'from-primary/30 to-white/5',
    avatarGlow: 'shadow-[0_0_30px_rgba(99,36,178,0.35)]',
    avatarDot: 'bg-primary',
  },
  secondary: {
    badgeText: 'text-secondary',
    blobColor: 'bg-secondary/20 group-hover:bg-secondary/40',
    gradientVia: 'via-secondary',
    avatarBorder: 'border-secondary/50 group-hover:border-secondary',
    avatarBg: 'from-secondary/30 to-white/5',
    avatarGlow: 'shadow-[0_0_30px_rgba(235,0,188,0.35)]',
    avatarDot: 'bg-secondary',
  },
  tertiary: {
    badgeText: 'text-amber-400',
    blobColor: 'bg-amber-500/20 group-hover:bg-amber-500/40',
    gradientVia: 'via-amber-500',
    avatarBorder: 'border-amber-500/50 group-hover:border-amber-400',
    avatarBg: 'from-amber-500/30 to-white/5',
    avatarGlow: 'shadow-[0_0_30px_rgba(245,158,11,0.35)]',
    avatarDot: 'bg-amber-400',
  },
  'cyber-pink': {
    badgeText: 'text-pink-400',
    blobColor: 'bg-pink-500/20 group-hover:bg-pink-500/40',
    gradientVia: 'via-pink-500',
    avatarBorder: 'border-pink-500/50 group-hover:border-pink-400',
    avatarBg: 'from-pink-500/30 to-white/5',
    avatarGlow: 'shadow-[0_0_30px_rgba(236,72,153,0.35)]',
    avatarDot: 'bg-pink-400',
  }
};

const TeamCard: React.FC<{
  member: TeamMember;
}> = ({ member }) => {
  const [imgError, setImgError] = React.useState(false);

  const getInitials = (name: string) => {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return 'XP';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const initials = getInitials(member.name);
  const showPhoto = Boolean(member.image) && !imgError;
  const theme = roleColorThemes[member.roleColor] || roleColorThemes.primary;

  return (
    <TiltCard>
      <div className={`group relative rounded-3xl overflow-hidden bg-white dark:bg-black border ${member.isFixed ? 'border-primary/40 shadow-[0_0_15px_rgba(99,36,178,0.15)]' : 'border-gray-200 dark:border-gray-800'} transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(127,0,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(127,0,255,0.5)]`}>

        {/* Holographic Border Gradient on Hover */}
        <div className={`absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-transparent ${theme.gradientVia} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none"></div>

        {/* Background Decorative Blob */}
        <div className="absolute inset-0 bg-gray-100 dark:bg-neutral-900 pointer-events-none">
          <div className={`absolute -top-10 -right-10 w-40 h-40 ${theme.blobColor} rounded-full blur-2xl transition-colors duration-500`}></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent opacity-50"></div>
        </div>

        <div className="relative h-[420px] p-4 flex flex-col items-center justify-end z-10">
          <div className="absolute inset-0 overflow-hidden mx-0 mt-0 mb-0">
            {showPhoto ? (
              <img
                alt={`${member.name} - ${member.role}`}
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                src={member.image}
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-neutral-800/90 via-neutral-900 to-black relative select-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,36,178,0.2)_0%,_transparent_75%)]"></div>
                <div className="relative flex flex-col items-center justify-center -translate-y-6">
                  <div className={`w-28 h-28 rounded-3xl bg-gradient-to-tr ${theme.avatarBg} border-2 ${theme.avatarBorder} flex items-center justify-center ${theme.avatarGlow} group-hover:scale-105 transition-all duration-500`}>
                    <span className="font-display text-4xl font-black tracking-wider text-white">
                      {initials}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className={`w-1.5 h-1.5 rounded-full ${theme.avatarDot} animate-pulse`}></span>
                    <span className="text-[10px] font-tech text-gray-300 uppercase tracking-widest font-bold">XPACE CREW</span>
                  </div>
                </div>
              </div>
            )}

            {/* Glitch Overlay Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-cyber-pink mix-blend-color-dodge transition-opacity duration-300 pointer-events-none"></div>

            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none"></div>

            {/* Top badges & Instagram Link */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
              {member.isFixed ? (
                <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-tech font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/20 shadow-md">
                  ★ Turma Fixa
                </span>
              ) : <span />}

              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/30 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 text-white"
                  title="Ver Instagram"
                >
                  <Instagram size={20} />
                </a>
              )}
            </div>
          </div>

          <div className="w-full relative z-20 text-white pb-4 px-2 pointer-events-none">
            <h3 className="font-display text-2xl lg:text-3xl font-black leading-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{member.name}</h3>
            
            <div className="space-y-1.5 border-t border-white/20 pt-3 group-hover:border-white/50 transition-colors">
              <div className="flex justify-between items-center gap-2">
                <p className={`text-xs font-bold ${theme.badgeText} tracking-widest uppercase bg-white/10 backdrop-blur-md px-2 py-1 rounded shadow-[0_0_10px_rgba(0,0,0,0.5)]`}>
                  {member.role}
                </p>
              </div>
              {member.schedule && (
                <p className="text-[11px] font-tech text-gray-300 tracking-wider uppercase font-semibold">
                  🗓 {member.schedule}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

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
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter mb-2 uppercase text-text-main-light dark:text-text-main-dark">Equipe</h2>
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
          <h3 className="font-display text-3xl md:text-5xl font-black tracking-tighter mb-8 uppercase text-text-main-light dark:text-text-main-dark transition-all duration-300">Direção</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {directorsData.map((director) => (
              <TeamCard key={director.id} member={director} />
            ))}
          </div>
        </motion.div>

        {/* Fixed Schedule Teachers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-tech tracking-widest text-primary uppercase font-bold">Grade Semanal Regular</span>
              </div>
              <h3 className="font-display text-3xl md:text-5xl font-black tracking-tighter uppercase text-text-main-light dark:text-text-main-dark">
                Professores <span className="text-primary">Turmas Fixas</span>
              </h3>
            </div>
            <p className="font-body text-xs md:text-sm text-text-muted-light dark:text-text-muted-dark max-w-md">
              Docentes titulares responsáveis pela formação contínua e evolução técnica em nossa grade semanal oficial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            {fixedTeachersData.map((teacher) => (
              <TeamCard key={teacher.id} member={teacher} />
            ))}
          </div>
        </motion.div>

        {/* Sporadic / Rotating Teachers for Urban Dances */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-t border-gray-200 dark:border-gray-800 pt-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <span className="text-xs font-tech tracking-widest text-secondary uppercase font-bold">Módulos & Imersões Rotativas</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-black tracking-tighter uppercase text-text-main-light dark:text-text-main-dark">
                Corpo Docente <span className="text-secondary">Danças Urbanas</span>
              </h3>
            </div>
            <p className="font-body text-xs md:text-sm text-text-muted-light dark:text-text-muted-dark max-w-md">
              Professores que ministram aulas de aprofundamento e vivências rotativas nas turmas de Danças Urbanas Júnior e Sênior Avançado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            {guestTeachersData.map((teacher) => (
              <TeamCard key={teacher.id} member={teacher} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
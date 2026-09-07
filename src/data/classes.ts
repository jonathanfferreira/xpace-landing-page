import { DanceClass, DayOfWeek, ScheduleItem, WeeklySchedule } from '../types/classes';

/**
 * Catálogo Oficial de Turmas da XPACE Escola de Dança (Atualizado 2026).
 * Endereço: Rua Tijucas, 401 - Centro, Joinville > Santa Catarina.
 * 
 * Fonte Única de Verdade (Single Source of Truth) para:
 * 1. Grade Semanal de Aulas (Schedule)
 * 2. Matching Engine do Funil ("Encontre sua Turma")
 */
export const DANCE_CLASSES: DanceClass[] = [
  // =========================================================================
  // SEGUNDA E QUARTA
  // =========================================================================
  {
    id: 'hip-hop-kids-qua-1000',
    name: 'Hip Hop Kids',
    modality: 'STREET_DANCE',
    category: 'KIDS',
    ageLabel: '7 A 12 ANOS',
    minAge: 7,
    maxAge: 12,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['QUARTA'],
    period: 'MANHÃ',
    time: '10:00',
    room: 'XLAB',
    active: true,
    acceptsTrial: true,
    description: 'Danças urbanas lúdicas com foco em ritmo, musicalidade e expressão motora.'
  },
  {
    id: 'hip-hop-kids-qua-1500',
    name: 'Hip Hop Kids',
    modality: 'STREET_DANCE',
    category: 'KIDS',
    ageLabel: '7 A 12 ANOS',
    minAge: 7,
    maxAge: 12,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['QUARTA'],
    period: 'TARDE',
    time: '15:00',
    room: 'XLAB',
    active: true,
    acceptsTrial: true,
    description: 'Turma de danças urbanas para crianças desenvolverem coordenação e confiança.'
  },
  {
    id: 'hip-hop-kids-seg-qua-1900',
    name: 'Hip Hop Kids',
    modality: 'STREET_DANCE',
    category: 'KIDS',
    ageLabel: '7 A 12 ANOS',
    minAge: 7,
    maxAge: 12,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['SEGUNDA', 'QUARTA'],
    period: 'NOITE',
    time: '19:00',
    room: 'XPERIENCE',
    active: true,
    acceptsTrial: true,
    description: 'Aulas noturnas de danças urbanas para crianças na sala principal XPERIENCE.'
  },
  {
    id: 'contemporaneo-seg-qua-1900',
    name: 'Contemporâneo',
    modality: 'CONTEMPORANEO',
    category: 'TEEN',
    ageLabel: '+ 12 ANOS',
    minAge: 12,
    maxAge: 99,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['SEGUNDA', 'QUARTA'],
    period: 'NOITE',
    time: '19:00',
    room: 'XLAB',
    active: true,
    acceptsTrial: true,
    description: 'Dança contemporânea com foco em fluxo, expressão corporal e exploração de movimento.'
  },
  {
    id: 'street-dance-teens-seg-qua-1900',
    name: 'Street Dance Teens',
    modality: 'STREET_DANCE',
    category: 'TEEN',
    ageLabel: '12 A 16 ANOS',
    minAge: 12,
    maxAge: 16,
    level: 'INTERMEDIARIO',
    levelLabel: 'Intermediário',
    days: ['SEGUNDA', 'QUARTA'],
    period: 'NOITE',
    time: '19:00',
    room: 'XTAGE',
    active: true,
    acceptsTrial: true,
    description: 'Coreografias e fundamentos urbanos intermediários para adolescentes na sala XTAGE.'
  },
  {
    id: 'hip-hop-baby-seg-qua-1900',
    name: 'Hip Hop Baby',
    modality: 'STREET_DANCE',
    category: 'KIDS',
    ageLabel: '3 A 6 ANOS',
    minAge: 3,
    maxAge: 6,
    level: 'INICIANTE',
    levelLabel: 'Iniciante (45 min)',
    days: ['SEGUNDA', 'QUARTA'],
    period: 'NOITE',
    time: '19:00',
    room: 'XCORE',
    active: true,
    acceptsTrial: true,
    description: 'Iniciação motora e artística para os primeiros passos dos pequenos na dança.'
  },
  {
    id: 'acrobacia-seg-qua-2000',
    name: 'Acrobacia',
    modality: 'ACROBACIA',
    category: 'TEEN',
    ageLabel: '+ 12 ANOS',
    minAge: 12,
    maxAge: 99,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['SEGUNDA', 'QUARTA'],
    period: 'NOITE',
    time: '20:00',
    room: 'XTAGE',
    active: true,
    acceptsTrial: true,
    description: 'Acrobacias de solo, flexibilidade, força e consciência corporal com segurança.'
  },
  {
    id: 'street-dance-adult-seg-qua-2000',
    name: 'Street Dance Adult',
    modality: 'STREET_DANCE',
    category: 'ADULTO',
    ageLabel: '+ 17 ANOS',
    minAge: 17,
    maxAge: 99,
    level: 'AVANCADO',
    levelLabel: 'Avançado',
    days: ['SEGUNDA', 'QUARTA'],
    period: 'NOITE',
    time: '20:00',
    room: 'XPERIENCE',
    active: true,
    acceptsTrial: true,
    description: 'Treinamento avançado de danças urbanas com intensidade e complexidade coreográfica.'
  },
  {
    id: 'jazz-teens-seg-qua-2000',
    name: 'Jazz Teens',
    modality: 'JAZZ_FUNK',
    category: 'TEEN',
    ageLabel: '+ 12 ANOS',
    minAge: 12,
    maxAge: 99,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['SEGUNDA', 'QUARTA'],
    period: 'NOITE',
    time: '20:00',
    room: 'XLAB',
    active: true,
    acceptsTrial: true,
    description: 'Jazz contemporâneo e comercial para adolescentes explorando técnica e energia.'
  },
  {
    id: 'jazz-adult-seg-qua-2100',
    name: 'Jazz Adult',
    modality: 'JAZZ_FUNK',
    category: 'ADULTO',
    ageLabel: '+ 18 ANOS',
    minAge: 18,
    maxAge: 99,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['SEGUNDA', 'QUARTA'],
    period: 'NOITE',
    time: '21:00',
    room: 'XPERIENCE',
    active: true,
    acceptsTrial: true,
    description: 'Aulas de Jazz adulto no final da noite com foco em técnica, linhas e bem-estar.'
  },

  // =========================================================================
  // TERÇA E QUINTA
  // =========================================================================
  {
    id: 'k-pop-ter-qui-1900',
    name: 'K-Pop',
    modality: 'K_POP',
    category: 'TEEN',
    ageLabel: '+ 12 ANOS',
    minAge: 12,
    maxAge: 99,
    level: 'INTERMEDIARIO',
    levelLabel: 'Intermediário',
    days: ['TERÇA', 'QUINTA'],
    period: 'NOITE',
    time: '19:00',
    room: 'XPERIENCE',
    active: true,
    acceptsTrial: true,
    description: 'Coreografias e formações dos maiores hits do K-Pop na sala principal XPERIENCE.'
  },
  {
    id: 'ritmos-ter-qui-1900',
    name: 'Ritmos',
    modality: 'RITMOS',
    category: 'ADULTO',
    ageLabel: '+ 18 ANOS',
    minAge: 18,
    maxAge: 99,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['TERÇA', 'QUINTA'],
    period: 'NOITE',
    time: '19:00',
    room: 'XLAB',
    active: true,
    acceptsTrial: true,
    description: 'Alta queima calórica, diversão, sociabilidade e ritmos contagiantes.'
  },
  {
    id: 'street-dance-teens-ter-qui-1900',
    name: 'Street Dance Teens',
    modality: 'STREET_DANCE',
    category: 'TEEN',
    ageLabel: '+ 12 ANOS',
    minAge: 12,
    maxAge: 16,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['TERÇA', 'QUINTA'],
    period: 'NOITE',
    time: '19:00',
    room: 'XCORE',
    active: true,
    acceptsTrial: true,
    description: 'Fundamentos de danças urbanas para adolescentes que estão começando.'
  },
  {
    id: 'jazz-funk-adult-ter-1900',
    name: 'Jazz Funk Adult',
    modality: 'JAZZ_FUNK',
    category: 'ADULTO',
    ageLabel: '+ 17 ANOS',
    minAge: 17,
    maxAge: 99,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['TERÇA'],
    period: 'NOITE',
    time: '19:00',
    room: 'XLAB',
    active: true,
    acceptsTrial: true,
    description: 'Energia comercial de videoclipe, estilo e atitude nas terças-feiras.'
  },
  {
    id: 'heels-adult-qui-2000',
    name: 'Heels Adult',
    modality: 'HEELS',
    category: 'ADULTO',
    ageLabel: '+ 17 ANOS',
    minAge: 17,
    maxAge: 99,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['QUINTA'],
    period: 'NOITE',
    time: '20:00',
    room: 'XCORE',
    active: true,
    acceptsTrial: true,
    description: 'Dança no salto alto com empoderamento, postura e linhas nas quintas-feiras.'
  },
  {
    id: 'forro-ter-2000',
    name: 'Forró',
    modality: 'DANCA_SALAO',
    category: 'ADULTO',
    ageLabel: '+ 18 ANOS',
    minAge: 18,
    maxAge: 99,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['TERÇA'],
    period: 'NOITE',
    time: '20:00',
    room: 'XPERIENCE',
    active: true,
    acceptsTrial: true,
    description: 'Dança a dois tradicional e universitária com descontração e técnica.'
  },
  {
    id: 'gafieira-qui-2000',
    name: 'Gafieira',
    modality: 'DANCA_SALAO',
    category: 'ADULTO',
    ageLabel: '+ 18 ANOS',
    minAge: 18,
    maxAge: 99,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['QUINTA'],
    period: 'NOITE',
    time: '20:00',
    room: 'XPERIENCE',
    active: true,
    acceptsTrial: true,
    description: 'Samba de gafieira: elegância, malandragem, postura e condução.'
  },

  // =========================================================================
  // SEXTA
  // =========================================================================
  {
    id: 'k-pop-sex-1000',
    name: 'K-Pop',
    modality: 'K_POP',
    category: 'TEEN',
    ageLabel: '+ 12 ANOS',
    minAge: 12,
    maxAge: 99,
    level: 'INICIANTE',
    levelLabel: 'Iniciante (Nova Turma)',
    days: ['SEXTA'],
    period: 'MANHÃ',
    time: '10:00',
    room: 'XLAB',
    active: true,
    acceptsTrial: true,
    description: 'Nova turma matutina de K-Pop nas sextas-feiras.'
  },
  {
    id: 'street-funk-sex-1900',
    name: 'Street Funk',
    modality: 'STREET_DANCE',
    category: 'TEEN',
    ageLabel: '+ 15 ANOS',
    minAge: 15,
    maxAge: 99,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['SEXTA'],
    period: 'NOITE',
    time: '19:00',
    room: 'XLAB',
    active: true,
    acceptsTrial: true,
    description: 'Fusão vibrante de danças urbanas com funk e ritmo comercial.'
  },
  {
    id: 'street-adult-sex-1900',
    name: 'Street Adult',
    modality: 'STREET_DANCE',
    category: 'ADULTO',
    ageLabel: '+ 17 ANOS',
    minAge: 17,
    maxAge: 99,
    level: 'INTERMEDIARIO',
    levelLabel: 'Intermediário',
    days: ['SEXTA'],
    period: 'NOITE',
    time: '19:00',
    room: 'XPERIENCE',
    active: true,
    acceptsTrial: true,
    description: 'Turma intermediária de danças urbanas para fechar a semana na vibe.'
  },

  // =========================================================================
  // SÁBADO
  // =========================================================================
  {
    id: 'ballet-baby-class-sab-0915',
    name: 'Ballet Baby Class',
    modality: 'BALLET',
    category: 'KIDS',
    ageLabel: '+ 3 ANOS',
    minAge: 3,
    maxAge: 6,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['SÁBADO'],
    period: 'MANHÃ',
    time: '09:15',
    room: 'XLAB',
    active: true,
    acceptsTrial: true,
    description: 'Primeiro contato lúdico com o Ballet clássico para os pequenos no sábado de manhã.'
  },
  {
    id: 'jazz-funk-sab-0900',
    name: 'Jazz Funk',
    modality: 'JAZZ_FUNK',
    category: 'TEEN',
    ageLabel: '+ 15 ANOS',
    minAge: 15,
    maxAge: 99,
    level: 'INTERMEDIARIO',
    levelLabel: 'Intermediário',
    days: ['SÁBADO'],
    period: 'MANHÃ',
    time: '09:00',
    room: 'XPERIENCE',
    active: true,
    acceptsTrial: true,
    description: 'Jazz Funk intermediário abrindo os sábados com muita energia na sala principal.'
  },
  {
    id: 'street-adult-sab-1000',
    name: 'Street Adult',
    modality: 'STREET_DANCE',
    category: 'ADULTO',
    ageLabel: '+ 16 ANOS',
    minAge: 16,
    maxAge: 99,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['SÁBADO'],
    period: 'MANHÃ',
    time: '10:00',
    room: 'XPERIENCE',
    active: true,
    acceptsTrial: true,
    description: 'Danças urbanas para jovens e adultos no fim de semana.'
  },
  {
    id: 'heels-sab-1100',
    name: 'Heels',
    modality: 'HEELS',
    category: 'ADULTO',
    ageLabel: '+ 15 ANOS',
    minAge: 15,
    maxAge: 99,
    level: 'INTERMEDIARIO',
    levelLabel: 'Intermediário',
    days: ['SÁBADO'],
    period: 'MANHÃ',
    time: '11:00',
    room: 'XPERIENCE',
    active: true,
    acceptsTrial: true,
    description: 'Heels dance intermediário no sábado para desenvolver técnica e palco.'
  },
  {
    id: 'ballet-fit-sab-1100',
    name: 'Ballet Fit',
    modality: 'BALLET',
    category: 'ADULTO',
    ageLabel: '+ 16 ANOS',
    minAge: 16,
    maxAge: 99,
    level: 'INICIANTE',
    levelLabel: 'Iniciante',
    days: ['SÁBADO'],
    period: 'MANHÃ',
    time: '11:00',
    room: 'XLAB',
    active: true,
    acceptsTrial: true,
    description: 'Combinação de exercícios de ballet e condicionamento físico para postura e força.'
  }
];

/**
 * Converte o catálogo de turmas na grade semanal formatada para o componente Schedule.
 */
export function getWeeklySchedule(): WeeklySchedule {
  const days: DayOfWeek[] = ['SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO'];
  const schedule: WeeklySchedule = {
    'SEGUNDA': [],
    'TERÇA': [],
    'QUARTA': [],
    'QUINTA': [],
    'SEXTA': [],
    'SÁBADO': []
  };

  for (const day of days) {
    const items: ScheduleItem[] = [];
    for (const danceClass of DANCE_CLASSES) {
      if (danceClass.active && danceClass.days.includes(day)) {
        items.push({
          time: danceClass.time,
          activity: danceClass.name,
          room: danceClass.room,
          age: danceClass.ageLabel,
          classId: danceClass.id
        });
      }
    }
    // Ordenar por horário crescente
    items.sort((a, b) => a.time.localeCompare(b.time));
    schedule[day] = items;
  }

  return schedule;
}

/**
 * Retorna as turmas de um dia específico.
 */
export function getScheduleForDay(day: DayOfWeek): ScheduleItem[] {
  return getWeeklySchedule()[day] || [];
}

/**
 * Busca uma turma específica pelo ID.
 */
export function getClassById(id: string): DanceClass | undefined {
  return DANCE_CLASSES.find(c => c.id === id);
}

export type ModalityId =
  | 'STREET_DANCE'
  | 'K_POP'
  | 'JAZZ_FUNK'
  | 'HEELS'
  | 'CONTEMPORANEO'
  | 'BALLET'
  | 'DANCA_SALAO'
  | 'RITMOS'
  | 'DANCAS_POPULARES'
  | 'TEATRO'
  | 'ACROBACIA'
  | 'MARTIAL_ARTS';

export type AgeCategory = 'KIDS' | 'JUNIOR' | 'TEEN' | 'ADULTO' | 'GERAL';
export type SkillLevel = 'INICIANTE' | 'INTERMEDIARIO' | 'AVANCADO' | 'ALL_LEVELS';
export type DayOfWeek = 'SEGUNDA' | 'TERÇA' | 'QUARTA' | 'QUINTA' | 'SEXTA' | 'SÁBADO';
export type DayPeriod = 'MANHÃ' | 'TARDE' | 'NOITE';
export type RoomName = 'XPERIENCE' | 'XLAB' | 'XCORE' | 'XTAGE';

export interface DanceClass {
  id: string;
  name: string;
  modality: ModalityId;
  category: AgeCategory;
  ageLabel?: string; // Ex: "ACIMA 5 +"
  minAge: number;
  maxAge: number;
  level: SkillLevel;
  levelLabel: string; // Ex: "Iniciante", "Geral", "Todos os níveis"
  days: DayOfWeek[];
  period: DayPeriod;
  time: string; // Ex: "19:00"
  room: RoomName;
  teacher?: string | null;
  active: boolean;
  acceptsTrial: boolean;
  description?: string;
}

export type ScheduleItem = {
  time: string;
  activity: string;
  room: string;
  age?: string;
  classId?: string;
  teacher?: string;
};

export type WeeklySchedule = {
  [day in DayOfWeek]: ScheduleItem[];
};

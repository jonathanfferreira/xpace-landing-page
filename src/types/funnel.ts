import { DanceClass, DayPeriod, DayOfWeek, ModalityId, SkillLevel } from './classes';

export type ExperienceLevel =
  | 'NUNCA_DANCEI'
  | 'INICIANTE'
  | 'INTERMEDIARIO'
  | 'AVANCADO';

export type DanceObjective =
  | 'DIVERSAO_E_SAUDE'
  | 'APRENDER_DO_ZERO'
  | 'TECNICA_E_EVOLUCAO'
  | 'PERFORMANCE_E_INTENSIDADE';

export interface FunnelPreferences {
  age: number;
  modalities?: (ModalityId | 'ALL')[];
  experience?: ExperienceLevel;
  periods?: DayPeriod[];
  days?: DayOfWeek[];
  objective?: DanceObjective;
}

export interface MatchedClass {
  classData: DanceClass;
  score: number;
  matchReasons: string[];
}

export interface MatchResult {
  matches: MatchedClass[];
  topRecommendations: DanceClass[];
  totalEligibleCount: number;
}

import { DANCE_CLASSES } from '../data/classes';
import { DanceClass } from '../types/classes';
import { FunnelPreferences, MatchedClass, MatchResult } from '../types/funnel';

/**
 * Matching Engine Determinístico da XPACE.
 * 
 * Regras Estritas (Hard Constraints):
 * 1. A turma DEVE estar ativa (active === true).
 * 2. A turma DEVE aceitar aula experimental (acceptsTrial === true).
 * 3. A idade do usuário DEVE estar dentro da faixa etária (minAge <= age <= maxAge).
 * 
 * Critérios de Ranking (Scoring):
 * - Preferência de Modalidade (+40)
 * - Compatibilidade de Período (+25)
 * - Compatibilidade de Dias da Semana (+20)
 * - Nível de Experiência (+15 a +30)
 * - Alinhamento com Objetivo (+15)
 */
export function matchClasses(
  preferences: FunnelPreferences,
  classList: DanceClass[] = DANCE_CLASSES,
  options: { requireTrial?: boolean; limit?: number } = {}
): MatchResult {
  const requireTrial = options.requireTrial ?? true;
  const limit = options.limit ?? 3;
  const userAge = preferences.age;

  if (typeof userAge !== 'number' || isNaN(userAge) || userAge < 1) {
    return { matches: [], topRecommendations: [], totalEligibleCount: 0 };
  }

  // 1. Filtragem Rígida (Hard Constraints)
  const eligibleClasses = classList.filter(item => {
    if (!item.active) return false;
    if (requireTrial && !item.acceptsTrial) return false;
    if (userAge < item.minAge || userAge > item.maxAge) return false;
    return true;
  });

  const wantsAllModalities = !preferences.modalities || preferences.modalities.length === 0 || preferences.modalities.includes('ALL');

  // 2. Pontuação e Ranking
  const scoredMatches: MatchedClass[] = eligibleClasses.map(item => {
    let score = 0;
    const matchReasons: string[] = [];

    // Modalidade (+40 ou +20 para todos)
    if (wantsAllModalities) {
      score += 20;
    } else if (preferences.modalities?.includes(item.modality)) {
      score += 40;
      matchReasons.push('Modalidade de seu interesse');
    }

    // Período (+25)
    if (preferences.periods && preferences.periods.length > 0) {
      if (preferences.periods.includes(item.period)) {
        score += 25;
        matchReasons.push(`Horário no período da ${item.period.toLowerCase()}`);
      }
    } else {
      score += 10;
    }

    // Dias da semana (+20)
    if (preferences.days && preferences.days.length > 0) {
      const hasDayMatch = item.days.some(d => preferences.days?.includes(d));
      if (hasDayMatch) {
        score += 20;
        matchReasons.push('Dias compatíveis com sua rotina');
      }
    }

    // Nível de Experiência
    const exp = preferences.experience;
    if (exp === 'NUNCA_DANCEI' || exp === 'INICIANTE') {
      if (item.level === 'INICIANTE') {
        score += 25;
        matchReasons.push('Ideal para quem está começando do zero');
      } else if (item.level === 'ALL_LEVELS') {
        score += 15;
        matchReasons.push('Turma aberta a todos os níveis');
      } else if (item.level === 'AVANCADO') {
        score -= 30; // penalização para evitar frustração de iniciante em turma avançada
      }
    } else if (exp === 'INTERMEDIARIO') {
      if (item.level === 'INTERMEDIARIO') {
        score += 25;
        matchReasons.push('Nível compatível com sua experiência');
      } else if (item.level === 'ALL_LEVELS') {
        score += 15;
      } else if (item.level === 'AVANCADO') {
        score += 10;
      }
    } else if (exp === 'AVANCADO') {
      if (item.level === 'AVANCADO') {
        score += 30;
        matchReasons.push('Desafio técnico avançado');
      } else if (item.level === 'INTERMEDIARIO') {
        score += 20;
      } else if (item.level === 'ALL_LEVELS') {
        score += 10;
      }
    }

    // Objetivo
    const obj = preferences.objective;
    if (obj === 'APRENDER_DO_ZERO') {
      if (item.level === 'INICIANTE') {
        score += 15;
        matchReasons.push('Foco no aprendizado progressivo');
      }
    } else if (obj === 'DIVERSAO_E_SAUDE') {
      if (['RITMOS', 'STREET_DANCE', 'DANCA_SALAO'].includes(item.modality)) {
        score += 15;
        matchReasons.push('Ótimo gasto calórico e descontração');
      }
    } else if (obj === 'TECNICA_E_EVOLUCAO') {
      if (['CONTEMPORANEO', 'BALLET', 'JAZZ_FUNK', 'HEELS'].includes(item.modality)) {
        score += 15;
        matchReasons.push('Foco em linhas corporais e técnica refinada');
      }
    } else if (obj === 'PERFORMANCE_E_INTENSIDADE') {
      if (['STREET_DANCE', 'JAZZ_FUNK', 'HEELS'].includes(item.modality)) {
        score += 15;
        matchReasons.push('Alta energia e musicalidade de palco');
      }
    }

    return {
      classData: item,
      score,
      matchReasons
    };
  });

  // 3. Ordenação Determinística
  scoredMatches.sort((a, b) => {
    // 1º critério: pontuação decrescente
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    // 2º critério: modalidade de dança principal prioritária
    const isDanceA = a.classData.modality !== 'MARTIAL_ARTS';
    const isDanceB = b.classData.modality !== 'MARTIAL_ARTS';
    if (isDanceA !== isDanceB) {
      return isDanceA ? -1 : 1;
    }
    // 3º critério: horário mais cedo
    if (a.classData.time !== b.classData.time) {
      return a.classData.time.localeCompare(b.classData.time);
    }
    // 4º critério: ID alfabético para garantir determinismo 100%
    return a.classData.id.localeCompare(b.classData.id);
  });

  const topRecommendations = scoredMatches.slice(0, limit).map(m => m.classData);

  return {
    matches: scoredMatches,
    topRecommendations,
    totalEligibleCount: eligibleClasses.length
  };
}

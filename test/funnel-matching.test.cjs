const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

// Import compiled classMatcher & catalog from test-dist
const { matchClasses } = require('../test-dist/services/classMatcher');
const { DANCE_CLASSES } = require('../test-dist/data/classes');

describe('XPACE Phase 3: Deterministic Class Matching Engine & Catalog Tests', () => {

  describe('Hard Constraints (Filtros Rígidos)', () => {
    it('excludes classes outside the user age range (Child 7 years)', () => {
      const result = matchClasses({ age: 7 });
      assert.ok(result.matches.length > 0, 'Should find classes for 7-year-old');
      for (const m of result.matches) {
        assert.ok(
          m.classData.minAge <= 7 && m.classData.maxAge >= 7,
          `Class ${m.classData.id} has invalid age range (${m.classData.minAge}-${m.classData.maxAge}) for age 7`
        );
      }
      // Ensure no Adult-only class is included
      const hasAdultOnly = result.matches.some(m => m.classData.category === 'ADULTO');
      assert.strictEqual(hasAdultOnly, false, 'Children must not match ADULTO classes');
    });

    it('excludes classes outside the user age range (Adult 25 years)', () => {
      const result = matchClasses({ age: 25 });
      assert.ok(result.matches.length > 0, 'Should find classes for 25-year-old');
      for (const m of result.matches) {
        assert.ok(
          m.classData.minAge <= 25 && m.classData.maxAge >= 25,
          `Class ${m.classData.id} has invalid age range (${m.classData.minAge}-${m.classData.maxAge}) for age 25`
        );
      }
      // Ensure no Kids class is included
      const hasKids = result.matches.some(m => m.classData.category === 'KIDS');
      assert.strictEqual(hasKids, false, 'Adults must not match KIDS classes');
    });

    it('excludes inactive classes (active === false)', () => {
      const mockClasses = [
        {
          id: 'active-class',
          name: 'Active Class',
          modality: 'STREET_DANCE',
          category: 'ADULTO',
          minAge: 14,
          maxAge: 99,
          level: 'ALL_LEVELS',
          levelLabel: 'Geral',
          days: ['SEGUNDA'],
          period: 'NOITE',
          time: '19:00',
          room: 'XPERIENCE',
          active: true,
          acceptsTrial: true
        },
        {
          id: 'inactive-class',
          name: 'Inactive Class',
          modality: 'STREET_DANCE',
          category: 'ADULTO',
          minAge: 14,
          maxAge: 99,
          level: 'ALL_LEVELS',
          levelLabel: 'Geral',
          days: ['SEGUNDA'],
          period: 'NOITE',
          time: '20:00',
          room: 'XPERIENCE',
          active: false,
          acceptsTrial: true
        }
      ];

      const result = matchClasses({ age: 20 }, mockClasses);
      assert.strictEqual(result.matches.length, 1);
      assert.strictEqual(result.matches[0].classData.id, 'active-class');
    });

    it('excludes classes that do not accept trial (acceptsTrial === false) by default', () => {
      // In central catalog, competition companies (e.g. Cia Heels) have acceptsTrial: false
      const result = matchClasses({ age: 22, modalities: ['HEELS'] });
      for (const m of result.matches) {
        assert.strictEqual(m.classData.acceptsTrial, true, `Class ${m.classData.id} should accept trial`);
        assert.ok(!m.classData.id.startsWith('cia-'), `Competition company ${m.classData.id} must not be in trial recommendations`);
      }
    });

    it('allows viewing non-trial classes when requireTrial option is false', () => {
      const resultWithTrialOnly = matchClasses({ age: 22 }, DANCE_CLASSES, { requireTrial: true });
      const resultWithAll = matchClasses({ age: 22 }, DANCE_CLASSES, { requireTrial: false });
      assert.ok(resultWithAll.matches.length >= resultWithTrialOnly.matches.length);
    });
  });

  describe('Scoring & Ranking (Critérios de Preferência)', () => {
    it('boosts classes matching user preferred modality', () => {
      const result = matchClasses({ age: 20, modalities: ['K_POP'] });
      assert.ok(result.topRecommendations.length > 0);
      assert.strictEqual(result.topRecommendations[0].modality, 'K_POP');
      assert.ok(result.matches[0].matchReasons.some(r => r.includes('Modalidade')));
    });

    it('boosts classes matching user preferred period (NOITE)', () => {
      const result = matchClasses({ age: 25, periods: ['NOITE'] });
      assert.ok(result.topRecommendations.length > 0);
      assert.strictEqual(result.topRecommendations[0].period, 'NOITE');
      assert.ok(result.matches[0].matchReasons.some(r => r.includes('noite')));
    });

    it('boosts classes matching user preferred days (SÁBADO)', () => {
      const result = matchClasses({ age: 25, days: ['SÁBADO'] });
      assert.ok(result.topRecommendations.length > 0);
      assert.ok(result.topRecommendations[0].days.includes('SÁBADO'));
    });

    it('appropriately scores beginner vs advanced levels', () => {
      const beginnerResult = matchClasses({ age: 20, experience: 'NUNCA_DANCEI' });
      // Top beginner recommendation should be INICIANTE or ALL_LEVELS, not AVANCADO
      assert.notStrictEqual(beginnerResult.topRecommendations[0].level, 'AVANCADO');

      const advancedResult = matchClasses({ age: 20, experience: 'AVANCADO' });
      assert.ok(advancedResult.topRecommendations.length > 0);
    });

    it('honors objective preference (APRENDER_DO_ZERO)', () => {
      const result = matchClasses({ age: 20, objective: 'APRENDER_DO_ZERO' });
      assert.ok(result.topRecommendations.length > 0);
      assert.ok(result.matches.some(m => m.matchReasons.some(r => r.includes('aprendizado'))));
    });
  });

  describe('Determinism & Output Format', () => {
    it('produces 100% deterministic results across multiple invocations', () => {
      const preferences = {
        age: 18,
        modalities: ['STREET_DANCE', 'JAZZ_FUNK'],
        experience: 'INICIANTE',
        periods: ['NOITE'],
        days: ['TERÇA', 'QUINTA'],
        objective: 'DIVERSAO_E_SAUDE'
      };

      const run1 = matchClasses(preferences);
      const run2 = matchClasses(preferences);
      const run3 = matchClasses(preferences);

      assert.deepStrictEqual(
        run1.topRecommendations.map(c => c.id),
        run2.topRecommendations.map(c => c.id)
      );
      assert.deepStrictEqual(
        run2.topRecommendations.map(c => c.id),
        run3.topRecommendations.map(c => c.id)
      );
      assert.deepStrictEqual(
        run1.matches.map(m => ({ id: m.classData.id, score: m.score })),
        run3.matches.map(m => ({ id: m.classData.id, score: m.score }))
      );
    });

    it('honors the custom recommendation limit', () => {
      const limit1 = matchClasses({ age: 20 }, DANCE_CLASSES, { limit: 1 });
      const limit5 = matchClasses({ age: 20 }, DANCE_CLASSES, { limit: 5 });
      assert.strictEqual(limit1.topRecommendations.length, 1);
      assert.strictEqual(limit5.topRecommendations.length, 5);
    });

    it('gracefully handles invalid age or empty preferences', () => {
      const invalidResult1 = matchClasses({ age: 0 });
      assert.strictEqual(invalidResult1.matches.length, 0);
      assert.strictEqual(invalidResult1.topRecommendations.length, 0);
      assert.strictEqual(invalidResult1.totalEligibleCount, 0);

      const invalidResult2 = matchClasses({ age: NaN });
      assert.strictEqual(invalidResult2.matches.length, 0);
    });
  });

  describe('Central Dance Class Catalog Integrity', () => {
    it('contains valid and consistent data for all active classes', () => {
      assert.ok(DANCE_CLASSES.length >= 40, `Catalog should have at least 40 classes, found ${DANCE_CLASSES.length}`);

      const validModalities = [
        'STREET_DANCE', 'K_POP', 'JAZZ_FUNK', 'HEELS', 'CONTEMPORANEO',
        'BALLET', 'DANCA_SALAO', 'RITMOS', 'DANCAS_POPULARES',
        'TEATRO', 'ACROBACIA', 'MARTIAL_ARTS'
      ];
      const validCategories = ['KIDS', 'JUNIOR', 'TEEN', 'ADULTO', 'GERAL'];
      const validLevels = ['INICIANTE', 'INTERMEDIARIO', 'AVANCADO', 'ALL_LEVELS'];
      const validPeriods = ['MANHÃ', 'TARDE', 'NOITE'];
      const validRooms = ['XPERIENCE', 'XLAB', 'XCORE', 'XTAGE'];

      const idSet = new Set();

      for (const item of DANCE_CLASSES) {
        // Unique IDs
        assert.ok(!idSet.has(item.id), `Duplicate class ID found: ${item.id}`);
        idSet.add(item.id);

        // Required non-empty string fields
        assert.ok(item.name && item.name.length > 2, `Invalid name for class ${item.id}`);
        assert.ok(validModalities.includes(item.modality), `Invalid modality ${item.modality} in ${item.id}`);
        assert.ok(validCategories.includes(item.category), `Invalid category ${item.category} in ${item.id}`);
        assert.ok(validLevels.includes(item.level), `Invalid level ${item.level} in ${item.id}`);
        assert.ok(validPeriods.includes(item.period), `Invalid period ${item.period} in ${item.id}`);
        assert.ok(validRooms.includes(item.room), `Invalid room ${item.room} in ${item.id}`);

        // Age bounds
        assert.ok(typeof item.minAge === 'number' && item.minAge >= 3, `minAge invalid in ${item.id}`);
        assert.ok(typeof item.maxAge === 'number' && item.maxAge <= 99, `maxAge invalid in ${item.id}`);
        assert.ok(item.minAge <= item.maxAge, `minAge > maxAge in ${item.id}`);

        // Time format HH:MM
        assert.match(item.time, /^\d{2}:\d{2}$/, `Time format must be HH:MM in ${item.id}`);

        // Days
        assert.ok(Array.isArray(item.days) && item.days.length > 0, `Days missing in ${item.id}`);

        // Trial acceptance
        assert.strictEqual(typeof item.acceptsTrial, 'boolean', `acceptsTrial must be boolean in ${item.id}`);
        assert.strictEqual(typeof item.active, 'boolean', `active must be boolean in ${item.id}`);
      }
    });
  });

});

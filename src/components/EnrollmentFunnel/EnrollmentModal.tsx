import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  Loader2, 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  Check, 
  MessageCircle, 
  RotateCcw,
  Compass
} from 'lucide-react';
import { useLeadSubmission } from '../../hooks/useLeadSubmission';
import { LeadPrivacyNotice } from '../LeadPrivacyNotice';
import { LeadHoneypot } from '../LeadHoneypot';
import { matchClasses } from '../../services/classMatcher';
import { ModalityId, DayPeriod, DayOfWeek } from '../../types/classes';
import { ExperienceLevel, DanceObjective, MatchResult } from '../../types/funnel';

export interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FunnelStep = 'age' | 'modality' | 'experience' | 'availability' | 'objective' | 'lead' | 'recommendations';

const TOTAL_STEPS = 6;

const STEP_NUMBERS: Record<FunnelStep, number> = {
  age: 1,
  modality: 2,
  experience: 3,
  availability: 4,
  objective: 5,
  lead: 6,
  recommendations: 6,
};

const NEXTFIT_URL = 'https://agendamento.nextfit.com.br/f9b1ea53-0e0e-4f98-9396-3dab7c9fbff4';
const WHATSAPP_NUMBER = '554791700812';

interface ModalityOption {
  id: string;
  label: string;
  description: string;
  modalities: (ModalityId | 'ALL')[];
  emoji: string;
}

const MODALITY_OPTIONS: ModalityOption[] = [
  {
    id: 'urban',
    label: 'Danças Urbanas',
    description: 'Hip Hop, Breaking, Popping & Freestyle',
    modalities: ['STREET_DANCE'],
    emoji: '🔥',
  },
  {
    id: 'kpop',
    label: 'K-Pop',
    description: 'Coreografias e cultura pop coreana',
    modalities: ['K_POP'],
    emoji: '⭐',
  },
  {
    id: 'commercial',
    label: 'Jazz Funk & Heels',
    description: 'Atitude, sensualidade e presença de palco',
    modalities: ['JAZZ_FUNK', 'HEELS'],
    emoji: '👠',
  },
  {
    id: 'artistic',
    label: 'Contemporâneo & Ballet',
    description: 'Expressão corporal, técnica clássica e linhas',
    modalities: ['CONTEMPORANEO', 'BALLET'],
    emoji: '✨',
  },
  {
    id: 'social',
    label: 'Ritmos & Salão',
    description: 'Dança a dois, forró, ritmos latinos e Fit Dance',
    modalities: ['RITMOS', 'DANCA_SALAO', 'DANCAS_POPULARES'],
    emoji: '💃',
  },
  {
    id: 'theatre_acro',
    label: 'Teatro & Acrobacia',
    description: 'Expressão cênica, flexibilidade e solo',
    modalities: ['TEATRO', 'ACROBACIA'],
    emoji: '🎭',
  },
  {
    id: 'martial',
    label: 'Artes Marciais',
    description: 'Muay Thai, Jiu-Jitsu e Capoeira',
    modalities: ['MARTIAL_ARTS'],
    emoji: '🥋',
  },
  {
    id: 'all',
    label: 'Explorar Todos os Estilos',
    description: 'Quero conhecer tudo que se encaixa na minha rotina',
    modalities: ['ALL'],
    emoji: '🌍',
  },
];

const EXPERIENCE_OPTIONS: { id: ExperienceLevel; title: string; subtitle: string }[] = [
  {
    id: 'NUNCA_DANCEI',
    title: 'Nunca dancei',
    subtitle: 'Quero começar do absoluto zero em um ambiente seguro e acolhedor.',
  },
  {
    id: 'INICIANTE',
    title: 'Iniciante',
    subtitle: 'Já dancei por lazer ou fiz poucas aulas e quero aprender a base sólida.',
  },
  {
    id: 'INTERMEDIARIO',
    title: 'Intermediário',
    subtitle: 'Já tenho ritmo e coordenação, busco coreografias mais desafiadoras.',
  },
  {
    id: 'AVANCADO',
    title: 'Avançado',
    subtitle: 'Busco técnica de alto nível, intensidade, velocidade e palco.',
  },
];

const OBJECTIVE_OPTIONS: { id: DanceObjective; title: string; subtitle: string; emoji: string }[] = [
  {
    id: 'DIVERSAO_E_SAUDE',
    title: 'Diversão, Saúde & Desestresse',
    subtitle: 'Cuidar do corpo e da mente, gastar energia e fazer amizades.',
    emoji: '🧘',
  },
  {
    id: 'APRENDER_DO_ZERO',
    title: 'Aprender do Zero com Método',
    subtitle: 'Dominar os fundamentos da dança passo a passo com didática.',
    emoji: '🌱',
  },
  {
    id: 'TECNICA_E_EVOLUCAO',
    title: 'Técnica Corporal & Postura',
    subtitle: 'Aprimorar linhas, consciência corporal e precisão de movimentos.',
    emoji: '🎯',
  },
  {
    id: 'PERFORMANCE_E_INTENSIDADE',
    title: 'Performance, Ritmo & Palco',
    subtitle: 'Viver a experiência de palco com coreografias impactantes.',
    emoji: '⚡',
  },
];

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<FunnelStep>('age');
  const [age, setAge] = useState<number | ''>('');
  const [selectedModalityGroups, setSelectedModalityGroups] = useState<string[]>([]);
  const [experience, setExperience] = useState<ExperienceLevel | undefined>();
  const [selectedPeriods, setSelectedPeriods] = useState<DayPeriod[]>([]);
  const [selectedDays, setSelectedDays] = useState<DayOfWeek[]>([]);
  const [objective, setObjective] = useState<DanceObjective | undefined>();

  // Lead capture state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [matchResult, setMatchResult] = useState<MatchResult | null>(null);

  const { submit, status, error, response } = useLeadSubmission();
  const isSubmitting = status === 'submitting';

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Compute matched classes dynamically when reaching recommendations
  const computeRecommendations = (): MatchResult => {
    const numericAge = typeof age === 'number' ? age : 20;
    
    // Flatten modalities from groups
    const modalities: (ModalityId | 'ALL')[] = [];
    if (selectedModalityGroups.includes('all') || selectedModalityGroups.length === 0) {
      modalities.push('ALL');
    } else {
      selectedModalityGroups.forEach(groupId => {
        const group = MODALITY_OPTIONS.find(g => g.id === groupId);
        if (group) {
          group.modalities.forEach(m => {
            if (!modalities.includes(m)) modalities.push(m);
          });
        }
      });
    }

    const result = matchClasses({
      age: numericAge,
      modalities,
      experience,
      periods: selectedPeriods.length > 0 ? selectedPeriods : undefined,
      days: selectedDays.length > 0 ? selectedDays : undefined,
      objective,
    });

    setMatchResult(result);
    return result;
  };

  const handlePhoneChange = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 11);
    let formatted = digits;
    if (digits.length > 2) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    if (digits.length > 7) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }
    setPhone(formatted);
  };

  const toggleModalityGroup = (groupId: string) => {
    if (groupId === 'all') {
      setSelectedModalityGroups(['all']);
      return;
    }
    setSelectedModalityGroups(prev => {
      const filtered = prev.filter(g => g !== 'all');
      if (filtered.includes(groupId)) {
        const remaining = filtered.filter(g => g !== groupId);
        return remaining.length === 0 ? ['all'] : remaining;
      } else {
        return [...filtered, groupId];
      }
    });
  };

  const togglePeriod = (period: DayPeriod) => {
    setSelectedPeriods(prev => 
      prev.includes(period) ? prev.filter(p => p !== period) : [...prev, period]
    );
  };

  const toggleSaturday = () => {
    setSelectedDays(prev => 
      prev.includes('SÁBADO') ? prev.filter(d => d !== 'SÁBADO') : [...prev, 'SÁBADO']
    );
  };

  const handleAgeSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (typeof age === 'number' && age >= 4 && age <= 99) {
      setStep('modality');
    }
  };

  const handleModalitySubmit = () => {
    if (selectedModalityGroups.length === 0) {
      setSelectedModalityGroups(['all']);
    }
    setStep('experience');
  };

  const handleExperienceSelect = (exp: ExperienceLevel) => {
    setExperience(exp);
    setStep('availability');
  };

  const handleAvailabilitySubmit = () => {
    setStep('objective');
  };

  const handleObjectiveSelect = (obj: DanceObjective) => {
    setObjective(obj);
    computeRecommendations();
    setStep('lead');
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = matchResult || computeRecommendations();
    const topIds = result.topRecommendations.map(c => c.id);

    const saved = await submit({
      leadType: 'QUIZ',
      name,
      phone,
      age: typeof age === 'number' ? age : undefined,
      preferredModalities: selectedModalityGroups,
      experience,
      availability: [
        ...selectedPeriods,
        ...(selectedDays.includes('SÁBADO') ? ['SÁBADO'] : []),
      ],
      objective,
      recommendedClassIds: topIds,
      intent: 'enrollment_funnel',
      website,
    });

    if (saved) {
      setStep('recommendations');
    }
  };

  const handleSkipLead = () => {
    computeRecommendations();
    setStep('recommendations');
  };

  const handleReset = () => {
    setStep('age');
    setAge('');
    setSelectedModalityGroups([]);
    setExperience(undefined);
    setSelectedPeriods([]);
    setSelectedDays([]);
    setObjective(undefined);
    setMatchResult(null);
  };

  const handleGoBack = () => {
    switch (step) {
      case 'modality':
        setStep('age');
        break;
      case 'experience':
        setStep('modality');
        break;
      case 'availability':
        setStep('experience');
        break;
      case 'objective':
        setStep('availability');
        break;
      case 'lead':
        setStep('objective');
        break;
      case 'recommendations':
        setStep('objective');
        break;
    }
  };

  const handleScheduleClick = () => {
    onClose();
    const el = document.getElementById('schedule');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  const currentStepNum = STEP_NUMBERS[step];
  const progressPercent = (currentStepNum / TOTAL_STEPS) * 100;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="funnel-title"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto glass-panel rounded-2xl border border-white/15 bg-[#0b0b10]/95 shadow-2xl text-left my-auto"
        >
          {/* Top Progress Bar */}
          <div className="sticky top-0 left-0 w-full h-1.5 bg-white/10 z-20">
            <motion.div
              className="h-full bg-gradient-to-r from-[--color-primary] via-[--color-secondary] to-[--color-accent]"
              animate={{ width: `${progressPercent}%` }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
            />
          </div>

          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              {step !== 'age' && step !== 'recommendations' && (
                <button
                  type="button"
                  onClick={handleGoBack}
                  className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Voltar para etapa anterior"
                >
                  <ArrowLeft size={20} />
                </button>
              )}
              <div>
                <span className="text-[10px] font-tech uppercase tracking-widest text-[--color-secondary] font-semibold">
                  {step === 'recommendations' ? 'Recomendações Personalizadas' : `Passo ${currentStepNum} de ${TOTAL_STEPS}`}
                </span>
                <h2 id="funnel-title" className="text-lg font-bold text-white leading-tight">
                  Encontre Sua Turma
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-white/50 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Fechar modal"
            >
              <X size={22} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8 space-y-6">

            {/* STEP 1: IDADE */}
            {step === 'age' && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Qual é a idade de quem vai dançar?
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Nossas turmas são organizadas por faixa etária (Kids, Teens e Adultos) para garantir uma dinâmica ideal de aprendizado e convivência.
                  </p>
                </div>

                {/* Quick Age Presets */}
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setAge(8)}
                    className={`p-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                      typeof age === 'number' && age >= 4 && age <= 11
                        ? 'border-[--color-secondary] bg-[--color-secondary]/20 text-white shadow-[0_0_15px_rgba(235,0,188,0.25)]'
                        : 'border-white/15 bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <span className="block text-base mb-1">👶</span>
                    Kids (4 a 11)
                  </button>

                  <button
                    type="button"
                    onClick={() => setAge(14)}
                    className={`p-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                      typeof age === 'number' && age >= 12 && age <= 16
                        ? 'border-[--color-secondary] bg-[--color-secondary]/20 text-white shadow-[0_0_15px_rgba(235,0,188,0.25)]'
                        : 'border-white/15 bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <span className="block text-base mb-1">⚡</span>
                    Teens (12 a 16)
                  </button>

                  <button
                    type="button"
                    onClick={() => setAge(22)}
                    className={`p-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                      typeof age === 'number' && age >= 17
                        ? 'border-[--color-secondary] bg-[--color-secondary]/20 text-white shadow-[0_0_15px_rgba(235,0,188,0.25)]'
                        : 'border-white/15 bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <span className="block text-base mb-1">🔥</span>
                    Adulto (17+)
                  </button>
                </div>

                {/* Exact Age Input */}
                <form onSubmit={handleAgeSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="age-input" className="block text-xs font-tech uppercase tracking-wider text-gray-400 mb-2">
                      Ou digite a idade exata
                    </label>
                    <div className="relative">
                      <input
                        id="age-input"
                        type="number"
                        min={4}
                        max={99}
                        inputMode="numeric"
                        placeholder="Ex: 18"
                        required
                        value={age}
                        onChange={e => {
                          const val = e.target.value;
                          setAge(val === '' ? '' : parseInt(val, 10));
                        }}
                        className="w-full bg-black/60 border border-white/20 rounded-xl p-4 text-white text-lg font-bold focus:border-[--color-primary] focus:outline-none placeholder:text-gray-600 transition-colors"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                        anos
                      </span>
                    </div>
                    {typeof age === 'number' && (age < 4 || age > 99) && (
                      <p className="text-red-400 text-xs mt-1">Por favor informe uma idade entre 4 e 99 anos.</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={typeof age !== 'number' || age < 4 || age > 99}
                    className="cyber-button w-full flex items-center justify-center gap-2 group disabled:opacity-40 disabled:pointer-events-none"
                  >
                    Continuar <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            )}

            {/* STEP 2: MODALIDADES */}
            {step === 'modality' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Quais estilos chamam sua atenção?
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Selecione um ou mais estilos para filtrarmos as melhores turmas ativas.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[46vh] overflow-y-auto pr-1">
                  {MODALITY_OPTIONS.map(opt => {
                    const isSelected = selectedModalityGroups.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleModalityGroup(opt.id)}
                        className={`text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'border-[--color-secondary] bg-[--color-secondary]/15 shadow-[0_0_15px_rgba(235,0,188,0.2)]'
                            : 'border-white/10 bg-white/5 hover:bg-white/10 text-gray-300'
                        }`}
                      >
                        <span className="text-xl shrink-0 mt-0.5">{opt.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className={`font-semibold text-sm ${isSelected ? 'text-white' : 'text-gray-200'}`}>
                              {opt.label}
                            </span>
                            {isSelected && <Check size={16} className="text-[--color-secondary] shrink-0" />}
                          </div>
                          <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{opt.description}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={handleModalitySubmit}
                  className="cyber-button w-full flex items-center justify-center gap-2 group"
                >
                  Continuar <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* STEP 3: EXPERIÊNCIA */}
            {step === 'experience' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Qual é a sua experiência com dança?
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Temos turmas acolhedoras para quem nunca deu um passo até núcleos de treino avançado.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {EXPERIENCE_OPTIONS.map(opt => {
                    const isSelected = experience === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleExperienceSelect(opt.id)}
                        className={`w-full text-left p-4 rounded-xl border transition-all group flex items-center justify-between ${
                          isSelected
                            ? 'border-[--color-secondary] bg-[--color-secondary]/20 shadow-[0_0_20px_rgba(235,0,188,0.25)]'
                            : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                        }`}
                      >
                        <div>
                          <h4 className="text-white font-semibold text-base">{opt.title}</h4>
                          <p className="text-xs text-gray-300 mt-1">{opt.subtitle}</p>
                        </div>
                        <ArrowRight size={18} className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: DISPONIBILIDADE */}
            {step === 'availability' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Quais turnos você prefere?
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Selecione os períodos viáveis na sua rotina. Pode escolher mais de um.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {(['MANHÃ', 'TARDE', 'NOITE'] as DayPeriod[]).map(period => {
                    const isSelected = selectedPeriods.includes(period);
                    const periodTime = period === 'MANHÃ' ? '08:00 - 11:30' : period === 'TARDE' ? '14:00 - 18:00' : '18:30 - 22:00';
                    return (
                      <button
                        key={period}
                        type="button"
                        onClick={() => togglePeriod(period)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'border-[--color-secondary] bg-[--color-secondary]/20 shadow-[0_0_15px_rgba(235,0,188,0.2)]'
                            : 'border-white/10 bg-white/5 hover:bg-white/10 text-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-white">{period}</span>
                          {isSelected && <Check size={16} className="text-[--color-secondary]" />}
                        </div>
                        <span className="text-xs text-gray-400">{periodTime}</span>
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    onClick={toggleSaturday}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedDays.includes('SÁBADO')
                        ? 'border-[--color-secondary] bg-[--color-secondary]/20 shadow-[0_0_15px_rgba(235,0,188,0.2)]'
                        : 'border-white/10 bg-white/5 hover:bg-white/10 text-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-white">SÁBADOS</span>
                      {selectedDays.includes('SÁBADO') && <Check size={16} className="text-[--color-secondary]" />}
                    </div>
                    <span className="text-xs text-gray-400">Aulas no fim de semana</span>
                  </button>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPeriods([]);
                      setSelectedDays([]);
                    }}
                    className="text-xs text-gray-400 hover:text-white underline transition-colors"
                  >
                    Qualquer horário funciona
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAvailabilitySubmit}
                  className="cyber-button w-full flex items-center justify-center gap-2 group"
                >
                  Continuar <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* STEP 5: OBJETIVO */}
            {step === 'objective' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Qual é o seu principal objetivo?
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Para indicarmos a turma com a metodologia e energia mais compatíveis.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {OBJECTIVE_OPTIONS.map(opt => {
                    const isSelected = objective === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleObjectiveSelect(opt.id)}
                        className={`w-full text-left p-4 rounded-xl border transition-all group flex items-start gap-3.5 ${
                          isSelected
                            ? 'border-[--color-secondary] bg-[--color-secondary]/20 shadow-[0_0_20px_rgba(235,0,188,0.25)]'
                            : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                        }`}
                      >
                        <span className="text-2xl shrink-0 mt-0.5">{opt.emoji}</span>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-base">{opt.title}</h4>
                          <p className="text-xs text-gray-300 mt-1">{opt.subtitle}</p>
                        </div>
                        <ArrowRight size={18} className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-2 mt-1" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 6: LEAD CAPTURE */}
            {step === 'lead' && (
              <div className="space-y-5 text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-tr from-[--color-primary] to-[--color-secondary] flex items-center justify-center shadow-[0_0_25px_rgba(235,0,188,0.4)]">
                  <Sparkles size={26} className="text-white" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Suas turmas foram calculadas! 🎯
                  </h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    Deixe seu nome e WhatsApp para desbloquear as opções recomendadas e receber o passo a passo para sua aula experimental.
                  </p>
                </div>

                <form onSubmit={handleSubmitLead} className="space-y-4 text-left">
                  <LeadHoneypot value={website} onChange={setWebsite} />

                  <fieldset disabled={isSubmitting} className="space-y-3">
                    <div>
                      <label htmlFor="lead-name" className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                        Seu Nome Completo
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        autoComplete="name"
                        required
                        minLength={2}
                        maxLength={100}
                        placeholder="Ex: Ana Silva"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full bg-black/60 border border-white/20 rounded-xl p-3.5 text-white focus:border-[--color-secondary] focus:outline-none placeholder:text-gray-600 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="lead-phone" className="block text-xs font-tech uppercase tracking-wider text-gray-300 mb-1">
                        Seu WhatsApp com DDD
                      </label>
                      <input
                        id="lead-phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        placeholder="(47) 99999-9999"
                        value={phone}
                        onChange={e => handlePhoneChange(e.target.value)}
                        className="w-full bg-black/60 border border-white/20 rounded-xl p-3.5 text-white focus:border-[--color-secondary] focus:outline-none placeholder:text-gray-600 transition-colors text-sm"
                      />
                    </div>

                    <LeadPrivacyNotice />

                    <button
                      type="submit"
                      disabled={isSubmitting || name.trim().length < 2 || phone.replace(/\D/g, '').length < 10}
                      className="cyber-button w-full flex items-center justify-center gap-2 disabled:opacity-40 disabled:pointer-events-none mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Calculando Turmas...</span>
                        </>
                      ) : (
                        <>
                          <span>Ver Minhas Turmas Recomendadas</span>
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </fieldset>

                  {error && (
                    <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-xl text-center">
                      <p role="alert" className="text-red-300 text-xs">{error}</p>
                    </div>
                  )}
                </form>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSkipLead}
                    className="text-xs text-gray-400 hover:text-white underline transition-colors"
                  >
                    Ver turmas recomendadas sem registrar contato
                  </button>
                </div>
              </div>
            )}

            {/* STEP 7: RECOMMENDATIONS */}
            {step === 'recommendations' && (
              <div className="space-y-6">
                <div className="text-center space-y-1">
                  <span className="text-xs font-tech uppercase tracking-widest text-[--color-secondary] font-semibold">
                    Resultado Oficial XPACE
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Turmas Perfeitas Para Você
                  </h3>
                  <p className="text-gray-300 text-xs max-w-md mx-auto">
                    Abaixo estão as turmas ativas com vaga para aula experimental que mais combinam com seu perfil.
                  </p>
                </div>

                {/* Class Recommendations Cards */}
                {matchResult && matchResult.topRecommendations.length > 0 ? (
                  <div className="space-y-4">
                    {matchResult.topRecommendations.map((cls, idx) => {
                      const matchInfo = matchResult.matches.find(m => m.classData.id === cls.id);
                      const whatsappText = encodeURIComponent(
                        `Olá! Encontrei a turma "${cls.name}" (${cls.days.join(', ')} às ${cls.time}) no site da XPACE e gostaria de tirar dúvidas e agendar minha aula experimental!`
                      );

                      return (
                        <div
                          key={cls.id}
                          className={`p-4 md:p-5 rounded-2xl border transition-all ${
                            idx === 0
                              ? 'border-[--color-secondary]/60 bg-[--color-secondary]/10 shadow-[0_0_25px_rgba(235,0,188,0.18)]'
                              : 'border-white/15 bg-white/5 hover:border-white/25'
                          }`}
                        >
                          {/* Card Header Badges */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              {idx === 0 && (
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[--color-secondary] text-white">
                                  Melhor Match
                                </span>
                              )}
                              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-gray-200">
                                {cls.category} {cls.ageLabel ? `(${cls.ageLabel})` : ''}
                              </span>
                              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-[--color-accent]">
                                {cls.levelLabel}
                              </span>
                            </div>

                            <span className="text-xs text-gray-400 flex items-center gap-1 font-mono">
                              <MapPin size={12} /> {cls.room}
                            </span>
                          </div>

                          {/* Class Title */}
                          <h4 className="text-lg md:text-xl font-bold text-white mb-1.5">
                            {cls.name}
                          </h4>

                          {/* Class Days & Time */}
                          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 mb-3">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={13} className="text-[--color-secondary]" />
                              {cls.days.join(' e ')}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock size={13} className="text-[--color-accent]" />
                              {cls.time} ({cls.period.toLowerCase()})
                            </span>
                          </div>

                          {/* Match Reasons */}
                          {matchInfo && matchInfo.matchReasons.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {matchInfo.matchReasons.slice(0, 2).map((reason, rIdx) => (
                                <span
                                  key={rIdx}
                                  className="text-[11px] text-gray-300 bg-black/40 px-2 py-0.5 rounded-md border border-white/10 flex items-center gap-1"
                                >
                                  <Sparkles size={10} className="text-[--color-secondary]" />
                                  {reason}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                            <a
                              href={NEXTFIT_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cyber-button text-center text-xs py-2.5 px-3 flex items-center justify-center gap-1.5 font-bold"
                            >
                              <span>Agendar Experimental</span>
                              <ArrowRight size={14} />
                            </a>

                            <a
                              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full text-center text-xs py-2.5 px-3 flex items-center justify-center gap-1.5 font-medium transition-colors"
                            >
                              <MessageCircle size={14} className="text-[#25D366]" />
                              <span>Falar no WhatsApp</span>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* Zero Match State */
                  <div className="p-6 rounded-2xl border border-white/15 bg-white/5 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto text-xl">
                      🔍
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-white font-bold text-lg">Nenhuma turma exata encontrada com esses filtros</h4>
                      <p className="text-gray-300 text-xs leading-relaxed max-w-sm mx-auto">
                        Temos turmas ativas para todas as idades. Nossa equipe pode orientar você para a melhor opção personalizada.
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Fiz o teste no site da XPACE e gostaria de ajuda para encontrar a turma ideal para meu perfil.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button inline-flex items-center justify-center gap-2 text-xs py-3 px-6"
                    >
                      <MessageCircle size={15} />
                      <span>Falar com Atendimento no WhatsApp</span>
                    </a>
                  </div>
                )}

                {/* Footer Controls */}
                <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <button
                    type="button"
                    onClick={handleScheduleClick}
                    className="text-gray-300 hover:text-white flex items-center gap-1.5 underline underline-offset-4"
                  >
                    <Compass size={14} />
                    Ver grade horária completa da escola
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <RotateCcw size={14} />
                    Refazer busca com outros filtros
                  </button>
                </div>

                {response?.persisted && (
                  <p role="status" className="text-[11px] text-gray-400 text-center">
                    {response.messaging.user === 'SENT'
                      ? '✓ Contato registrado com sucesso. Enviamos os detalhes para seu WhatsApp.'
                      : '✓ Contato registrado com sucesso na coordenação XPACE.'}
                  </p>
                )}
              </div>
            )}

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

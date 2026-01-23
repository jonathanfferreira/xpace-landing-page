import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUESTIONS, RESULTS } from '../../data/quizData';
import { X, ArrowRight, Check, Loader2 } from 'lucide-react';

interface QuizModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState<'intro' | 'question' | 'lead' | 'result'>('intro');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState<Record<string, number>>({});
    const [leadData, setLeadData] = useState({ name: '', phone: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [finalResult, setFinalResult] = useState<string>('');

    const handleStart = () => setStep('question');

    const handleAnswer = (points: Record<string, number>) => {
        // Accumulate points
        const newScores = { ...scores };
        Object.entries(points).forEach(([key, value]) => {
            newScores[key] = (newScores[key] || 0) + value;
        });
        setScores(newScores);

        // Next question or Finish
        if (currentQuestionIndex < QUESTIONS.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            calculateResult(newScores);
            setStep('lead');
        }
    };

    const calculateResult = (finalScores: Record<string, number>) => {
        const winner = Object.entries(finalScores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
        setFinalResult(winner);
    };

    const formatPhone = (value: string) => {
        // Simple mask logic for (DD) 9XXXX-XXXX
        return value
            .replace(/\D/g, '')
            .replace(/^(\d{2})(\d)/g, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .substr(0, 15);
    };

    const handleSubmitLead = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send to API
            await fetch('http://localhost:3000/api/quiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: leadData.name,
                    phone: leadData.phone,
                    result: RESULTS[finalResult]?.title || finalResult,
                    answers: scores
                }),
            });
            // Always succeed to user perception
        } catch (err) {
            console.error("Quiz submission error", err);
        }

        setIsSubmitting(false);
        setStep('result');
    };

    // --- RENDERS ---

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative w-full max-w-lg overflow-hidden glass-panel rounded-2xl"
                >
                    {/* Close Button */}
                    <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10">
                        <X size={24} />
                    </button>

                    {/* PROGRESS BAR */}
                    {step === 'question' && (
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
                            <motion.div
                                className="h-full bg-gradient-to-r from-[--color-secondary] to-[--color-accent]"
                                animate={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
                            />
                        </div>
                    )}

                    <div className="p-8 md:p-10 min-h-[400px] flex flex-col justify-center">

                        {/* 1. INTRO */}
                        {step === 'intro' && (
                            <div className="text-center space-y-6">
                                <div className="mx-auto w-20 h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(235,0,188,0.3)]">
                                    <span className="text-4xl">🔮</span>
                                </div>
                                <h2 className="text-3xl font-display font-bold text-white">Descubra Seu Estilo</h2>
                                <p className="text-gray-300 font-light">
                                    Responda 3 perguntas rápidas e nossa inteligência vai te dizer qual modalidade da XPACE é sua alma gêmea.
                                </p>
                                <button
                                    onClick={handleStart}
                                    className="cyber-button w-full flex items-center justify-center gap-2 group"
                                >
                                    Começar Quiz <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        )}

                        {/* 2. QUESTIONS */}
                        {step === 'question' && (
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    <span className="text-[--color-accent] text-sm block mb-1 font-tech tracking-widest">PERGUNTA {currentQuestionIndex + 1}/{QUESTIONS.length}</span>
                                    {QUESTIONS[currentQuestionIndex].question}
                                </h3>

                                <div className="grid gap-3">
                                    {QUESTIONS[currentQuestionIndex].options.map((opt) => (
                                        <button
                                            key={opt.id}
                                            onClick={() => handleAnswer(opt.points)}
                                            className="w-full text-left p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[--color-secondary] transition-all duration-300 group"
                                        >
                                            <span className="text-gray-200 group-hover:text-white font-medium">{opt.text}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 3. LEAD CAPTURE */}
                        {step === 'lead' && (
                            <div className="text-center space-y-6">
                                <h2 className="text-2xl font-bold text-white">Quase lá! ✨</h2>
                                <p className="text-gray-300 text-sm">
                                    Seu resultado já foi calculado. Digite seu WhatsApp para receber o resultado e desbloquear um presente especial.
                                </p>

                                <form onSubmit={handleSubmitLead} className="space-y-4">
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            placeholder="Seu Nome"
                                            required
                                            className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-[--color-primary] focus:outline-none placeholder:text-gray-600"
                                            value={leadData.name}
                                            onChange={e => setLeadData({ ...leadData, name: e.target.value })}
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Seu WhatsApp (com DDD)"
                                            required
                                            className="w-full bg-black/50 border border-white/20 rounded-lg p-3 text-white focus:border-[--color-primary] focus:outline-none placeholder:text-gray-600"
                                            value={leadData.phone}
                                            onChange={e => setLeadData({ ...leadData, phone: formatPhone(e.target.value) })}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="cyber-button w-full flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? <Loader2 className="animate-spin" /> : 'Ver Resultado'}
                                    </button>
                                </form>
                            </div>
                        )}

                        {/* 4. RESULT */}
                        {step === 'result' && finalResult && (
                            <div className="text-center space-y-6">
                                <div className="text-sm font-tech text-[--color-secondary] tracking-widest uppercase">Seu Match Perfeito é</div>
                                <h2 className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[--color-primary] to-[--color-accent]">
                                    {RESULTS[finalResult].title}
                                </h2>
                                <p className="text-gray-200 leading-relaxed">
                                    {RESULTS[finalResult].description}
                                </p>

                                <div className="pt-4 space-y-3">
                                    <a
                                        href="https://agendamento.nextfit.com.br/f9b1ea53-0e0e-4f98-9396-3dab7c9fbff4"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="cyber-button w-full block text-center"
                                    >
                                        Agendar Aula Agora
                                    </a>
                                    <p className="text-xs text-gray-500">
                                        *Também te mandamos esse resultado no WhatsApp! 📱
                                    </p>
                                </div>
                            </div>
                        )}

                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

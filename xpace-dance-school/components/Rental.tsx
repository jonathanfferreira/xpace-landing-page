import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        title: "SISTEMA DE SOM",
        description: "Alta fidelidade e potência para sentir cada beat.",
        icon: "volume_up",
        color: "primary"
    },
    {
        title: "CLIMATIZAÇÃO",
        description: "Salas 100% climatizadas para ensaios intensos.",
        icon: "ac_unit",
        color: "secondary"
    },
    {
        title: "ILUMINAÇÃO TECH",
        description: "Cenários dinâmicos com LED para seus Reels e vídeos.",
        icon: "lightbulb",
        color: "primary"
    },
    {
        title: "WI-FI ALTA VELOCIDADE",
        description: "Conexão estável para suas lives e postagens.",
        icon: "wifi",
        color: "tertiary"
    }
];

export const Rental: React.FC = () => {
    return (
        <section id="rental" className="relative py-24 bg-surface-light dark:bg-surface-dark overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10 animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="font-tech text-primary tracking-widest text-sm mb-4">LOCAÇÃO DE ESTÚDIOS</h4>
                        <h2 className="font-display font-black text-6xl md:text-8xl tracking-tighter leading-[0.9] mb-8 uppercase">
                            SALAS PARA <span className="text-gradient">ENSAIOS</span>
                        </h2>

                        <div className="space-y-6 mb-10">
                            <p className="text-gray-600 dark:text-gray-400 font-bold leading-relaxed">
                                Precisa de um espaço profissional em Joinville? Nossas salas estão disponíveis para ensaios individuais, grupos e produções de vídeo durante todo o ano.
                            </p>

                            <div className="bg-white/50 dark:bg-white/5 border border-primary/20 p-6 rounded-xl backdrop-blur-sm">
                                <h5 className="font-tech text-secondary tracking-widest mb-2">INFRAESTRUTURA COMPLETA</h5>
                                <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase">
                                    Pacotes exclusivos de ensaios durante todo o ano. Garanta seu horário com antecedência!
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4 items-start"
                                >
                                    <span className={`material-symbols-outlined text-${feature.color} text-2xl`}>
                                        {feature.icon}
                                    </span>
                                    <div>
                                        <h6 className="font-tech text-sm tracking-widest leading-none mb-1">{feature.title}</h6>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <a
                                href="https://wa.me/554791700812?text=Olá! Gostaria de saber mais sobre o aluguel de salas na XPACE."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-tech tracking-widest rounded-full hover:bg-primary/80 transition-all group overflow-hidden relative"
                            >
                                <span className="relative z-10">CONSULTAR DISPONIBILIDADE</span>
                                <span className="material-symbols-outlined text-sm relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop"
                                alt="Studio de Dança XPACE"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 brightness-75 hover:brightness-100"
                            />

                            {/* Overlay Info */}
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="font-tech text-sm tracking-widest text-primary mb-1">XPACE STUDIOS</p>
                                        <p className="font-display font-bold text-2xl text-white">INFRAESTRUTURA DE ELITE</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                                        <span className="text-[10px] font-bold tracking-widest text-white">LIVE BOOKING</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Decoration */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-primary/30 rounded-bl-3xl"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

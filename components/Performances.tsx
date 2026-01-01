import React from 'react';
import { motion } from 'framer-motion';
import { Play, Trophy, Star, ExternalLink } from 'lucide-react';

const performances = [
    {
        title: "Avançado - Festival de Julho",
        description: "Único grupo de Danças Urbanas de Joinville a conquistar dois 2º lugares na categoria Avançado em 2025.",
        youtubeId: "TipBGmO_PzY",
        achievement: "DUPLO 2º LUGAR",
        category: "AVANÇADO",
        color: "#ff5200"
    },
    {
        title: "Junior Crew HHI 2025",
        description: "Performance no Hip Hop International Brasil, demonstrando a força e o talento da nossa base.",
        youtubeId: "wGzmnBXzcUs",
        achievement: "FINALISTA HHI",
        category: "JÚNIOR",
        color: "#eb00bc"
    },
    {
        title: "Mini Crew HHI 2025",
        description: "Conquista do 2º lugar na seletiva nacional do Hip Hop International Brasil em Santos. Classificação histórica para a equipe.",
        youtubeId: "cyFQmBLISr4",
        achievement: "2º LUGAR NACIONAL",
        category: "MINI CREW",
        color: "#7f00ff"
    }
];

export const Performances: React.FC = () => {
    return (
        <section id="performances" className="py-32 bg-black text-white relative overflow-hidden">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/20 via-transparent to-black"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <span className="font-tech text-primary tracking-widest uppercase mb-4 block flex items-center gap-2">
                            <Star className="w-4 h-4 fill-primary" /> Cinema XPACE // Live Records
                        </span>
                        <h2 className="font-display text-5xl md:text-8xl font-black mb-6 leading-none">
                            MOVIMENTO <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-cyber-pink italic pr-4">
                                EM FOCO
                            </span>
                        </h2>
                        <p className="font-body text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
                            Assista às performances que definiram nossa trajetória em 2025. Onde a técnica encontra a paixão no palco.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="hidden lg:block border border-white/10 p-4 rounded-2xl bg-white/5 backdrop-blur-md"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                <Trophy className="text-primary w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-tech text-xs text-gray-400">STATUS ATUAL</p>
                                <p className="font-display font-bold text-lg">LEVEL: CINEDANCE</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Video Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {performances.map((perf, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <div className="relative aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_50px_rgba(127,0,255,0.2)]">

                                {/* Youtube Thumbnail / Placeholder */}
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{
                                    backgroundImage: `url(https://img.youtube.com/vi/${perf.youtubeId}/hqdefault.jpg)`
                                }}>
                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="mb-4">
                                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full font-tech text-xs tracking-widest">
                                            {perf.category}
                                        </span>
                                    </div>

                                    <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {perf.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-primary font-tech tracking-widest text-sm mb-4">
                                        <Trophy className="w-4 h-4" /> {perf.achievement}
                                    </div>

                                    {/* Play Button Overlay */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                                        <a
                                            href={`https://www.youtube.com/watch?v=${perf.youtubeId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-neon hover:scale-110 transition-transform active:scale-95"
                                        >
                                            <Play className="fill-white text-white w-8 h-8 ml-1" />
                                        </a>
                                    </div>

                                    {/* Description (reveals on hover in desktop) */}
                                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                                        <p className="font-body text-sm text-gray-400 mt-2">
                                            {perf.description}
                                        </p>
                                    </div>
                                </div>

                                {/* External Link Top Right */}
                                <a
                                    href={`https://www.youtube.com/watch?v=${perf.youtubeId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.1 }}
                    className="absolute -bottom-10 -right-20 pointer-events-none select-none"
                >
                    <h4 className="font-display text-[15rem] font-black italic whitespace-nowrap">XPACE RECORDS</h4>
                </motion.div>
            </div>
        </section>
    );
};

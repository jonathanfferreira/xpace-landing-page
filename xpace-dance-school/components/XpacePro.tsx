import React from 'react';

export const XpacePro: React.FC = () => {
    return (
        <section id="xpace-pro" className="py-32 bg-background-light dark:bg-background-dark relative overflow-hidden transition-colors duration-500">

            {/* Background Texture & overlaid gradient */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/xpace-pro/tape-texture.png"
                    alt="Texture"
                    className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block border border-[#FFD700] bg-black/50 backdrop-blur-md px-4 py-1 rounded-full mb-6">
                        <span className="text-[#FFD700] font-tech text-xs tracking-[0.2em] font-bold uppercase">Novo Programa</span>
                    </div>
                    <h2 className="font-display text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
                        XPACE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#00FF00]">PRO</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 font-body text-lg">
                        A incubadora de talentos da XPACE. Projetos exclusivos desenvolvidos pela escola para elevar o nível da dança profissional.
                    </p>
                </div>

                {/* Featured Project Card: VYBZ */}
                <div className="relative bg-neutral-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm group hover:border-[#00FF00]/30 transition-colors duration-500">

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Left: Image / Visuals */}
                        <div className="relative h-[600px] lg:h-auto overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 lg:bg-gradient-to-r"></div>
                            <img
                                src="/images/xpace-pro/lucas-maciel.png"
                                alt="Lucas Maciel"
                                className="absolute inset-0 w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                            />

                            {/* Floating Badge */}
                            <div className="absolute top-8 left-8 z-20 bg-[#00FF00] text-black font-black font-tech text-sm px-3 py-1 -rotate-2 shadow-neon">
                                PROJETO #01
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">

                            <div className="mb-6">
                                <img
                                    src="/images/xpace-pro/logo-vybz.png"
                                    alt="VYBZ Logo"
                                    className="h-32 w-auto object-contain mb-8 filter drop-shadow-[0_0_15px_rgba(0,255,0,0.3)]"
                                />

                                <div className="flex flex-wrap gap-4 mb-8">
                                    <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                                        <span className="block text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Direção</span>
                                        <span className="text-white font-display font-bold text-xl">LUCAS MACIEL</span>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                                        <span className="block text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Estilo</span>
                                        <span className="text-[#00FF00] font-display font-bold text-xl">DANCEHALL</span>
                                    </div>
                                </div>

                                <p className="text-gray-300 font-body text-lg leading-relaxed mb-8 border-l-4 border-[#FFD700] pl-6">
                                    Uma imersão profunda na cultura jamaicana. VYBZ não é apenas uma coreografia, é estudo, técnica e vivência. O projeto explora a essência do Dancehall com uma abordagem contemporânea e profissional.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="bg-[#00FF00] text-black font-tech font-black text-lg py-4 px-8 rounded-xl hover:bg-white transition-colors duration-300 tracking-widest uppercase flex items-center justify-center gap-2 group/btn">
                                        <span>Ver Detalhes do Projeto</span>
                                        <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute bottom-4 right-4 text-xs font-mono text-gray-700 opacity-50">
                                ID: XP-PRO-001 // SYSTEM: ACTIVE
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

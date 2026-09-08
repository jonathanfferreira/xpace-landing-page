import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Two-column Hero Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

                    {/* Image Grid with Subtle Apple Framing */}
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-10">
                                <div className="rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg">
                                    <img src="/images/gallery/IMG_4858.JPG" alt="XPACE Studio Joinville" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg">
                                    <img src="/images/gallery/IMG_8693.JPG" alt="XPACE Aulas de Dança" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg">
                                    <img src="/images/gallery/IMG_4864.JPG" alt="XPACE Performance no Palco" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg">
                                    <img src="/images/gallery/IMG_4860.JPG" alt="Comunidade XPACE" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trajectory Narrative */}
                    <div>
                        <div className="pill-badge mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            <span>Nossa Trajetória & Liderança</span>
                        </div>

                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter uppercase text-text-main-light dark:text-text-main-dark">
                            XPACE: Onde a técnica encontra a paixão e o <span className="text-gradient inline-block">talento vira história.</span>
                        </h2>

                        <div className="space-y-5 text-gray-600 dark:text-gray-300 font-body text-base leading-relaxed">
                            <p>
                                Fundada em <strong>março de 2023</strong> em Joinville, a <strong>XPACE</strong> transformou-se em tempo recorde na maior potência das danças urbanas e dança contemporânea do Norte de Santa Catarina. O que nasceu do amor pela arte do movimento tornou-se referência em acolhimento, método pedagógico e formação artística.
                            </p>
                            <p>
                                A consolidação do nosso modelo de excelência foi impulsionada pela sociedade entre <strong>Jhonney</strong>, <strong>Alceu de Miranda Junior</strong> e <strong>Tayonara Cristina</strong>. Essa liderança trouxe resultados expressivos, incluindo a conquista de vaga como <strong>Seleção Brasileira no Hip Hop Unite</strong> e premiações em palcos de prestígio como o <strong>Festival de Dança de Joinville</strong> e o <strong>FIH2</strong>.
                            </p>
                            <p>
                                Hoje, a XPACE abriga mais de 1.200 alunos transformados, 4 salas de padrão profissional e um ecossistema que une a <strong>Escola Regular</strong> ao núcleo de alta performance <strong>XPACE Dance Company</strong>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Directors Bento Grid */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-text-main-light dark:text-text-main-dark">
                            Diretoria <span className="text-primary">& Sociedade</span>
                        </h3>
                        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-2">
                            Inovação Artística, Rigor Administrativo e Sustentabilidade Econômica
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        
                        {/* Alceu */}
                        <div className="bento-card p-8 group">
                            <div className="mb-6">
                                <span className="text-xs font-mono text-primary font-bold tracking-widest uppercase block mb-1">
                                    Diretor Financeiro
                                </span>
                                <h4 className="font-display text-2xl font-black uppercase text-text-main-light dark:text-text-main-dark">
                                    Alceu de Miranda Junior
                                </h4>
                            </div>
                            <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                O alicerce estratégico da escola. Comanda o planejamento orçamentário, a governança e os investimentos na infraestrutura de padrão internacional da XPACE.
                            </p>
                        </div>

                        {/* Tayonara */}
                        <div className="bento-card p-8 group border-t-2 border-t-cyber-pink">
                            <div className="mb-6">
                                <span className="text-xs font-mono text-cyber-pink font-bold tracking-widest uppercase block mb-1">
                                    Diretora Administrativa
                                </span>
                                <h4 className="font-display text-2xl font-black uppercase text-text-main-light dark:text-text-main-dark">
                                    Tayonara Cristina
                                </h4>
                            </div>
                            <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                Sócia e gestora das operações escolares. Lidera a administração diária, coordenação de turmas e atendimento aos alunos e famílias com foco em calor humano e eficiência.
                            </p>
                        </div>

                        {/* Jhonney */}
                        <div className="bento-card p-8 group border-t-2 border-t-secondary">
                            <div className="mb-6">
                                <span className="text-xs font-mono text-secondary font-bold tracking-widest uppercase block mb-1">
                                    Diretor Artístico
                                </span>
                                <h4 className="font-display text-2xl font-black uppercase text-text-main-light dark:text-text-main-dark">
                                    Jhonney
                                </h4>
                            </div>
                            <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                A alma criativa da organização. Comanda o desenvolvimento pedagógico, coreografias autorais premiadas em festivais mundiais, roteirização de espetáculos e orientação do corpo docente.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

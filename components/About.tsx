import React from 'react';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Grid */}
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <img src="/images/gallery/IMG_4858.JPG" alt="XPACE Studio" className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500" />
                                <img src="/images/gallery/IMG_8693.JPG" alt="XPACE Class" className="rounded-2xl shadow-xl w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-500" />
                            </div>
                            <div className="space-y-4">
                                <img src="/images/gallery/IMG_4864.JPG" alt="XPACE Performance" className="rounded-2xl shadow-xl w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-500" />
                                <img src="/images/gallery/IMG_4860.JPG" alt="XPACE Community" className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500" />
                            </div>
                        </div>
                    </div>

                    {/* History Content */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-8 bg-primary"></span>
                            <span className="font-tech text-primary tracking-widest font-bold uppercase">Nossa Trajetória</span>
                        </div>

                        <h2 className="font-display text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">
                            XPACE: ONDE A TÉCNICA ENCONTRA A PAIXÃO E O <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyber-pink">TALENTO VIRA HISTÓRIA.</span>
                        </h2>

                        <div className="space-y-6 text-gray-600 dark:text-gray-300 font-body text-sm md:text-base leading-relaxed text-justify">
                            <p>
                                A história da <strong>XPACE</strong> é marcada por uma ascensão meteórica. O que começou em <strong>2023</strong> como um projeto artístico fundado por <strong>Ruan Amorim</strong>, transformou-se em tempo recorde na maior potência das danças urbanas da região.
                            </p>
                            <p>
                                A grande virada de chave ocorreu em <strong>setembro de 2024</strong>, com a chegada dos sócios <strong>Jhonney</strong> e <strong>Alceu de Miranda Junior</strong>. Essa união trouxe uma explosão de resultados, garantindo já em outubro a prestigiada vaga como <strong>Seleção Brasileira no Hip Hop Unite</strong>.
                            </p>
                            <p>
                                Em <strong>2025</strong>, consolidamos nossa expansão, saltando de 60 para mais de 110 alunos e estruturando a escola em dois pilares fundamentais: <strong>XPACE Escola de Dança</strong> (ensino e formação) e <strong>XPACE Dance Company</strong> (alta performance).
                            </p>
                        </div>
                    </div>
                </div>

                {/* Directors Section */}
                <div className="mt-20">
                    <h3 className="font-display text-center text-3xl font-black mb-12 uppercase text-text-main-light dark:text-text-main-dark">Liderança <span className="text-primary">Visionária</span></h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Alceu */}
                        <div className="bg-white dark:bg-black p-8 rounded-3xl border border-gray-200 dark:border-gray-800 hover:border-cyber-pink transition-colors duration-300 group">
                            <div className="mb-6">
                                <h4 className="font-display text-2xl font-black uppercase mb-1">Alceu de Miranda Jr</h4>
                                <p className="font-tech text-xs text-cyber-pink font-bold tracking-widest uppercase">Gestão Financeira</p>
                            </div>
                            <p className="font-body text-sm text-gray-500 leading-relaxed">
                                O alicerce da organização. Comanda toda a administração financeira e gestão interna, garantindo a sustentabilidade e organização do negócio.
                            </p>
                        </div>

                        {/* Jhonney */}
                        <div className="bg-white dark:bg-black p-8 rounded-3xl border border-gray-200 dark:border-gray-800 hover:border-secondary transition-colors duration-300 group">
                            <div className="mb-6">
                                <h4 className="font-display text-2xl font-black uppercase mb-1">Jhonney</h4>
                                <p className="font-tech text-xs text-secondary font-bold tracking-widest uppercase">Direção Artística</p>
                            </div>
                            <p className="font-body text-sm text-gray-500 leading-relaxed">
                                A alma criativa da escola. Gerencia a direção artística completa, cria coreografias premiadas, roteiriza espetáculos e gere o corpo docente.
                            </p>
                        </div>

                        {/* Ruan */}
                        <div className="bg-white dark:bg-black p-8 rounded-3xl border border-gray-200 dark:border-gray-800 hover:border-primary transition-colors duration-300 group">
                            <div className="mb-6">
                                <h4 className="font-display text-2xl font-black uppercase mb-1">Ruan Amorim</h4>
                                <p className="font-tech text-xs text-primary font-bold tracking-widest uppercase">Administrativo e Projetos</p>
                            </div>
                            <p className="font-body text-sm text-gray-500 leading-relaxed">
                                Responsável pela visão macro e direção coreográfica. Busca novas parcerias e garante que a escola esteja sempre inovando e conectada com o mercado.
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

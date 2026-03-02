import React from 'react';
import { motion } from 'framer-motion';

export const Location: React.FC = () => {
    return (
        <section id="location" className="relative py-24 bg-background-light dark:bg-background-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display font-black text-6xl md:text-8xl tracking-tighter leading-none mb-4 uppercase">
                            NOSSA <span className="text-gradient">LOCALIZAÇÃO</span>
                        </h2>
                        <p className="text-gray-500 dark:text-text-muted-dark font-bold tracking-widest text-sm uppercase">
                            VISITE NOSSO ESPAÇO NO CORAÇÃO DE JOINVILLE
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl group"
                >
                    {/* Glassmorphism Border Effect */}
                    <div className="absolute inset-0 border-[1px] border-white/10 pointer-events-none z-10 rounded-2xl"></div>

                    {/* Map Iframe */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.471549495088!2d-48.84877392396347!3d-26.31139147701168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deaf584218374d%3A0x6b8015579b29c071!2sR.%20Tijucas%2C%20401%20-%20Centro%2C%20Joinville%20-%20SC%2C%2089204-020!5e0!3m2!1spt-BR!2sbr!4v1704225000000!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="XPACE Location"
                        className="grayscale hover:grayscale-0 transition-all duration-700 brightness-90 dark:brightness-100"
                    ></iframe>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-primary/20 blur-[80px] pointer-events-none"></div>
                    <div className="absolute -top-1 -left-1 w-32 h-32 bg-cyber-pink/20 blur-[80px] pointer-events-none"></div>
                </motion.div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-2">
                        <span className="font-tech text-primary tracking-widest text-xs">ENDEREÇO</span>
                        <p className="font-bold text-lg">Rua Tijucas, 401 - Centro, Joinville - SC</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-tech text-secondary tracking-widest text-xs">HORÁRIOS</span>
                        <p className="font-bold text-lg">Segunda a Sexta: 08h às 22h</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-tech text-cyber-pink tracking-widest text-xs">SÁBADOS</span>
                        <p className="font-bold text-lg">09h às 12h30<br/>Workshops e Aulas Especiais</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

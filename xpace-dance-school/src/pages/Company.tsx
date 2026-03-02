import React from 'react';
import { CustomCursor } from '../../components/CustomCursor';
import { CompanyNavbar } from '../../components/CompanyNavbar';
import { CompanyHero } from '../../components/CompanyHero';
import { Performances } from '../../components/Performances';
import { Awards } from '../../components/Awards';
import { Gallery } from '../../components/Gallery';
import { Footer } from '../../components/Footer';
import { InstagramFeed } from '../../components/InstagramFeed';
import { SEO } from '../../components/SEO';

export const Company: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <SEO 
        title="XPACE Dance Company | A Elite" 
        description="A XPACE Dance Company é o ápice da nossa escola. Formada por bailarinos selecionados, representa a marca nos maiores festivais e competições."
        keywords="dance company, companhia de dança, competições de dança, xpace, joinville"
      />
      <CustomCursor />
      
      {/* Global Background Image (2026 Identity - Dark Mode Only) */}
      <div className="fixed inset-0 pointer-events-none z-[-1] hidden dark:block">
        <img
          src="/background-2026.png"
          alt="Xpace Background"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-background-dark/80 mix-blend-multiply"></div>
      </div>

      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-noise opacity-20 mix-blend-overlay"></div>

      <CompanyNavbar />

      <main>
        <CompanyHero />
        
        {/* About Company Section */}
        <section id="about-company" className="py-32 bg-white dark:bg-background-dark relative border-t border-gray-100 dark:border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="font-tech text-secondary tracking-widest uppercase mb-4 block">A Elite XPACE</span>
                <h2 className="font-display text-5xl md:text-7xl font-black text-text-main-light dark:text-text-main-dark mb-8 leading-none">
                  NOSSA <br />
                  <span className="text-secondary italic">COMPANHIA</span>
                </h2>
                <div className="space-y-6 font-body text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  <p>
                    A XPACE Dance Company é o ápice da nossa escola. Formada por bailarinos selecionados através de audições rigorosas, a companhia representa a marca XPACE nos maiores festivais e competições de dança do Brasil e do mundo.
                  </p>
                  <p>
                    Nosso foco é a excelência técnica, a inovação coreográfica e a performance de alto impacto. Aqui, a dança transcende o hobby e se torna uma profissão, uma paixão levada ao extremo.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-800 relative z-10">
                  <img src="/images/gallery/IMG_4858.JPG" alt="XPACE Company" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl z-0"></div>
              </div>
            </div>
          </div>
        </section>

        <Performances />
        <Awards />
        <Gallery />
        <InstagramFeed handle="@xpacedancecompany" />
      </main>

      <Footer />
    </div>
  );
};

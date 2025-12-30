import React, { useState } from 'react';
import { ContactForm } from './ContactForm';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer id="contact" className="bg-surface-light dark:bg-surface-dark pt-32 pb-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

            {/* Brand & Contact Info (Left) */}
            <div className="md:col-span-5 space-y-12">
              <div>
                <div className="mb-4 inline-block select-none group">
                  <div className="flex flex-col items-start cursor-default">
                    <span className="font-display font-black text-6xl tracking-widest leading-none text-text-main-light dark:text-text-main-dark group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-cyber-pink transition-all duration-500">XPACE</span>
                    <span className="font-sans text-xs font-bold tracking-[0.52em] uppercase mt-2 w-full text-left text-text-main-light dark:text-text-main-dark">Escola de Dança</span>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-bold tracking-wide leading-relaxed max-w-sm">
                  Redefining movement through technology and passion. Junte-se ao futuro da educação em dança.
                </p>
              </div>

              <div>
                <h4 className="font-tech text-xs font-bold mb-6 text-primary tracking-widest">CONTATO DIRETO</h4>
                <ul className="space-y-4 text-gray-500 dark:text-gray-400 font-bold tracking-wide text-sm">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg">mail</span>
                    <a href="mailto:financeiro@xpacecompany.com" className="hover:text-primary transition-colors">financeiro@xpacecompany.com</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg">call</span>
                    <a href="https://wa.me/554791700812" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+55 47 9170-0812</a>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-lg mt-1">location_on</span>
                    <span>Rua Tijucas, 401 - Centro<br />Joinville - SC</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form (Right - Spans more columns) */}
            <div className="md:col-span-7">
              <ContactForm />
            </div>
          </div>

          {/* Social & Legal */}
          <div className="border-t border-gray-300 dark:border-gray-700 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              <a href="https://instagram.com/xpaceescoladedanca" className="text-gray-400 hover:text-primary transition-colors" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i> INSTAGRAM</a>
              <a href="https://tiktok.com/@xpacedance" className="text-gray-400 hover:text-primary transition-colors" target="_blank" rel="noreferrer">TIKTOK</a>
            </div>

            <p className="text-[10px] text-gray-400 font-bold tracking-[0.2em]">© 2025 ESCOLA XPACE</p>

            <div className="flex gap-8">
              <button onClick={() => setLegalType('privacy')} className="text-[10px] text-gray-400 font-bold tracking-[0.2em] hover:text-black dark:hover:text-white transition-colors hover:underline decoration-primary underline-offset-4 uppercase">PRIVACIDADE</button>
              <button onClick={() => setLegalType('terms')} className="text-[10px] text-gray-400 font-bold tracking-[0.2em] hover:text-black dark:hover:text-white transition-colors hover:underline decoration-primary underline-offset-4 uppercase">TERMOS</button>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal isOpen={!!legalType} type={legalType || 'privacy'} onClose={() => setLegalType(null)} />
    </>
  );
};

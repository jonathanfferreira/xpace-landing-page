import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-surface-light dark:bg-surface-dark pt-32 pb-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
             <div className="mb-8 inline-block select-none group">
                <div className="flex flex-col items-center cursor-default">
                   <span className="font-display font-black text-7xl tracking-widest leading-none text-text-main-light dark:text-text-main-dark group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-cyber-pink transition-all duration-500">XPACE</span>
                   <span className="font-sans text-sm font-bold tracking-[0.52em] uppercase mt-2 w-full text-center text-text-main-light dark:text-text-main-dark">Escola de Dança</span>
                </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm font-bold tracking-wide leading-relaxed">
              Redefining movement through technology and passion. <br /> Junte-se ao futuro da educação em dança.
            </p>
          </div>
          
          <div>
            <h4 className="font-tech text-xs font-bold mb-8 text-primary tracking-widest">CONTATO</h4>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400 font-bold tracking-wide text-sm">
              <li className="flex items-center gap-2 group hover:translate-x-2 transition-transform duration-300">
                <span className="material-symbols-outlined text-sm group-hover:text-primary transition-colors">mail</span> 
                <a href="mailto:financeiro@xpacecompany.com" className="group-hover:text-primary transition-colors">financeiro@xpacecompany.com</a>
              </li>
              <li className="flex items-center gap-2 group hover:translate-x-2 transition-transform duration-300">
                <span className="material-symbols-outlined text-sm group-hover:text-primary transition-colors">call</span> 
                <a href="https://wa.me/554791700812" target="_blank" rel="noopener noreferrer" className="group-hover:text-primary transition-colors">+55 47 9170-0812</a>
              </li>
              <li className="flex gap-2 items-start group hover:translate-x-2 transition-transform duration-300">
                <span className="material-symbols-outlined text-sm mt-1 group-hover:text-primary transition-colors">location_on</span> 
                <span className="group-hover:text-text-main-light dark:group-hover:text-text-main-dark transition-colors">Rua Tijucas, 401 - Centro<br/>Joinville - SC</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-tech text-xs font-bold mb-8 text-primary tracking-widest">SOCIAL</h4>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400 font-bold tracking-wide text-sm">
              <li><a href="https://www.instagram.com/xpaceescoladedanca/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-300 flex items-center gap-2 hover:translate-x-2 group">Instagram <span className="material-symbols-outlined text-xs -rotate-45 group-hover:rotate-0 transition-transform duration-300">arrow_forward</span></a></li>
              <li><a href="https://www.tiktok.com/@xpacedance" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-300 flex items-center gap-2 hover:translate-x-2 group">TikTok <span className="material-symbols-outlined text-xs -rotate-45 group-hover:rotate-0 transition-transform duration-300">arrow_forward</span></a></li>
              <li><a href="https://www.youtube.com/@xpacedancecompany" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-300 flex items-center gap-2 hover:translate-x-2 group">YouTube <span className="material-symbols-outlined text-xs -rotate-45 group-hover:rotate-0 transition-transform duration-300">arrow_forward</span></a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 flex items-center gap-2 hover:translate-x-2 group">Spotify <span className="material-symbols-outlined text-xs -rotate-45 group-hover:rotate-0 transition-transform duration-300">arrow_forward</span></a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 dark:border-gray-700 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[10px] text-gray-400 font-bold tracking-[0.2em] mb-4 md:mb-0">© 2023 ESCOLA XPACE. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-gray-400 font-bold tracking-[0.2em] hover:text-black dark:hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">PRIVACIDADE</a>
            <a href="#" className="text-[10px] text-gray-400 font-bold tracking-[0.2em] hover:text-black dark:hover:text-white transition-colors hover:underline decoration-primary underline-offset-4">TERMOS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
import React, { useEffect, useState } from 'react';

export const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check system preference or localStorage on mount
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'O Universo', href: '#features' },
    { name: 'Premiações', href: '#awards' },
    { name: 'Cinema', href: '#performances' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Horários', href: '#schedule' },
    { name: 'Equipe', href: '#teachers' },
    { name: 'Planos', href: '#plans' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center group cursor-pointer" onClick={closeMenu}>
            <div className="flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img src="/images/logo/XPACE PERFIL PRETO.png" alt="XPACE Logo" className="h-10 w-auto dark:hidden" />
              <img src="/images/logo/XPACE PERFIL BRANCO.png" alt="XPACE Logo" className="h-10 w-auto hidden dark:block" />
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group py-1"
              >
                <span className="text-lg xl:text-xl font-tech tracking-widest text-text-main-light dark:text-text-main-dark transition-colors duration-300 group-hover:text-primary">
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            ))}

            <a href="#contact" className="relative group overflow-hidden rounded-sm ml-4">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyber-pink rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
              <div className="relative px-6 py-2 bg-black text-white dark:bg-white dark:text-black clip-button font-tech text-xl tracking-widest transition-all duration-300 flex items-center gap-2 group-hover:bg-opacity-90 group-hover:scale-[1.02]">
                <span>Junte-se</span>
                <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
              </div>
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text-main-light dark:text-text-main-dark hover:rotate-12 transform duration-300"
            >
              <span className={`material-symbols-outlined text-xl ${isDark ? 'hidden' : 'block'}`}>dark_mode</span>
              <span className={`material-symbols-outlined text-xl ${isDark ? 'block' : 'hidden'}`}>light_mode</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text-main-light dark:text-text-main-dark"
            >
              <span className={`material-symbols-outlined text-xl ${isDark ? 'hidden' : 'block'}`}>dark_mode</span>
              <span className={`material-symbols-outlined text-xl ${isDark ? 'block' : 'hidden'}`}>light_mode</span>
            </button>
            <button className="p-2 text-text-main-light dark:text-text-main-dark transition-transform active:scale-95" onClick={toggleMenu}>
              <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-24 left-0 w-full bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out overflow-hidden shadow-2xl ${isMenuOpen ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-2xl font-tech tracking-widest text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors hover:translate-x-2 duration-300"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} className="px-10 py-3 bg-black text-white dark:bg-white dark:text-black clip-button font-tech text-xl tracking-widest active:scale-95 transition-transform">
            Junte-se
          </a>
        </div>
      </div>
    </nav>
  );
};
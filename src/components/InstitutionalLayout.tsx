import React from 'react';
import { Link } from 'react-router-dom';
import { CustomCursor } from '../../components/CustomCursor';

export const InstitutionalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative min-h-screen bg-background-dark text-white overflow-hidden">
    <CustomCursor />
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <img src="/background-2026.png" alt="" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-noise opacity-20" />
    </div>
    <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
      <header className="py-8 flex flex-wrap items-center justify-between gap-6 border-b border-white/10">
        <Link to="/" className="flex items-center gap-3 rounded focus-visible:outline-2 focus-visible:outline-secondary" aria-label="XPACE Company — início">
          <span className="font-display text-3xl font-black tracking-tight">XPACE</span>
          <span className="font-tech text-xl tracking-widest">Company</span>
        </Link>
        <nav aria-label="Negócios da XPACE Company" className="flex gap-6 text-sm">
          <Link to="/dance" className="hover:text-secondary focus-visible:underline">Escola de Dança</Link>
          <Link to="/xtage" className="hover:text-secondary focus-visible:underline">XTAGE</Link>
        </nav>
      </header>
      <main className="py-16 md:py-24">{children}</main>
      <footer className="py-8 border-t border-white/10 text-sm text-gray-400 flex flex-wrap justify-between gap-4">
        <Link to="/" className="hover:text-white">XPACE Company</Link>
        <p>Cultura. Tecnologia. Experiências.</p>
      </footer>
    </div>
  </div>
);

import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { InstitutionalLayout } from '../components/InstitutionalLayout';

export const CompanyHome: React.FC = () => (
  <InstitutionalLayout>
    <SEO title="XPACE Company" description="XPACE Company — cultura, tecnologia, dança e produtos digitais." keywords="xpace company, cultura, tecnologia, dança, produtos digitais" />
    <div className="max-w-3xl mb-14">
      <p className="font-tech text-secondary tracking-widest text-xl mb-5">Um ecossistema em movimento</p>
      <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6">XPACE Company</h1>
      <p className="font-display text-2xl sm:text-4xl leading-tight mb-6">Cultura. Tecnologia. Experiências.</p>
      <p className="text-gray-300 normal-case leading-relaxed max-w-2xl">Conectamos dança, educação e tecnologia para criar experiências e produtos que movem pessoas. Conheça os negócios que fazem parte da XPACE Company.</p>
    </div>
    <section aria-label="Nossos negócios e produtos" className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Link to="/dance" className="group rounded-3xl border border-white/15 bg-black/40 p-8 flex flex-col hover:border-secondary focus-visible:outline-2 focus-visible:outline-secondary transition-colors">
        <span className="font-tech text-secondary tracking-widest mb-6">Dança & cultura</span>
        <h2 className="font-display text-3xl font-bold mb-4">XPACE Dance</h2>
        <p className="text-gray-300 normal-case leading-relaxed mb-8">XPACE Escola de Dança: educação, cultura e performance. Aulas regulares, Dance Company, XPACE PRO, workshops e aluguel de salas.</p>
        <span className="mt-auto text-sm font-bold">Conheça a escola <span aria-hidden="true">→</span></span>
      </Link>
      <Link to="/xtage" className="group rounded-3xl border border-white/15 bg-black/40 p-8 flex flex-col hover:border-secondary focus-visible:outline-2 focus-visible:outline-secondary transition-colors">
        <span className="font-tech text-secondary tracking-widest mb-6">Festivais & eventos</span>
        <h2 className="font-display text-3xl font-bold mb-2">XTAGE</h2>
        <span className="font-tech text-xs tracking-widest text-gray-400 uppercase mb-4">A product by ECAPX</span>
        <p className="text-gray-300 normal-case leading-relaxed mb-8">Tecnologia para festivais e eventos. Uma plataforma da XPACE Company dedicada à gestão dessas experiências.</p>
        <span className="mt-auto text-sm font-bold">Conheça o XTAGE <span aria-hidden="true">→</span></span>
      </Link>
      <article className="rounded-3xl border border-white/15 bg-black/40 p-8 flex flex-col">
        <span className="font-tech text-gray-400 tracking-widest mb-6">Tecnologia & inovação</span>
        <h2 className="font-display text-3xl font-bold mb-4">ECAPX</h2>
        <p className="text-gray-300 normal-case leading-relaxed mb-8">A frente de tecnologia e inovação da XPACE Company: software, inteligência artificial, automação e produtos digitais.</p>
        <span className="mt-auto text-sm text-gray-400">Em breve</span>
      </article>
    </section>
  </InstitutionalLayout>
);

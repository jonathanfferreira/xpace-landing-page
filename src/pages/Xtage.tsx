import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { InstitutionalLayout } from '../components/InstitutionalLayout';

export const Xtage: React.FC = () => (
  <InstitutionalLayout>
    <SEO title="XTAGE | XPACE Company" description="XTAGE — plataforma tecnológica da XPACE Company voltada à gestão de festivais e eventos." keywords="xtage, festivais, eventos, tecnologia, xpace company" />
    <div className="max-w-3xl">
      <Link to="/" className="inline-block text-sm text-gray-300 hover:text-white mb-10">← XPACE Company</Link>
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <p className="font-tech text-secondary text-xl tracking-widest">Tecnologia para festivais e eventos</p>
        <span className="text-gray-500">•</span>
        <span className="font-tech text-sm tracking-widest text-gray-400 uppercase">A product by ECAPX</span>
      </div>
      <h1 className="font-display text-6xl sm:text-8xl font-black mb-8">XTAGE</h1>
      <p className="text-xl text-gray-300 normal-case leading-relaxed mb-6">A plataforma tecnológica da XPACE Company voltada à gestão de festivais e eventos, desenvolvida dentro da ECAPX.</p>
      <p className="text-gray-400 normal-case leading-relaxed mb-10">Conheça o produto e acesse a plataforma no site do XTAGE.</p>
      <a href="https://xtage.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-bold text-white hover:bg-primary/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">
        Acessar XTAGE <span className="text-xs font-normal normal-case">(nova aba)</span>
      </a>
    </div>
  </InstitutionalLayout>
);

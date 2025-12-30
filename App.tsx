import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Manifesto } from './components/Manifesto';
import { Values } from './components/Values';
import { Features } from './components/Features';
import { Awards } from './components/Awards';
import { Schedule } from './components/Schedule';
import { Gallery } from './components/Gallery';
import { Teachers } from './components/Teachers';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-noise opacity-40 mix-blend-overlay"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Values />
        <Features />
        <Awards />
        <Gallery />
        <Schedule />
        <Teachers />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Manifesto } from './components/Manifesto';
import { Values } from './components/Values';
import { Features } from './components/Features';
import { Awards } from './components/Awards';
import { Performances } from './components/Performances';
import { About } from './components/About';
import { Schedule } from './components/Schedule';
import { Rental } from './components/Rental';
import { Gallery } from './components/Gallery';
import { Teachers } from './components/Teachers';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Location } from './components/Location';
import { Preloader } from './components/Preloader';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuizModal } from './src/components/Quiz/QuizModal'; // Quiz Component

import './index.css';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [hasOpenedQuiz, setHasOpenedQuiz] = useState(false);

  // LOGIC: Smart Trigger (Auto-open after 15s if not interacted)
  useEffect(() => {
    if (isLoading) return;

    const timer = setTimeout(() => {
      if (!hasOpenedQuiz) {
        setIsQuizOpen(true);
        setHasOpenedQuiz(true);
      }
    }, 15000); // 15 seconds delay

    return () => clearTimeout(timer);
  }, [isLoading, hasOpenedQuiz]);

  const handleOpenQuiz = () => {
    setIsQuizOpen(true);
    setHasOpenedQuiz(true);
  };

  return (
    <div className="relative min-h-screen">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

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

      <Navbar />

      <main>
        <Hero onOpenQuiz={handleOpenQuiz} />
        <Marquee />
        <Manifesto />
        <About />
        <Values />
        <Teachers />
        <Features />
        <Awards />
        <Performances />
        <Gallery />
        <Schedule />
        <Rental />
        <Pricing />
        <Testimonials />
        <CTA />
        <FAQ />
        <Location />
      </main>

      <Footer />
      <FloatingWhatsApp />

      {/* GLOBAL QUIZ MODAL */}
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
};

export default App;
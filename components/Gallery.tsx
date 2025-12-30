import React from 'react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1535525266638-c893180a71d5?q=80&w=1000&auto=format&fit=crop",
    alt: "Hip Hop Class",
    span: "md:col-span-2 md:row-span-2",
    category: "AULAS"
  },
  {
    src: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=1000&auto=format&fit=crop",
    alt: "Performance",
    span: "md:col-span-1 md:row-span-1",
    category: "SHOWS"
  },
  {
    src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop",
    alt: "Neon Studio",
    span: "md:col-span-1 md:row-span-2",
    category: "ESTÚDIO"
  },
  {
    src: "https://images.unsplash.com/photo-1516475429286-465d815a0df7?q=80&w=1000&auto=format&fit=crop",
    alt: "Urban Dance",
    span: "md:col-span-1 md:row-span-1",
    category: "VIBE"
  },
  {
    src: "https://images.unsplash.com/photo-1545959588-31615488169d?q=80&w=1000&auto=format&fit=crop",
    alt: "Group Battle",
    span: "md:col-span-1 md:row-span-1",
    category: "BATALHAS"
  }
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-32 bg-background-light dark:bg-background-dark relative border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <div>
            <h2 className="font-display text-6xl md:text-8xl font-black text-text-main-light dark:text-text-main-dark tracking-tighter mb-2">
              GALERIA
            </h2>
            <div className="h-3 w-32 bg-gradient-to-r from-secondary to-primary"></div>
          </div>
          <p className="font-tech text-gray-500 tracking-widest text-right mt-4 md:mt-0 uppercase">
            Captured Moments // 2024-2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px] md:h-[600px]">
          {images.map((img, index) => (
            <div key={index} className={`relative group overflow-hidden ${img.span} bg-gray-200 dark:bg-gray-900`}>
              {/* Image */}
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale md:grayscale"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="bg-white dark:bg-black text-black dark:text-white px-2 py-1 font-tech tracking-widest text-xs font-bold uppercase">
                  {img.category}
                </span>
              </div>

              {/* Borders (Corner accents) */}
              <div className="absolute top-4 right-4 w-2 h-2 border-t-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 border-b-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 font-tech tracking-widest text-lg hover:text-primary transition-colors">
                <span className="material-symbols-outlined">photo_camera</span>
                VER MAIS NO INSTAGRAM
                <div className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-300"></div>
            </a>
        </div>
      </div>
    </section>
  );
};
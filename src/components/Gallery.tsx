import React from 'react';

type GalleryItem = {
  type: 'image' | 'spacer';
  src?: string;
  alt?: string;
  span: string;
  category?: string;
};

const rawImages = [
  { src: "/images/gallery_new/estrutura_2.webp", category: "ESTÚDIO", alt: "XPACE Estrutura" },
  { src: "/images/gallery_new/estrutura1.webp", category: "ESTÚDIO", alt: "XPACE Estrutura" },
  { src: "/images/gallery_new/img_0527.heic.jpg", category: "ESTRUTURA", alt: "Estrutura 1" },
  { src: "/images/gallery_new/img_0528.heic.jpg", category: "ESTRUTURA", alt: "Estrutura 2" },
  { src: "/images/gallery_new/img_0529.heic.jpg", category: "ESTRUTURA", alt: "Estrutura 3" },
  { src: "/images/gallery_new/img_0530.heic.jpg", category: "ESTRUTURA", alt: "Estrutura 4" },
  { src: "/images/gallery_new/img_0531.heic.jpg", category: "ESTRUTURA", alt: "Estrutura 5" },
  { src: "/images/gallery_new/img_0532.heic.jpg", category: "ESTRUTURA", alt: "Estrutura 6" },
  { src: "/images/gallery_new/img_0533.heic.jpg", category: "ESTRUTURA", alt: "Estrutura 7" },
  { src: "/images/gallery_new/img_0537.heic.jpg", category: "ESTRUTURA", alt: "Estrutura 8" },
  { src: "/images/gallery_new/sala_2.webp", category: "SALA 2", alt: "Sala 2" },
  { src: "/images/gallery_new/sala_3.webp", category: "SALA 3", alt: "Sala 3" },
  { src: "/images/gallery_new/sala1.webp", category: "SALA 1", alt: "Sala 1" },
  { src: "/images/gallery_new/whatsapp_image_2026-04-07_at_10.16.35__1_.webp", category: "VIBE", alt: "Vibe 1" },
  { src: "/images/gallery_new/whatsapp_image_2026-04-07_at_10.16.35__2_.webp", category: "ESTÚDIO", alt: "Vibe 2" },
  { src: "/images/gallery_new/whatsapp_image_2026-04-07_at_10.16.35__3_.webp", category: "HIGHLIGHTS", alt: "Vibe 3" },
  { src: "/images/gallery_new/whatsapp_image_2026-04-07_at_10.16.35__4_.webp", category: "XPACE", alt: "Vibe 4" }
];

const items: GalleryItem[] = rawImages.map((img, index) => {
  let span = "md:col-span-1 md:row-span-1";
  const mod = index % 8;
  
  if (mod === 0) span = "md:col-span-2 md:row-span-2";
  else if (mod === 1) span = "md:col-span-1 md:row-span-2";
  else if (index === rawImages.length - 1 && mod !== 0) span = "md:col-span-4 md:row-span-2"; // Make the last image span fully if it's dangling

  return {
    type: 'image',
    src: img.src,
    alt: img.alt,
    category: img.category,
    span
  };
});

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

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6">
          {items.map((item, index) => {
            if (item.type === 'spacer') {
              return <div key={index} className={`hidden md:block ${item.span}`}></div>;
            }

            return (
              <div key={index} className={`relative group overflow-hidden ${item.span} bg-gray-200 dark:bg-gray-900 rounded-lg min-h-[250px]`}>
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale md:grayscale"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="bg-white dark:bg-black text-black dark:text-white px-2 py-1 font-tech tracking-widest text-xs font-bold uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Borders (Corner accents) */}
                <div className="absolute top-4 right-4 w-2 h-2 border-t-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 border-b-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="https://www.instagram.com/xpacedancecompany/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 font-tech tracking-widest text-lg hover:text-primary transition-colors">
            <span className="material-symbols-outlined">photo_camera</span>
            VER MAIS NO INSTAGRAM
            <div className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};
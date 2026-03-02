import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

interface InstagramFeedProps {
  handle: string;
}

const mockPosts = [
  { id: 1, image: '/images/gallery/IMG_4858.JPG', likes: 342, comments: 24 },
  { id: 2, image: '/images/gallery/IMG_5244.JPG', likes: 512, comments: 45 },
  { id: 3, image: '/images/gallery/IMG_6202.JPG', likes: 289, comments: 12 },
  { id: 4, image: '/images/gallery/IMG_4860.JPG', likes: 433, comments: 38 },
  { id: 5, image: '/images/gallery/IMG_8694.JPG', likes: 621, comments: 56 },
  { id: 6, image: '/images/gallery/IMG_4864.JPG', likes: 398, comments: 19 },
];

export const InstagramFeed: React.FC<InstagramFeedProps> = ({ handle }) => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark relative border-t border-gray-100 dark:border-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
              <div className="w-full h-full bg-white dark:bg-black rounded-full flex items-center justify-center">
                <Instagram className="w-8 h-8 text-text-main-light dark:text-text-main-dark" />
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-text-main-light dark:text-text-main-dark">
                Siga nosso dia a dia
              </h2>
              <a 
                href={`https://instagram.com/${handle.replace('@', '')}`} 
                target="_blank" 
                rel="noreferrer"
                className="font-tech text-primary tracking-widest hover:text-secondary transition-colors"
              >
                {handle}
              </a>
            </div>
          </div>
          
          <a 
            href={`https://instagram.com/${handle.replace('@', '')}`} 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-4 bg-primary text-white font-tech tracking-widest text-sm hover:bg-secondary transition-colors rounded-sm flex items-center gap-2 group"
          >
            <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
            SEGUIR NO INSTAGRAM
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {mockPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={`https://instagram.com/${handle.replace('@', '')}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden bg-gray-200 dark:bg-gray-800 rounded-xl block"
            >
              <img 
                src={post.image} 
                alt={`Instagram post by ${handle}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-white font-tech">
                  <Heart className="w-5 h-5 fill-white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-white font-tech">
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

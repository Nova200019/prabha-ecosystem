'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

const IMAGES = [
  '/images/hero-bathroom.jpg',
  '/images/marble-collection.jpg',
  '/images/luxury-faucet.jpg',
  '/images/designer-basin.jpg',
  '/images/luxury-shower.jpg',
  '/images/granite-texture.jpg',
  '/images/hero-bathroom.jpg', // repeated for masonry effect
  '/images/marble-collection.jpg'
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeader title="Gallery" subtitle="Visual Journey" align="center" />
          
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 mt-12 space-y-4">
            {IMAGES.map((src, i) => (
              <div 
                key={i} 
                className="relative cursor-pointer overflow-hidden rounded-lg group break-inside-avoid"
                onClick={() => setSelectedImage(src)}
              >
                <Image 
                  src={src} 
                  alt="Gallery image" 
                  width={600} 
                  height={800} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white"><X className="w-8 h-8" /></button>
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video md:aspect-auto md:h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="Fullscreen gallery" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

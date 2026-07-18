'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import AnimatedText from '@/components/ui/AnimatedText';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-bg"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/images/hero-bathroom.jpg"
          alt="Luxury Bathroom by Prabha"
          fill
          priority
          className="object-cover img-luxury"
          sizes="100vw"
        />
        {/* Gradient Overlays for readability and mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-transparent to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-bg/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full glass-light border border-white/10 backdrop-blur-md"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">
              Authorised Jaquar Dealer
            </span>
          </motion.div>

          <AnimatedText 
            text="Luxury Begins With Prabha." 
            tag="h1" 
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white mb-8 leading-[1.05]"
            type="words"
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-text-secondary max-w-xl mb-12 font-light leading-relaxed"
          >
            Premium Tiles, Luxury Bathrooms and Architectural Materials curated for timeless spaces.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" size="lg" href="/collections">
              Explore Collection
            </Button>
            <Button variant="secondary" size="lg" href="/contact">
              Book Consultation
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-text-tertiary">Scroll</span>
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}

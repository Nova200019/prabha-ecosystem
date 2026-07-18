import HeroSection from '@/components/hero/HeroSection';
import FeaturedCollections from '@/components/sections/FeaturedCollections';
import LuxuryShowcase from '@/components/sections/LuxuryShowcase';
import BrandStory from '@/components/sections/BrandStory';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import dynamic from 'next/dynamic';
import ScrollReveal from '@/components/ui/ScrollReveal';

import { FaucetModelWrapper, TileExplodedWrapper, ShowerSceneWrapper } from '@/components/3d/Wrappers';

export default function Home() {
  return (
    <SmoothScroll>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />

        {/* Ultra Luxury Shower 3D Showcase */}
        <section className="h-screen w-full relative bg-[#020202]">
          <div className="absolute inset-0 z-0">
            <ShowerSceneWrapper />
          </div>
          <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto w-full">
              <ScrollReveal direction="up">
                <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight mb-4 drop-shadow-2xl">
                  Immersive <span className="text-gold italic">Luxury</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/80 font-light max-w-xl drop-shadow-lg">
                  Step into an experience. Drag to explore the anatomy of perfect water flow in real-time 3D.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        <BrandStory />
        
        <FeaturedCollections />
        
        <LuxuryShowcase />

        {/* 3D Engineering Showcase Section */}
        <section className="py-24 md:py-32 bg-bg-secondary relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
                Engineered for <span className="text-gold italic">Perfection</span>
              </h2>
              <p className="text-text-secondary max-w-2xl text-lg font-light leading-relaxed">
                Experience our premium products in interactive 3D. Inspect every detail, from the flawless chrome finishes to the internal ceramic cartridges.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 max-w-[1400px] mx-auto">
            <div className="h-[500px] md:h-[600px] rounded-2xl overflow-hidden glass border border-white/5 relative">
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-xl text-white font-light tracking-wide">Single Lever Mixer</h3>
                <p className="text-sm text-text-tertiary">Interactive Exploded View</p>
              </div>
              <FaucetModelWrapper />
            </div>
            
            <div className="h-[500px] md:h-[600px] rounded-2xl overflow-hidden glass border border-white/5 relative">
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-xl text-white font-light tracking-wide">Porcelain Slab</h3>
                <p className="text-sm text-text-tertiary">Material Composition</p>
              </div>
              <TileExplodedWrapper />
            </div>
          </div>
        </section>

        <StatsSection />
        
        <TestimonialsSection />
        
        <CTASection />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

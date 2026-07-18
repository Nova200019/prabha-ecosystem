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

import { FaucetModelWrapper, TileExplodedWrapper } from '@/components/3d/Wrappers';

export default function Home() {
  return (
    <SmoothScroll>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        
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

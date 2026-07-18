'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#111111] to-[#050505]" />
      
      {/* Subtle glowing orb effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        <ScrollReveal direction="up" className="mb-6">
          <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight">
            Experience Luxury, <br className="hidden md:block" />
            <span className="italic font-serif text-[#C9A96E]">Reimagined.</span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2} direction="up" className="mb-12">
          <p className="text-xl text-[#BDBDBD] font-light max-w-2xl mx-auto">
            Book an exclusive consultation with our design experts and begin the journey of transforming your spaces into masterpieces.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4} direction="up" className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center">
          <Button size="lg" variant="primary" href="/contact" className="w-full sm:w-auto">
            Book Consultation
          </Button>
          <Button size="lg" variant="secondary" href="/quote" className="w-full sm:w-auto">
            Request Quote
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}

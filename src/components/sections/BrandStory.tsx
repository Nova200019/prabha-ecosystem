'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

export default function BrandStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Image Side */}
        <ScrollReveal direction="right" className="relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden">
          <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image
              src="/images/hero-bathroom.jpg"
              alt="Luxurious bathroom setting by Prabha"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/20" />
        </ScrollReveal>

        {/* Text Side */}
        <div className="flex flex-col justify-center">
          <SectionHeader
            caption="OUR STORY"
            title="Crafting Spaces, Defining Luxury"
            align="left"
            className="mb-8"
          />
          
          <ScrollReveal delay={0.2} direction="up" className="space-y-6 text-[#BDBDBD] font-light text-lg">
            <p>
              For over 15 years, Prabha has been the cornerstone of luxury interiors in West Bengal. We curate the finest selection of tiles and sanitaryware from around the globe, bringing unmatched elegance to every home and commercial space.
            </p>
            <p>
              As an exclusive partner of Jaquar and other premier global brands, we offer an experience that goes beyond retail. Our expansive showrooms are design sanctuaries where visions come to life.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} direction="up" className="mt-12 pt-12 border-t border-white/10 grid grid-cols-3 gap-6">
            <div>
              <h4 className="text-3xl font-medium text-white mb-1">15+</h4>
              <p className="text-sm text-[#8B7355] uppercase tracking-wider">Years</p>
            </div>
            <div>
              <h4 className="text-3xl font-medium text-white mb-1">5k+</h4>
              <p className="text-sm text-[#8B7355] uppercase tracking-wider">Products</p>
            </div>
            <div>
              <h4 className="text-3xl font-medium text-white mb-1">4.7★</h4>
              <p className="text-sm text-[#8B7355] uppercase tracking-wider">Rating</p>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

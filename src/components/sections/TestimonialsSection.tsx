'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { TESTIMONIALS } from '@/lib/constants';

export default function TestimonialsSection() {
  const testimonials = TESTIMONIALS || [
    { id: 1, author: 'Aarti Desai', role: 'Interior Designer', quote: 'Prabha offers an unparalleled selection of luxury tiles. Their attention to detail and service is impeccable.', rating: 5 },
    { id: 2, author: 'Rohan Mehta', role: 'Architect', quote: 'The Jaquar collection at Prabha transformed our hotel project. Simply the best destination in Bengal for premium sanitaryware.', rating: 5 },
    { id: 3, author: 'Priya Sen', role: 'Homeowner', quote: 'From selection to delivery, the experience was seamless. The Spanish tiles we chose are the highlight of our new home.', rating: 5 },
    { id: 4, author: 'Kunal Roy', role: 'Property Developer', quote: 'We source all our premium fittings from Prabha. Their quality and reliability make them our most trusted partner.', rating: 5 },
  ];

  // Duplicate for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <SectionHeader
          caption="Client Stories"
          title="Echoes of Excellence"
          align="center"
        />
      </div>

      <div 
        className="relative w-full flex overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{
            x: isHovered ? 0 : ['0%', '-33.33%'] // Adjust based on duplicate count to create seamless loop
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }
          }}
          className="flex gap-6 px-6 whitespace-nowrap"
          style={{ width: "fit-content" }}
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div key={`${testimonial.id}-${idx}`} className="w-[350px] md:w-[450px] flex-shrink-0 whitespace-normal">
              <GlassCard hover={true} className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-text-primary italic mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
                <div>
                  <h5 className="text-white font-medium text-lg">{testimonial.name}</h5>
                  <p className="text-[#8B7355] text-sm">{testimonial.role}</p>
                </div>
              </GlassCard>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

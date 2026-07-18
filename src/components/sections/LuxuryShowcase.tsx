'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function LuxuryShowcase() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="flex flex-col gap-0">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[50vh] lg:h-[80vh] w-full order-1 lg:order-1">
            <Image
              src="/showcase-tiles.jpg"
              alt="Premium Tiles"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-center p-12 lg:p-24 order-2 lg:order-2 bg-[#0A0A0A]">
            <div className="max-w-xl">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-white tracking-tight mb-8">
                  Artistry in <br />
                  <span className="text-[#C9A96E] italic font-serif">Every Tile</span>
                </h2>
                <p className="text-xl text-[#BDBDBD] font-light leading-relaxed">
                  From Italian marble to Spanish ceramic, our curated tile collections bring timeless beauty and modern sophistication to your floors and walls. Meticulously selected for their durability and aesthetic brilliance.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center p-12 lg:p-24 order-2 lg:order-1 bg-[#111111]">
            <div className="max-w-xl">
              <ScrollReveal direction="up">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-white tracking-tight mb-8">
                  Sanctuary of <br />
                  <span className="text-[#C9A96E] italic font-serif">Wellness</span>
                </h2>
                <p className="text-xl text-[#BDBDBD] font-light leading-relaxed">
                  Transform your bathroom into a personal spa with our premium sanitaryware. Featuring cutting-edge designs from global leaders that blend ultimate comfort with uncompromising style.
                </p>
              </ScrollReveal>
            </div>
          </div>
          <div className="relative h-[50vh] lg:h-[80vh] w-full order-1 lg:order-2">
            <Image
              src="/showcase-sanitary.jpg"
              alt="Premium Sanitaryware"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

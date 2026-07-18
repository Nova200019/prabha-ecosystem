'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { COLLECTIONS } from '@/lib/constants';

export default function FeaturedCollections() {
  // Fallback data if constants is not yet defined
  const collections = COLLECTIONS || [
    { id: 1, title: 'Opulence', subtitle: 'Italian Marble Finish', count: '120+ Products', image: '/collections/opulence.jpg', href: '/collections/opulence' },
    { id: 2, title: 'Zenith', subtitle: 'Minimalist Sanitaryware', count: '85+ Products', image: '/collections/zenith.jpg', href: '/collections/zenith' },
    { id: 3, title: 'Heritage', subtitle: 'Classic Wooden Textures', count: '60+ Products', image: '/collections/heritage.jpg', href: '/collections/heritage' },
    { id: 4, title: 'Lumina', subtitle: 'High-Gloss Vitrified', count: '150+ Products', image: '/collections/lumina.jpg', href: '/collections/lumina' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          caption="Curated Selection"
          title="Featured Collections"
          subtitle="Discover our most exquisite ranges of premium tiles and sanitaryware, designed for spaces that demand perfection."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection: any, index: number) => (
            <ScrollReveal key={collection.id} delay={index * 0.1} className={index === 0 ? "md:col-span-2 lg:col-span-2 row-span-2" : ""}>
              <Link href={collection.href}>
                <motion.div
                  whileHover="hover"
                  initial="initial"
                  className="group relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-xl overflow-hidden bg-[#111111]"
                >
                  <motion.div
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                    <span className="text-[#C9A96E] text-sm font-medium tracking-wider mb-2">
                      {collection.count}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-medium text-white mb-1">
                      {collection.title}
                    </h3>
                    <div className="flex items-center justify-between mt-2 text-[#BDBDBD] group-hover:text-white transition-colors duration-300">
                      <p className="font-light">{collection.subtitle}</p>
                      <motion.div
                        variants={{
                          initial: { x: -10, opacity: 0 },
                          hover: { x: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-5 h-5 text-[#C9A96E]" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

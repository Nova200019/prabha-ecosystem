import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Collections | Prabha',
  description: 'Explore our complete range of luxury tiles, sanitaryware, and bath fittings.',
};

const CATEGORIES = [
  { name: 'Tiles', image: '/images/granite-texture.jpg', count: '1000+', link: '/tiles' },
  { name: 'Marble', image: '/images/marble-collection.jpg', count: '200+', link: '/tiles?cat=marble' },
  { name: 'Faucets', image: '/images/luxury-faucet.jpg', count: '500+', link: '/sanitaryware?cat=faucets' },
  { name: 'Basins', image: '/images/designer-basin.jpg', count: '300+', link: '/sanitaryware?cat=basins' },
  { name: 'Showers', image: '/images/luxury-shower.jpg', count: '150+', link: '/sanitaryware?cat=showers' },
  { name: 'Kitchen', image: '/images/hero-bathroom.jpg', count: '100+', link: '/kitchen' },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
        <ScrollReveal>
          <SectionHeader title="Our Collections" subtitle="Curated Elegance" align="center" />
          
          <div className="flex justify-center gap-4 mt-8 mb-12 flex-wrap">
            <button className="px-6 py-2 rounded-full border border-gold text-gold">All</button>
            <button className="px-6 py-2 rounded-full border border-border text-text-secondary hover:text-white transition-colors">Tiles</button>
            <button className="px-6 py-2 rounded-full border border-border text-text-secondary hover:text-white transition-colors">Sanitaryware</button>
            <button className="px-6 py-2 rounded-full border border-border text-text-secondary hover:text-white transition-colors">Wellness</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 0.1}>
                <Link href={cat.link}>
                  <GlassCard className="group overflow-hidden p-0 relative h-[400px]">
                    <Image src={cat.image} alt={cat.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <h3 className="text-2xl text-white font-medium mb-1">{cat.name}</h3>
                      <p className="text-gold text-sm uppercase tracking-wider">{cat.count} Products</p>
                    </div>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}

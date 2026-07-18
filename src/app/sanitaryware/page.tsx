import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';

export const metadata: Metadata = {
  title: 'Luxury Sanitaryware & Bath Fittings | Prabha',
  description: 'Exquisite faucets, basins, showers, and accessories.',
};

const PRODUCTS = [
  { name: 'Gold Series Faucet', category: 'Faucets', finish: 'Brushed Gold', image: '/images/luxury-faucet.jpg' },
  { name: 'Artisan Basin', category: 'Basins', finish: 'Matte Black', image: '/images/designer-basin.jpg' },
  { name: 'Rain Shower System', category: 'Showers', finish: 'Chrome', image: '/images/luxury-shower.jpg' },
  { name: 'Freestanding Bathtub', category: 'Bathtubs', finish: 'Gloss White', image: '/images/hero-bathroom.jpg' },
];

export default function SanitarywarePage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeader title="Sanitaryware" subtitle="Art of Bathing" />
          
          <div className="flex gap-8 mt-12">
            <aside className="w-64 hidden lg:block shrink-0">
              <GlassCard className="p-6 sticky top-32">
                <h3 className="text-white font-medium mb-4">Categories</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="text-gold">All Products</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Faucets</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Basins</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Toilets</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Showers</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Bathtubs</li>
                </ul>
              </GlassCard>
            </aside>
            
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PRODUCTS.map((prod, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-0 overflow-hidden group">
                      <div className="relative h-[300px] w-full bg-surface/50">
                        <Image src={prod.image} alt={prod.name} fill className="object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" />
                      </div>
                      <div className="p-6">
                        <p className="text-xs text-gold uppercase tracking-widest mb-1">{prod.category}</p>
                        <h4 className="text-xl text-white mb-2">{prod.name}</h4>
                        <div className="text-sm text-text-secondary">
                          <span>Finish: {prod.finish}</span>
                        </div>
                      </div>
                    </GlassCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}

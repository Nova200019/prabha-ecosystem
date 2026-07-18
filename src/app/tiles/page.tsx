import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';

export const metadata: Metadata = {
  title: 'Luxury Tiles Collection | Prabha',
  description: 'Premium floor and wall tiles, marble, and granite.',
};

const PRODUCTS = [
  { name: 'Statuario Marble', size: '1200x2400mm', price: 'Premium', finish: 'High Gloss', image: '/images/marble-collection.jpg' },
  { name: 'Nero Marquina', size: '800x1600mm', price: 'Luxury', finish: 'Polished', image: '/images/granite-texture.jpg' },
  { name: 'Calacatta Gold', size: '1200x1200mm', price: 'Premium', finish: 'Satin', image: '/images/hero-bathroom.jpg' },
  { name: 'Travertine Classico', size: '600x1200mm', price: 'Standard', finish: 'Matte', image: '/images/marble-collection.jpg' },
];

export default function TilesPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeader title="Tiles Collection" subtitle="Foundation of Elegance" />
          
          <div className="flex gap-8 mt-12">
            <aside className="w-64 hidden lg:block shrink-0">
              <GlassCard className="p-6 sticky top-32">
                <h3 className="text-white font-medium mb-4">Categories</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="text-gold">Wall Tiles</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Floor Tiles</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Outdoor</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Large Format</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Marble</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Granite</li>
                </ul>
              </GlassCard>
            </aside>
            
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PRODUCTS.map((prod, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-0 overflow-hidden group">
                      <div className="relative h-[300px] w-full">
                        <Image src={prod.image} alt={prod.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl text-white mb-2">{prod.name}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                          <span>Size: {prod.size}</span>
                          <span>Finish: {prod.finish}</span>
                        </div>
                        <div className="mt-4 text-gold">{prod.price}</div>
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

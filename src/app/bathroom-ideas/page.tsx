import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';

export const metadata: Metadata = {
  title: 'Bathroom Ideas & Inspiration | Prabha',
  description: 'Explore curated bathroom designs, from modern villas to spa-like retreats.',
};

const THEMES = [
  { name: 'Modern Villa', image: '/images/hero-bathroom.jpg', desc: 'Sleek lines and minimal aesthetics.' },
  { name: 'Luxury Apartment', image: '/images/marble-collection.jpg', desc: 'Opulent materials in compact spaces.' },
  { name: 'Hotel Bathroom', image: '/images/designer-basin.jpg', desc: 'Five-star luxury at home.' },
  { name: 'Spa Retreat', image: '/images/luxury-shower.jpg', desc: 'Calming spaces for rejuvenation.' },
  { name: 'Minimal', image: '/images/granite-texture.jpg', desc: 'Less is more philosophy.' },
  { name: 'Dark Luxury', image: '/images/luxury-faucet.jpg', desc: 'Moody atmospheres with gold accents.' },
];

export default function InspirationPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeader title="Inspiration Gallery" subtitle="Find Your Style" align="center" />
          
          <div className="flex justify-center gap-4 mt-8 mb-12 flex-wrap">
            {['All Styles', 'Modern', 'Classic', 'Minimal', 'Industrial'].map((style, i) => (
              <button key={style} className={`px-6 py-2 rounded-full border ${i === 0 ? 'border-gold text-gold' : 'border-border text-text-secondary hover:text-white transition-colors'}`}>
                {style}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {THEMES.map((theme, i) => (
              <ScrollReveal key={theme.name} delay={i * 0.1}>
                <GlassCard className="p-0 overflow-hidden group">
                  <div className="relative h-[450px] w-full">
                    <Image src={theme.image} alt={theme.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <h3 className="text-3xl text-white font-light mb-2">{theme.name}</h3>
                      <p className="text-text-secondary">{theme.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}

import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';

export const metadata: Metadata = {
  title: 'Authorised Jaquar Dealer | Prabha',
  description: 'Discover the complete Jaquar and Artize collections at Prabha.',
};

export default function JaquarPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/luxury-shower.jpg')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm tracking-widest uppercase mb-6">Authorised Dealer</span>
            <h1 className="text-5xl md:text-7xl text-white font-light mb-6 tracking-tight">Jaquar <span className="text-text-secondary">Collection</span></h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light">Experience the perfect blend of technology, design, and unparalleled performance.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader title="Featured Series" subtitle="Masterpieces of Design" align="center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((item) => (
              <GlassCard key={item} className="p-0 overflow-hidden group">
                <div className="relative h-[400px]">
                  <Image src={item === 1 ? '/images/luxury-faucet.jpg' : item === 2 ? '/images/luxury-shower.jpg' : '/images/designer-basin.jpg'} alt="Jaquar Series" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl text-white mb-2">Artize Series {item}</h3>
                    <p className="text-text-secondary">Exquisite craftsmanship for luxury spaces.</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}

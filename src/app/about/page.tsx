import { Metadata } from 'next';
import Image from 'next/image';
import { Award, ShieldCheck, Cog, Hammer, Lightbulb, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';

export const metadata: Metadata = {
  title: 'About Prabha | Luxury Tiles & Sanitaryware',
  description: 'Discover the legacy of Prabha, your trusted destination for luxury tiles and sanitaryware.',
};

const VALUES = [
  { icon: Sparkles, title: 'Luxury', desc: 'Curated collections for exquisite spaces.' },
  { icon: ShieldCheck, title: 'Trust', desc: 'Building relationships through transparency.' },
  { icon: Cog, title: 'Engineering', desc: 'Precision in every product we offer.' },
  { icon: Hammer, title: 'Craftsmanship', desc: 'Celebrating artisanal excellence.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Bringing the latest trends to your home.' },
  { icon: Award, title: 'Elegance', desc: 'Timeless designs for modern living.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <section className="py-24 md:py-32 lg:py-40 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader title="About Prabha" subtitle="Our Story" />
          <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
            <div>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                For over a decade, Prabha has been synonymous with luxury and excellence in the world of tiles and sanitaryware. We believe that every space has a story, and we provide the finest materials to help you tell yours.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Our curated collections from global brands, coupled with our expert team, ensure that your vision is transformed into a breathtaking reality.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/images/hero-bathroom.jpg" alt="Prabha Showroom" fill className="object-cover" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="py-24 md:py-32 lg:py-40 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Our Values" subtitle="What Drives Us" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {VALUES.map((val, i) => (
              <ScrollReveal key={val.title} delay={i * 0.1}>
                <GlassCard className="p-8 text-center flex flex-col items-center">
                  <val.icon className="w-12 h-12 text-gold mb-6" />
                  <h3 className="text-xl text-white font-medium mb-3">{val.title}</h3>
                  <p className="text-text-secondary">{val.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

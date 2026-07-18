import { Metadata } from 'next';
import { Download, Users, FileText, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Architect Zone | Prabha',
  description: 'Exclusive resources and support for architects and interior designers.',
};

export default function ArchitectZonePage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl text-white font-light mb-6">Partner With <span className="text-gold">Prabha</span></h1>
            <p className="text-xl text-text-secondary mb-10">Exclusive access to CAD files, technical specifications, trade pricing, and dedicated support for your projects.</p>
            <Button variant="primary">Register as Architect</Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader title="Benefits" subtitle="Why Partner With Us" align="center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Download, title: 'CAD & 3D Models', desc: 'Access our comprehensive library of product models.' },
              { icon: FileText, title: 'Technical Specs', desc: 'Detailed specifications and installation guides.' },
              { icon: Users, title: 'Dedicated Rep', desc: 'A personal account manager for your firm.' },
              { icon: CheckCircle, title: 'Trade Pricing', desc: 'Exclusive pricing and volume discounts.' }
            ].map((ben, i) => (
              <GlassCard key={i} className="p-6 text-center">
                <ben.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="text-lg text-white font-medium mb-2">{ben.title}</h3>
                <p className="text-text-secondary text-sm">{ben.desc}</p>
              </GlassCard>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}

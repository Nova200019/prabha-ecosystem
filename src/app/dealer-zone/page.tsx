import { Metadata } from 'next';
import { Package, TrendingUp, HeadphonesIcon, BadgeCheck } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Dealer Zone | Prabha',
  description: 'Portal for authorised Prabha dealers and distributors.',
};

export default function DealerZonePage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl text-white font-light mb-6">Dealer <span className="text-gold">Portal</span></h1>
            <p className="text-xl text-text-secondary mb-10">Manage your inventory, place orders seamlessly, and access marketing materials.</p>
            <Button variant="primary">Dealer Login</Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader title="Dealer Benefits" subtitle="Grow With Us" align="center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Package, title: 'Inventory Sync', desc: 'Real-time stock updates and automated ordering.' },
              { icon: TrendingUp, title: 'Sales Analytics', desc: 'Track your performance and identify trends.' },
              { icon: BadgeCheck, title: 'Marketing Assets', desc: 'High-res images and promotional materials.' },
              { icon: HeadphonesIcon, title: 'Priority Support', desc: 'Direct line to our support team.' }
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

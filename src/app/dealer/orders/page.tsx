'use client';

import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function DealerOrdersPage() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <h1 className="text-3xl font-serif text-white">B2B Orders</h1>
        <p className="text-[#BDBDBD] mt-1">Manage wholesale purchases and tracking.</p>
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <GlassCard className="p-6">
          <div className="text-center text-[#BDBDBD] py-12">
            Orders management module functionality goes here.
          </div>
        </GlassCard>
      </ScrollReveal>
    </div>
  );
}

'use client';

import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function DealerInventoryPage() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-serif text-white">Inventory Management</h1>
            <p className="text-[#BDBDBD] mt-1">Track and update your local stock levels.</p>
          </div>
          <Button variant="primary">Update Stock</Button>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <GlassCard className="p-6">
          <div className="text-center text-[#BDBDBD] py-12">
            Inventory management module functionality goes here.
          </div>
        </GlassCard>
      </ScrollReveal>
    </div>
  );
}

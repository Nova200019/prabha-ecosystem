'use client';

import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { Search } from 'lucide-react';

export default function ArchitectProjectsPage() {
  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-serif text-white">Projects</h1>
            <p className="text-[#BDBDBD] mt-1">Manage your active designs and material specifications.</p>
          </div>
          <Button variant="primary">Create Project</Button>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <GlassCard className="p-6">
          <div className="text-center text-[#BDBDBD] py-12">
            Projects module functionality goes here.
          </div>
        </GlassCard>
      </ScrollReveal>
    </div>
  );
}

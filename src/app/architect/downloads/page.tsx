'use client';

import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { Download, File, Box, Search, Filter } from 'lucide-react';

export default function ArchitectDownloadsPage() {
  const resources = [
    { id: 1, name: 'Aurora Tub 3D Model', category: 'CAD/BIM', format: '.rvt, .dwg', size: '24 MB' },
    { id: 2, name: 'Golden Faucet Specs', category: 'Spec Sheet', format: '.pdf', size: '2.5 MB' },
    { id: 3, name: '2024 Collection Catalog', category: 'Catalog', format: '.pdf', size: '45 MB' },
    { id: 4, name: 'Installation Guide - Smart Showers', category: 'Guide', format: '.pdf', size: '5 MB' },
    { id: 5, name: 'Lumina Vanity SketchUp', category: 'CAD/BIM', format: '.skp', size: '18 MB' },
    { id: 6, name: 'Material Textures Pack', category: 'Assets', format: '.zip', size: '120 MB' },
  ];

  return (
    <div className="space-y-8">
      <ScrollReveal>
        <h1 className="text-3xl font-serif text-white">Resource Library</h1>
        <p className="text-[#BDBDBD] mt-1">Download technical specifications, CAD models, and catalogs.</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666]" />
            <input type="text" placeholder="Search resources..." className="w-full bg-[#121212] border border-[#1f1f1f] rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
          </div>
          <Button variant="secondary" className="flex items-center gap-2 px-6">
            <Filter size={18} /> Categories
          </Button>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res, i) => (
          <ScrollReveal key={res.id} delay={0.1 * i}>
            <GlassCard className="p-6 flex flex-col h-full group hover:border-[#C9A96E]/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#1f1f1f] flex items-center justify-center text-[#C9A96E] mb-4">
                {res.category === 'CAD/BIM' ? <Box size={24} /> : <File size={24} />}
              </div>
              <div className="text-[10px] text-[#BDBDBD] uppercase tracking-wider mb-1">{res.category}</div>
              <h3 className="text-lg font-medium text-white mb-4 flex-1">{res.name}</h3>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#1f1f1f]">
                <div className="text-xs text-[#666] flex flex-col">
                  <span>{res.format}</span>
                  <span>{res.size}</span>
                </div>
                <button className="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center text-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-black transition-colors">
                  <Download size={18} />
                </button>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

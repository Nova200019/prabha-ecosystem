import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlassCard from '@/components/ui/GlassCard';
import { Download, FileText, File, Layers, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Downloads Center | Prabha',
  description: 'Download product catalogs, technical specifications, and architectural resources.',
};

const DOWNLOAD_CATEGORIES = [
  {
    title: 'Product Catalogs 2024',
    icon: <FileText className="w-6 h-6 text-[#C9A96E]" />,
    items: [
      { name: 'Prabha Premium Tiles Collection', format: 'PDF', size: '24 MB' },
      { name: 'Jaquar Artize Bath Fittings', format: 'PDF', size: '18 MB' },
      { name: 'Large Format Slabs Lookbook', format: 'PDF', size: '32 MB' },
    ]
  },
  {
    title: 'Technical Specifications',
    icon: <File className="w-6 h-6 text-[#C9A96E]" />,
    items: [
      { name: 'Porcelain Tile Tech Specs', format: 'PDF', size: '2.4 MB' },
      { name: 'Sanitaryware Installation Metrics', format: 'PDF', size: '4.1 MB' },
      { name: 'Slip Resistance Ratings Guide', format: 'PDF', size: '1.2 MB' },
    ]
  },
  {
    title: 'Architectural Resources',
    icon: <Layers className="w-6 h-6 text-[#C9A96E]" />,
    items: [
      { name: 'Tile Textures Pack (High-Res)', format: 'ZIP', size: '156 MB' },
      { name: 'BIM Objects - Jaquar Selection', format: 'RVT', size: '45 MB' },
      { name: 'CAD Details for Shower Systems', format: 'DWG', size: '12 MB' },
    ]
  },
  {
    title: 'Installation & Maintenance',
    icon: <Wrench className="w-6 h-6 text-[#C9A96E]" />,
    items: [
      { name: 'Large Slab Handling Guide', format: 'PDF', size: '5.5 MB' },
      { name: 'Epoxy Grout Application Manual', format: 'PDF', size: '3.2 MB' },
      { name: 'Premium Brassware Care Guide', format: 'PDF', size: '1.8 MB' },
    ]
  }
];

export default function DownloadsPage() {
  return (
    <SmoothScroll>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24 bg-[#050505]">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <SectionHeader 
            title="Downloads Center" 
            subtitle="Access our comprehensive library of catalogs, technical specifications, and architectural assets."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DOWNLOAD_CATEGORIES.map((category, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <GlassCard className="h-full p-8">
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                    <div className="bg-[#111111] p-3 rounded-xl border border-white/5">
                      {category.icon}
                    </div>
                    <h2 className="text-xl font-light text-white">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.items.map((item, j) => (
                      <div key={j} className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                        <div className="flex-1 pr-4">
                          <h3 className="text-white font-medium text-sm md:text-base mb-1 group-hover:text-[#C9A96E] transition-colors line-clamp-1">{item.name}</h3>
                          <div className="flex items-center gap-3 text-xs text-[#BDBDBD]">
                            <span className="uppercase bg-[#111111] px-2 py-0.5 rounded border border-white/10">{item.format}</span>
                            <span>{item.size}</span>
                          </div>
                        </div>
                        
                        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-[#C9A96E] group-hover:text-black transition-all shrink-0">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}

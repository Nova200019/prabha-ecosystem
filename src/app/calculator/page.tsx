import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import SectionHeader from '@/components/ui/SectionHeader';
import TileCalculator from '@/components/ui/TileCalculator';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Lightbulb, AlertTriangle, PenTool } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tile Calculator | Prabha',
  description: 'Calculate the exact number of tiles needed for your luxury bathroom or flooring project.',
};

export default function CalculatorPage() {
  return (
    <SmoothScroll>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24 bg-[#050505]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Tile Calculator" 
            subtitle="Plan your project with precision. Calculate exact material requirements including recommended wastage allowances."
          />
          
          <ScrollReveal>
            <TileCalculator />
          </ScrollReveal>

          <ScrollReveal className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5">
              <Lightbulb className="w-8 h-8 text-[#C9A96E] mb-6" />
              <h3 className="text-xl text-white mb-4">Pro Tip for Measuring</h3>
              <p className="text-[#BDBDBD] text-sm leading-relaxed">
                Always measure multiple points in your room, as walls are rarely perfectly straight. Use the largest measurement to ensure you have enough material.
              </p>
            </div>
            
            <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5">
              <AlertTriangle className="w-8 h-8 text-[#C9A96E] mb-6" />
              <h3 className="text-xl text-white mb-4">Why 10% Wastage?</h3>
              <p className="text-[#BDBDBD] text-sm leading-relaxed">
                Industry standard dictates a 10% extra allowance for cuts, corners, and potential breakages during installation. For complex patterns like herringbone, allow 15%.
              </p>
            </div>
            
            <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5">
              <PenTool className="w-8 h-8 text-[#C9A96E] mb-6" />
              <h3 className="text-xl text-white mb-4">Batch Consistency</h3>
              <p className="text-[#BDBDBD] text-sm leading-relaxed">
                Ordering your total requirement plus wastage in one go ensures all tiles come from the same manufacturing batch, guaranteeing perfect color consistency.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}

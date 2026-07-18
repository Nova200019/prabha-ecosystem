'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Package, TrendingUp, Ruler, GripHorizontal } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

const TILE_SIZES = [
  { id: '300x300', label: '300x300 mm', m2: 0.09, pcsPerBox: 10 },
  { id: '600x600', label: '600x600 mm', m2: 0.36, pcsPerBox: 4 },
  { id: '600x1200', label: '600x1200 mm', m2: 0.72, pcsPerBox: 2 },
  { id: '800x800', label: '800x800 mm', m2: 0.64, pcsPerBox: 3 },
  { id: '1200x1200', label: '1200x1200 mm', m2: 1.44, pcsPerBox: 2 },
  { id: '1200x2400', label: '1200x2400 mm', m2: 2.88, pcsPerBox: 1 },
];

export default function TileCalculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState(TILE_SIZES[1]);
  const [isFloorOnly, setIsFloorOnly] = useState(true);
  const [pricePerSqft, setPricePerSqft] = useState<string>('');
  const [results, setResults] = useState<{
    area: number;
    tiles: number;
    waste: number;
    totalTiles: number;
    boxes: number;
    estimatedCost: number;
  } | null>(null);

  const calculate = () => {
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    const h = parseFloat(height) || 0;
    
    if (l === 0 || w === 0) return;

    let totalAreaM2 = l * w; // Floor area
    
    if (!isFloorOnly && h > 0) {
      // Wall area (2 * length * height + 2 * width * height)
      totalAreaM2 += (2 * l * h) + (2 * w * h);
    }

    const tileArea = selectedSize.m2;
    const tilesNeeded = Math.ceil(totalAreaM2 / tileArea);
    const wasteTiles = Math.ceil(tilesNeeded * 0.10); // 10% wastage
    const totalTilesNeeded = tilesNeeded + wasteTiles;
    const totalBoxes = Math.ceil(totalTilesNeeded / selectedSize.pcsPerBox);
    
    // 1 sqm = 10.7639 sqft
    const totalAreaSqft = totalAreaM2 * 10.7639;
    const price = parseFloat(pricePerSqft) || 0;
    const estimatedCost = totalAreaSqft * price;

    setResults({
      area: totalAreaM2,
      tiles: tilesNeeded,
      waste: wasteTiles,
      totalTiles: totalTilesNeeded,
      boxes: totalBoxes,
      estimatedCost,
    });
  };

  return (
    <GlassCard className="w-full max-w-4xl mx-auto p-6 md:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-light mb-6 flex items-center gap-3">
              <Ruler className="text-[#C9A96E] w-6 h-6" />
              Room Dimensions
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-[#BDBDBD]">Length (m)</label>
                <input 
                  type="number" 
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors"
                  placeholder="e.g. 4.5"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-[#BDBDBD]">Width (m)</label>
                <input 
                  type="number" 
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors"
                  placeholder="e.g. 3.2"
                />
              </div>
            </div>
            
            <div className="mt-6 flex items-center gap-4">
              <button 
                onClick={() => setIsFloorOnly(true)}
                className={`flex-1 py-3 px-4 rounded-lg border text-sm transition-all ${isFloorOnly ? 'border-[#C9A96E] text-[#C9A96E] bg-[#C9A96E]/10' : 'border-white/10 text-[#BDBDBD] hover:border-white/30'}`}
              >
                Floor Only
              </button>
              <button 
                onClick={() => setIsFloorOnly(false)}
                className={`flex-1 py-3 px-4 rounded-lg border text-sm transition-all ${!isFloorOnly ? 'border-[#C9A96E] text-[#C9A96E] bg-[#C9A96E]/10' : 'border-white/10 text-[#BDBDBD] hover:border-white/30'}`}
              >
                Floor & Walls
              </button>
            </div>

            <AnimatePresence>
              {!isFloorOnly && (
                <motion.div 
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2">
                    <label className="text-sm text-[#BDBDBD]">Wall Height (m)</label>
                    <input 
                      type="number" 
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors"
                      placeholder="e.g. 2.8"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <h3 className="text-2xl font-light mb-6 flex items-center gap-3">
              <GripHorizontal className="text-[#C9A96E] w-6 h-6" />
              Tile Selection
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {TILE_SIZES.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 px-2 rounded-lg border text-xs text-center transition-all ${selectedSize.id === size.id ? 'border-[#C9A96E] text-[#C9A96E] bg-[#C9A96E]/10' : 'border-white/10 text-[#BDBDBD] hover:border-white/30'}`}
                >
                  {size.label}
                </button>
              ))}
            </div>
            
            <div className="mt-6 space-y-2">
              <label className="text-sm text-[#BDBDBD]">Price per Sq.Ft (₹) - Optional</label>
              <input 
                type="number" 
                value={pricePerSqft}
                onChange={(e) => setPricePerSqft(e.target.value)}
                className="w-full bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors"
                placeholder="e.g. 150"
              />
            </div>
          </div>

          <Button 
            onClick={calculate} 
            className="w-full py-4 text-lg mt-8"
            variant="primary"
          >
            Calculate Requirement
          </Button>
        </div>

        <div className="bg-[#111111] rounded-2xl p-6 border border-white/5 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A96E]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h3 className="text-2xl font-light mb-8 flex items-center gap-3">
            <Calculator className="text-[#C9A96E] w-6 h-6" />
            Calculation Results
          </h3>

          {!results ? (
            <div className="h-64 flex flex-col items-center justify-center text-center text-[#BDBDBD] space-y-4">
              <Calculator className="w-12 h-12 text-white/10" />
              <p>Enter dimensions and select tile size<br/>to see your requirements.</p>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/50 p-4 rounded-xl border border-white/5">
                  <p className="text-sm text-[#BDBDBD] mb-1">Total Area</p>
                  <p className="text-2xl text-white">{results.area.toFixed(2)} <span className="text-sm text-[#BDBDBD]">m²</span></p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-white/5">
                  <p className="text-sm text-[#BDBDBD] mb-1">Total Tiles (inc. 10% waste)</p>
                  <p className="text-2xl text-[#C9A96E]">{results.totalTiles} <span className="text-sm text-[#BDBDBD]">pcs</span></p>
                </div>
              </div>

              <div className="bg-[#C9A96E]/10 p-5 rounded-xl border border-[#C9A96E]/20 flex items-start gap-4">
                <Package className="w-8 h-8 text-[#C9A96E] shrink-0" />
                <div>
                  <p className="text-lg text-white mb-1">You will need {results.boxes} boxes</p>
                  <p className="text-sm text-[#BDBDBD]">{selectedSize.pcsPerBox} tiles per box • {results.waste} extra tiles included for cutting waste</p>
                </div>
              </div>

              {results.estimatedCost > 0 && (
                <div className="bg-black/50 p-5 rounded-xl border border-white/5 flex items-start gap-4 mt-6">
                  <TrendingUp className="w-8 h-8 text-white/50 shrink-0" />
                  <div>
                    <p className="text-sm text-[#BDBDBD] mb-1">Estimated Material Cost</p>
                    <p className="text-3xl text-white">₹{results.estimatedCost.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

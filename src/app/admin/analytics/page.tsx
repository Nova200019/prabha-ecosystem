'use client';

import GlassCard from '@/components/ui/GlassCard';

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-white tracking-tight">Analytics</h1>
        <select className="bg-[#121212] border border-[#1f1f1f] text-sm rounded-md px-3 py-1.5 text-white outline-none">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Funnel */}
        <GlassCard className="p-6 bg-[#0A0A0A] border-[#1f1f1f]">
          <h2 className="text-sm font-medium text-[#888888] mb-6">Conversion Funnel</h2>
          <div className="space-y-4">
            {[
              { label: 'Website Visitors', value: '45,200', percent: 100, color: 'bg-[#1f1f1f]' },
              { label: 'Product Views', value: '28,400', percent: 62, color: 'bg-[#333]' },
              { label: 'Added to Cart', value: '8,500', percent: 18, color: 'bg-[#C9A96E]/40' },
              { label: 'Purchased', value: '1,245', percent: 2.7, color: 'bg-[#C9A96E]' },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="flex justify-between text-sm mb-1 z-10 relative px-2">
                  <span className="text-white font-medium">{step.label}</span>
                  <span className="text-[#BDBDBD]">{step.value} ({step.percent}%)</span>
                </div>
                <div className="w-full bg-[#121212] h-8 rounded-md overflow-hidden relative">
                  <div 
                    className={`h-full ${step.color} transition-all duration-1000`} 
                    style={{ width: `${step.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Top Products */}
        <GlassCard className="p-6 bg-[#0A0A0A] border-[#1f1f1f]">
          <h2 className="text-sm font-medium text-[#888888] mb-6">Top Selling Products</h2>
          <div className="space-y-4">
            {[
              { name: 'Aurora Freestanding Tub', sales: 124, revenue: '₹4.34Cr' },
              { name: 'Golden Brass Faucet', sales: 456, revenue: '₹2.05Cr' },
              { name: 'Lumina Vanity Unit', sales: 89, revenue: '₹2.49Cr' },
              { name: 'Obsidian Smart Shower', sales: 112, revenue: '₹1.34Cr' },
            ].map((prod, i) => (
              <div key={i} className="flex items-center justify-between p-3 border-b border-[#1f1f1f] last:border-0">
                <div>
                  <div className="text-sm font-medium text-white">{prod.name}</div>
                  <div className="text-xs text-[#666]">{prod.sales} sales</div>
                </div>
                <div className="text-sm font-medium text-white">{prod.revenue}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

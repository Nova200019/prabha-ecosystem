'use client';

import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { Package, TrendingUp, AlertCircle, ShoppingCart } from 'lucide-react';

export default function DealerDashboard() {
  const stats = [
    { label: 'Total Orders', value: '45', icon: ShoppingCart },
    { label: 'Revenue (MTD)', value: '₹12.5L', icon: TrendingUp },
    { label: 'Pending Fulfillments', value: '8', icon: Package },
    { label: 'Low Stock Items', value: '3', icon: AlertCircle },
  ];

  const inventory = [
    { sku: 'PRB-TB-01', name: 'Aurora Freestanding Tub', stock: 2, status: 'low' },
    { sku: 'PRB-FC-44', name: 'Golden Brass Faucet', stock: 15, status: 'good' },
    { sku: 'PRB-SH-09', name: 'Obsidian Shower', stock: 0, status: 'out' },
  ];

  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-serif text-white">Dealer Portal</h1>
            <p className="text-[#BDBDBD] mt-1">Manage inventory, orders, and business performance.</p>
          </div>
          <Button variant="primary">Place Wholesale Order</Button>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <GlassCard className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[#BDBDBD] text-sm font-medium">{stat.label}</p>
                    <h3 className="text-3xl font-light text-white mt-2">{stat.value}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#1f1f1f] flex items-center justify-center">
                    <Icon size={20} className="text-[#C9A96E]" />
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ScrollReveal delay={0.4}>
          <GlassCard className="h-full">
            <div className="p-6 border-b border-[#1f1f1f]">
              <h2 className="text-xl font-medium text-white">Recent Orders</h2>
            </div>
            <div className="p-0">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex justify-between items-center p-6 border-b border-[#1f1f1f] last:border-0">
                  <div>
                    <div className="text-white font-medium">#ORD-B2B-00{9 - i}</div>
                    <div className="text-sm text-[#BDBDBD]">Oct {15 - i}, 2023 • 12 items</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">₹3,45,000</div>
                    <div className="text-xs text-blue-400 mt-1">Processing</div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <GlassCard className="h-full">
            <div className="p-6 border-b border-[#1f1f1f] flex justify-between items-center">
              <h2 className="text-xl font-medium text-white">Inventory Alerts</h2>
              <button className="text-sm text-[#C9A96E] hover:underline">View All</button>
            </div>
            <div className="p-0">
              {inventory.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-6 border-b border-[#1f1f1f] last:border-0">
                  <div>
                    <div className="text-white font-medium">{item.name}</div>
                    <div className="text-xs text-[#666] mt-1">{item.sku}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      item.status === 'good' ? 'bg-green-500/10 text-green-400' :
                      item.status === 'low' ? 'bg-yellow-500/10 text-yellow-400' :
                      'bg-red-500/10 text-red-400'
                    }`}>
                      {item.stock} in stock
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  );
}

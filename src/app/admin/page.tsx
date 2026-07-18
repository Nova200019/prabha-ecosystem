'use client';

import GlassCard from '@/components/ui/GlassCard';
import { ArrowUpRight, ArrowDownRight, IndianRupee, ShoppingCart, Users, AlertTriangle } from 'lucide-react';

export default function AdminDashboardPage() {
  const stats = [
    { name: 'Total Revenue', value: '₹24.5M', change: '+12.5%', isPositive: true, icon: IndianRupee },
    { name: 'Orders', value: '1,245', change: '+8.2%', isPositive: true, icon: ShoppingCart },
    { name: 'Customers', value: '842', change: '+15.3%', isPositive: true, icon: Users },
    { name: 'Avg. Order Value', value: '₹19.6K', change: '-2.4%', isPositive: false, icon: IndianRupee },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white tracking-tight">Overview</h1>
        <div className="flex gap-2">
          <select className="bg-[#121212] border border-[#1f1f1f] text-sm rounded-md px-3 py-1.5 text-white outline-none">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <GlassCard key={stat.name} className="p-5 border-[#1f1f1f] bg-[#0A0A0A]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-[#888888]">{stat.name}</span>
                <Icon size={16} className="text-[#666]" />
              </div>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-semibold text-white">{stat.value}</span>
                <span className={`flex items-center text-xs font-medium ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.isPositive ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                  {stat.change}
                </span>
              </div>
            </GlassCard>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Revenue Chart */}
        <GlassCard className="p-6 border-[#1f1f1f] bg-[#0A0A0A] lg:col-span-2">
          <h2 className="text-sm font-medium text-[#888888] mb-6">Revenue Over Time</h2>
          <div className="h-64 flex items-end justify-between gap-2">
            {/* Simple CSS Bar Chart */}
            {[40, 60, 45, 80, 55, 90, 65, 100, 75, 85, 60, 95].map((h, i) => (
              <div key={i} className="w-full bg-[#121212] rounded-t-sm relative group h-full flex items-end">
                <div 
                  className="w-full bg-[#1f1f1f] group-hover:bg-[#C9A96E] transition-colors rounded-t-sm"
                  style={{ height: `${h}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-[#666]">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </GlassCard>

        {/* Low Stock Alerts */}
        <GlassCard className="p-6 border-[#1f1f1f] bg-[#0A0A0A]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-medium text-[#888888]">Inventory Alerts</h2>
            <AlertTriangle size={16} className="text-yellow-500" />
          </div>
          <div className="space-y-4">
            {[
              { name: 'Aurora Marble Basin', stock: 2 },
              { name: 'Golden Brass Faucet', stock: 0 },
              { name: 'Obsidian Shower Head', stock: 4 },
              { name: 'Lumina Vanity Unit', stock: 1 }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-[#121212] rounded-lg border border-[#1f1f1f]">
                <span className="text-sm text-white font-medium truncate pr-4">{item.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${item.stock === 0 ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                  {item.stock} left
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

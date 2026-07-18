'use client';

import { Package, Heart, MapPin, FileText, ChevronRight } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Link from 'next/link';

export default function DashboardPage() {
  const stats = [
    { label: 'Orders', value: '12', icon: Package, href: '/dashboard/orders' },
    { label: 'Wishlist', value: '8', icon: Heart, href: '/dashboard/wishlist' },
    { label: 'Saved Addresses', value: '3', icon: MapPin, href: '/dashboard/addresses' },
    { label: 'Pending Quotes', value: '2', icon: FileText, href: '#' },
  ];

  const recentOrders = [
    { id: '#ORD-2023-894', date: '12 Oct, 2023', items: 3, total: '$4,250.00', status: 'Delivered' },
    { id: '#ORD-2023-895', date: '15 Oct, 2023', items: 1, total: '$850.00', status: 'In Transit' },
    { id: '#ORD-2023-896', date: '18 Oct, 2023', items: 5, total: '$12,400.00', status: 'Processing' },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Delivered': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'In Transit': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'Processing': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-serif text-white">Dashboard</h1>
            <p className="text-[#BDBDBD] mt-1">Manage your orders and account preferences.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/catalog" className="px-4 py-2 bg-[#C9A96E] text-black font-medium rounded-md hover:bg-[#b0925c] transition-colors text-sm">
              Browse Products
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <Link href={stat.href}>
                <GlassCard className="p-6 hover:border-[#C9A96E]/50 transition-colors group cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[#BDBDBD] text-sm font-medium">{stat.label}</p>
                      <h3 className="text-3xl font-light text-white mt-2">{stat.value}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#1f1f1f] group-hover:bg-[#C9A96E]/10 flex items-center justify-center transition-colors">
                      <Icon size={20} className="text-[#C9A96E]" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Recent Orders */}
      <ScrollReveal delay={0.4}>
        <GlassCard className="overflow-hidden">
          <div className="p-6 border-b border-[#1f1f1f] flex justify-between items-center">
            <h2 className="text-xl font-medium text-white">Recent Orders</h2>
            <Link href="/dashboard/orders" className="text-sm text-[#C9A96E] hover:text-[#b0925c] flex items-center">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#0A0A0A]">
                <tr>
                  <th className="p-4 text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">Order ID</th>
                  <th className="p-4 text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">Date</th>
                  <th className="p-4 text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">Items</th>
                  <th className="p-4 text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">Total</th>
                  <th className="p-4 text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1f1f1f]">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-[#121212]/50 transition-colors">
                    <td className="p-4 text-sm font-medium text-white">{order.id}</td>
                    <td className="p-4 text-sm text-[#BDBDBD]">{order.date}</td>
                    <td className="p-4 text-sm text-[#BDBDBD]">{order.items}</td>
                    <td className="p-4 text-sm text-[#BDBDBD]">{order.total}</td>
                    <td className="p-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </ScrollReveal>
    </div>
  );
}

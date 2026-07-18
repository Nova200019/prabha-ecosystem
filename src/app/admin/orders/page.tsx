'use client';

import GlassCard from '@/components/ui/GlassCard';
import { Search, Filter, Eye } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function AdminOrdersPage() {
  const orders = [
    { id: '#ORD-0094', customer: 'Arjun Mehta', items: 3, total: '₹4,25,000', status: 'Processing', date: 'Today, 10:45 AM' },
    { id: '#ORD-0093', customer: 'Priya Sharma', items: 1, total: '₹85,000', status: 'Shipped', date: 'Yesterday, 02:15 PM' },
    { id: '#ORD-0092', customer: 'Karan Singhania', items: 5, total: '₹12,40,000', status: 'Delivered', date: '12 Oct, 2023' },
    { id: '#ORD-0091', customer: 'Neha Gupta', items: 2, total: '₹1,50,000', status: 'Cancelled', date: '10 Oct, 2023' },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Delivered': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Processing': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Shipped': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'Cancelled': return 'bg-red-500/10 text-red-400 border-red-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-white tracking-tight">Orders</h1>
      </div>

      <GlassCard className="bg-[#0A0A0A] border-[#1f1f1f] overflow-hidden">
        <div className="p-4 border-b border-[#1f1f1f] flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative max-w-sm w-full">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666]" />
            <input type="text" placeholder="Search orders..." className="w-full bg-[#121212] border border-[#1f1f1f] rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#333] transition-colors" />
          </div>
          <div className="flex gap-2">
            <select className="bg-[#121212] border border-[#1f1f1f] rounded-md px-3 py-2 text-sm text-white outline-none">
              <option>All Status</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </select>
            <Button variant="secondary" className="text-sm flex items-center gap-2 h-9 px-4 border-[#1f1f1f]">
              <Filter size={16} />
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#121212] border-b border-[#1f1f1f]">
              <tr>
                <th className="px-6 py-3 font-medium text-[#888888]">Order ID</th>
                <th className="px-6 py-3 font-medium text-[#888888]">Customer</th>
                <th className="px-6 py-3 font-medium text-[#888888]">Date</th>
                <th className="px-6 py-3 font-medium text-[#888888]">Items</th>
                <th className="px-6 py-3 font-medium text-[#888888]">Total</th>
                <th className="px-6 py-3 font-medium text-[#888888]">Status</th>
                <th className="px-6 py-3 font-medium text-[#888888] text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f1f1f]">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-[#121212]/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{order.id}</td>
                  <td className="px-6 py-4 text-[#BDBDBD]">{order.customer}</td>
                  <td className="px-6 py-4 text-[#666]">{order.date}</td>
                  <td className="px-6 py-4 text-[#BDBDBD]">{order.items}</td>
                  <td className="px-6 py-4 font-medium text-white">{order.total}</td>
                  <td className="px-6 py-4">
                    <select 
                      className={`text-[10px] font-medium rounded-full uppercase tracking-wider px-2 py-1 outline-none appearance-none border cursor-pointer ${getStatusColor(order.status)}`}
                      defaultValue={order.status}
                    >
                      <option value="Processing" className="bg-[#121212] text-white">Processing</option>
                      <option value="Shipped" className="bg-[#121212] text-white">Shipped</option>
                      <option value="Delivered" className="bg-[#121212] text-white">Delivered</option>
                      <option value="Cancelled" className="bg-[#121212] text-white">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[#666] hover:text-white transition-colors"><Eye size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}

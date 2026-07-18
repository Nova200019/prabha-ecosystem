'use client';

import GlassCard from '@/components/ui/GlassCard';
import { Search, Filter, Mail, MoreVertical } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function AdminCustomersPage() {
  const customers = [
    { id: 'CUST-001', name: 'Arjun Mehta', email: 'arjun@example.com', role: 'Architect', orders: 12, spent: '₹45,20,000', joinDate: 'Jan 2023' },
    { id: 'CUST-002', name: 'Priya Sharma', email: 'priya@example.com', role: 'Customer', orders: 3, spent: '₹2,85,000', joinDate: 'Mar 2023' },
    { id: 'CUST-003', name: 'Karan Singhania', email: 'karan@luxuryhomes.com', role: 'Dealer', orders: 45, spent: '₹1,24,00,000', joinDate: 'Nov 2022' },
    { id: 'CUST-004', name: 'Neha Gupta', email: 'neha@example.com', role: 'Customer', orders: 1, spent: '₹1,50,000', joinDate: 'Oct 2023' },
  ];

  const getRoleBadge = (role: string) => {
    switch(role) {
      case 'Architect': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Dealer': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default: return 'bg-[#1f1f1f] text-[#BDBDBD] border-[#333]';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-white tracking-tight">Customers</h1>
      </div>

      <GlassCard className="bg-[#0A0A0A] border-[#1f1f1f] overflow-hidden">
        <div className="p-4 border-b border-[#1f1f1f] flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative max-w-sm w-full">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666]" />
            <input type="text" placeholder="Search customers..." className="w-full bg-[#121212] border border-[#1f1f1f] rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#333] transition-colors" />
          </div>
          <div className="flex gap-2">
            <select className="bg-[#121212] border border-[#1f1f1f] rounded-md px-3 py-2 text-sm text-white outline-none">
              <option>All Roles</option>
              <option>Customer</option>
              <option>Architect</option>
              <option>Dealer</option>
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
                <th className="px-6 py-3 font-medium text-[#888888]">Name</th>
                <th className="px-6 py-3 font-medium text-[#888888]">Role</th>
                <th className="px-6 py-3 font-medium text-[#888888]">Orders</th>
                <th className="px-6 py-3 font-medium text-[#888888]">Total Spent</th>
                <th className="px-6 py-3 font-medium text-[#888888]">Joined</th>
                <th className="px-6 py-3 font-medium text-[#888888] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f1f1f]">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-[#121212]/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-white">{customer.name}</div>
                    <div className="text-xs text-[#666]">{customer.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-[10px] font-medium rounded-full uppercase tracking-wider border ${getRoleBadge(customer.role)}`}>
                      {customer.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#BDBDBD]">{customer.orders}</td>
                  <td className="px-6 py-4 font-medium text-white">{customer.spent}</td>
                  <td className="px-6 py-4 text-[#666]">{customer.joinDate}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-[#666] hover:text-white transition-colors"><Mail size={16} /></button>
                      <button className="p-1.5 text-[#666] hover:text-white transition-colors"><MoreVertical size={16} /></button>
                    </div>
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

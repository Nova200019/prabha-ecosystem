'use client';

import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';

export default function AdminProductsPage() {
  const products = [
    { id: 'PRD-001', name: 'Aurora Freestanding Tub', category: 'Bathtubs', price: '₹3,50,000', stock: 12, status: 'Active', img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=100&q=80' },
    { id: 'PRD-002', name: 'Golden Brass Faucet', category: 'Faucets', price: '₹45,000', stock: 45, status: 'Active', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=100&q=80' },
    { id: 'PRD-003', name: 'Obsidian Smart Shower', category: 'Showers', price: '₹1,20,000', stock: 0, status: 'Out of Stock', img: 'https://images.unsplash.com/photo-1595514535316-24f4699564c7?auto=format&fit=crop&w=100&q=80' },
    { id: 'PRD-004', name: 'Lumina Vanity Unit', category: 'Vanities', price: '₹2,80,000', stock: 5, status: 'Active', img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=100&q=80' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <h1 className="text-2xl font-bold text-white tracking-tight">Products</h1>
        <Button variant="primary" className="text-sm flex items-center gap-2 h-9 px-4">
          <Plus size={16} /> Add Product
        </Button>
      </div>

      <GlassCard className="bg-[#0A0A0A] border-[#1f1f1f] overflow-hidden">
        <div className="p-4 border-b border-[#1f1f1f] flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative max-w-sm w-full">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666]" />
            <input type="text" placeholder="Search products..." className="w-full bg-[#121212] border border-[#1f1f1f] rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#333] transition-colors" />
          </div>
          <Button variant="secondary" className="text-sm flex items-center gap-2 h-9 px-4 border-[#1f1f1f]">
            <Filter size={16} /> Filters
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#121212] border-b border-[#1f1f1f]">
              <tr>
                <th className="px-6 py-3 font-medium text-[#888888] w-12">
                  <input type="checkbox" className="bg-[#050505] border-[#1f1f1f] rounded" />
                </th>
                <th className="px-6 py-3 font-medium text-[#888888]">Product</th>
                <th className="px-6 py-3 font-medium text-[#888888]">Category</th>
                <th className="px-6 py-3 font-medium text-[#888888]">Price</th>
                <th className="px-6 py-3 font-medium text-[#888888]">Stock</th>
                <th className="px-6 py-3 font-medium text-[#888888]">Status</th>
                <th className="px-6 py-3 font-medium text-[#888888] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f1f1f]">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-[#121212]/50 transition-colors group">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="bg-[#050505] border-[#1f1f1f] rounded" />
                  </td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[#1f1f1f] relative overflow-hidden">
                      <Image src={product.img} alt={product.name} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{product.name}</div>
                      <div className="text-xs text-[#666]">{product.id}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#BDBDBD]">{product.category}</td>
                  <td className="px-6 py-4 text-white">{product.price}</td>
                  <td className="px-6 py-4 text-[#BDBDBD]">{product.stock}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-[10px] font-medium rounded-full uppercase tracking-wider border ${
                      product.status === 'Active' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-[#666] hover:text-white transition-colors"><Edit size={16} /></button>
                    <button className="p-1.5 text-[#666] hover:text-red-400 transition-colors ml-1"><Trash2 size={16} /></button>
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

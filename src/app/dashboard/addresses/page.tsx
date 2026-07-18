'use client';

import { useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { MapPin, Plus, Edit2, Trash2 } from 'lucide-react';

export default function AddressesPage() {
  const addresses = [
    {
      id: 1,
      name: 'Home',
      fullName: 'John Doe',
      street: '123 Luxury Lane, Penthouse 4',
      city: 'Mumbai, Maharashtra',
      zip: '400050',
      phone: '+91 98765 43210',
      isDefault: true
    },
    {
      id: 2,
      name: 'Office',
      fullName: 'John Doe',
      street: '45 Corporate Park, Tower B',
      city: 'Mumbai, Maharashtra',
      zip: '400051',
      phone: '+91 98765 43211',
      isDefault: false
    }
  ];

  return (
    <div className="space-y-8">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-serif text-white">Saved Addresses</h1>
            <p className="text-[#BDBDBD] mt-1">Manage your delivery and billing addresses.</p>
          </div>
          <Button variant="primary" className="flex items-center gap-2">
            <Plus size={16} /> Add New Address
          </Button>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {addresses.map((addr, i) => (
          <ScrollReveal key={addr.id} delay={0.1 * i}>
            <GlassCard className="h-full relative overflow-hidden group">
              {addr.isDefault && (
                <div className="absolute top-0 right-0 bg-[#C9A96E] text-black text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-bl-lg z-10">
                  Default
                </div>
              )}
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#1f1f1f] flex items-center justify-center text-[#C9A96E]">
                    <MapPin size={20} />
                  </div>
                  <h3 className="text-lg font-medium text-white">{addr.name}</h3>
                </div>
                
                <div className="space-y-2 text-sm text-[#BDBDBD] flex-1">
                  <p className="text-white font-medium">{addr.fullName}</p>
                  <p>{addr.street}</p>
                  <p>{addr.city} - {addr.zip}</p>
                  <p className="pt-2">{addr.phone}</p>
                </div>
                
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#1f1f1f]">
                  <button className="text-sm text-[#C9A96E] hover:text-[#b0925c] flex items-center gap-1 transition-colors">
                    <Edit2 size={14} /> Edit
                  </button>
                  <div className="w-px h-4 bg-[#1f1f1f]"></div>
                  <button className="text-sm text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors">
                    <Trash2 size={14} /> Remove
                  </button>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { Package, Truck, CheckCircle2, RotateCw, Download } from 'lucide-react';
import Image from 'next/image';

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'Processing', 'Shipped', 'Delivered'];
  
  const orders = [
    {
      id: '#ORD-2023-894',
      date: '12 Oct, 2023',
      total: '$4,250.00',
      status: 'Delivered',
      currentStep: 4,
      items: [
        { name: 'Aurora Marble Basin', qty: 1, price: '$2,100.00', img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80' },
        { name: 'Golden Brass Faucet', qty: 1, price: '$2,150.00', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80' }
      ]
    },
    {
      id: '#ORD-2023-895',
      date: '15 Oct, 2023',
      total: '$850.00',
      status: 'Shipped',
      currentStep: 3,
      items: [
        { name: 'Onyx Soap Dispenser', qty: 1, price: '$850.00', img: 'https://images.unsplash.com/photo-1595514535316-24f4699564c7?auto=format&fit=crop&q=80' }
      ]
    }
  ];

  const filteredOrders = activeTab === 'All' ? orders : orders.filter(o => o.status === activeTab);

  const steps = [
    { name: 'Ordered', icon: Package },
    { name: 'Confirmed', icon: CheckCircle2 },
    { name: 'Packed', icon: Package },
    { name: 'Shipped', icon: Truck },
    { name: 'Delivered', icon: CheckCircle2 }
  ];

  return (
    <div className="space-y-8">
      <ScrollReveal>
        <h1 className="text-3xl font-serif text-white">Order History</h1>
        <p className="text-[#BDBDBD] mt-1">Track, return or purchase items again.</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex space-x-1 border-b border-[#1f1f1f] mb-6">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab 
                  ? 'border-[#C9A96E] text-[#C9A96E]' 
                  : 'border-transparent text-[#BDBDBD] hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="space-y-6">
        {filteredOrders.map((order, i) => (
          <ScrollReveal key={order.id} delay={0.2 + (i * 0.1)}>
            <GlassCard className="overflow-hidden">
              <div className="p-6 bg-[#0A0A0A] border-b border-[#1f1f1f] flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex gap-8">
                  <div>
                    <p className="text-xs text-[#BDBDBD] uppercase tracking-wider">Order Number</p>
                    <p className="text-sm font-medium text-white mt-1">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#BDBDBD] uppercase tracking-wider">Date Placed</p>
                    <p className="text-sm font-medium text-white mt-1">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#BDBDBD] uppercase tracking-wider">Total Amount</p>
                    <p className="text-sm font-medium text-white mt-1">{order.total}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="secondary" className="text-xs h-8 px-3 flex gap-2">
                    <Download size={14} /> Invoice
                  </Button>
                  <Button variant="primary" className="text-xs h-8 px-3 flex gap-2">
                    <RotateCw size={14} /> Reorder
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="relative mb-8">
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#1f1f1f] -translate-y-1/2 rounded-full"></div>
                  <div 
                    className="absolute top-1/2 left-0 h-0.5 bg-[#C9A96E] -translate-y-1/2 rounded-full transition-all duration-500"
                    style={{ width: `${(order.currentStep / (steps.length - 1)) * 100}%` }}
                  ></div>
                  
                  <div className="relative flex justify-between">
                    {steps.map((step, idx) => {
                      const Icon = step.icon;
                      const isActive = idx <= order.currentStep;
                      return (
                        <div key={step.name} className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors duration-300 bg-[#121212] z-10 ${
                            isActive ? 'border-[#C9A96E] text-[#C9A96E]' : 'border-[#1f1f1f] text-[#404040]'
                          }`}>
                            <Icon size={14} />
                          </div>
                          <span className={`text-[10px] uppercase tracking-wider mt-2 font-medium ${
                            isActive ? 'text-[#C9A96E]' : 'text-[#404040]'
                          }`}>{step.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="space-y-4">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-center p-4 rounded-lg bg-[#1a1a1a]/50 border border-[#1f1f1f]">
                      <div className="w-16 h-16 rounded-md overflow-hidden relative bg-black">
                        <Image src={item.img} alt={item.name} fill className="object-cover opacity-80" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-white">{item.name}</h4>
                        <p className="text-xs text-[#BDBDBD] mt-1">Qty: {item.qty}</p>
                      </div>
                      <div className="text-sm font-medium text-white">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

'use client';

import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { Trash2, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WishlistPage() {
  const wishlistItems = [
    {
      id: 1,
      name: 'Aurora Freestanding Tub',
      price: '$4,500.00',
      category: 'Bathtubs',
      img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80',
      inStock: true
    },
    {
      id: 2,
      name: 'Obsidian Smart Shower',
      price: '$2,800.00',
      category: 'Showers',
      img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
      inStock: false
    },
    {
      id: 3,
      name: 'Lumina Vanity Unit',
      price: '$3,200.00',
      category: 'Vanities',
      img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80',
      inStock: true
    }
  ];

  return (
    <div className="space-y-8">
      <ScrollReveal>
        <h1 className="text-3xl font-serif text-white">Your Wishlist</h1>
        <p className="text-[#BDBDBD] mt-1">Saved items for your next luxury upgrade.</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item, i) => (
          <ScrollReveal key={item.id} delay={0.1 * i}>
            <GlassCard className="overflow-hidden group h-full flex flex-col">
              <div className="relative h-64 w-full bg-black">
                <Image src={item.img} alt={item.name} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <button className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:text-red-400 transition-colors z-10">
                  <Trash2 size={16} />
                </button>
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-white text-xs font-medium uppercase tracking-wider rounded">Out of Stock</span>
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="text-[10px] text-[#C9A96E] uppercase tracking-widest mb-2">{item.category}</div>
                <h3 className="text-lg font-medium text-white mb-2 line-clamp-2">{item.name}</h3>
                <div className="text-lg font-light text-[#BDBDBD] mb-6">{item.price}</div>
                <div className="mt-auto">
                  <Button 
                    variant={item.inStock ? 'primary' : 'secondary'} 
                    className="w-full flex items-center justify-center gap-2"
                    disabled={!item.inStock}
                  >
                    <ShoppingCart size={16} />
                    {item.inStock ? 'Add to Cart' : 'Notify Me'}
                  </Button>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

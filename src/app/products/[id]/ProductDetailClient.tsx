"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Shield, Truck, Package, MessageCircle, Heart, Share2, Plus, Minus } from "lucide-react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useCart } from "@/components/cart/CartContext";

export default function ProductDetailClient({ product, relatedProducts }: { product: any, relatedProducts: any[] }) {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState(product.finishes?.[0]);
  const [activeTab, setActiveTab] = useState("description");
  
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      image: product.images[0],
      price: product.price,
      quantity,
      finish: selectedFinish,
    });
    // Add success toast here
  };

  return (
    <main className="pt-24 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Images Left (70%) */}
          <div className="w-full lg:w-[65%]">
            <ScrollReveal>
              <div className="relative aspect-square md:aspect-[4/3] bg-surface rounded-3xl overflow-hidden mb-6">
                <Image
                  src={product.images[activeImage] || "/images/placeholder.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex gap-4 overflow-x-auto custom-scrollbar pb-2">
                {product.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-colors ${activeImage === idx ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Info Right (35%) */}
          <div className="w-full lg:w-[35%] flex flex-col justify-center">
            <ScrollReveal delay={0.2}>
              <div className="text-gold text-sm font-medium tracking-widest uppercase mb-4">{product.brand}</div>
              <h1 className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-white/20"}`} />
                  ))}
                </div>
                <span className="text-text-secondary text-sm">(42 Reviews)</span>
              </div>
              
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-3xl text-white font-light">₹{product.price.toLocaleString()}</span>
                {product.mrp && <span className="text-xl text-text-secondary line-through">₹{product.mrp.toLocaleString()}</span>}
                {product.mrp && <span className="px-2 py-1 bg-gold/20 text-gold text-xs rounded-md font-medium">Save {Math.round(((product.mrp - product.price) / product.mrp) * 100)}%</span>}
              </div>

              <div className="w-full h-px bg-white/10 mb-8" />

              {product.finishes && (
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white font-medium">Select Finish</span>
                    <span className="text-text-secondary text-sm">{selectedFinish}</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.finishes.map((finish: string) => (
                      <button
                        key={finish}
                        onClick={() => setSelectedFinish(finish)}
                        className={`px-4 py-3 rounded-xl border text-sm transition-all ${selectedFinish === finish ? "border-gold bg-gold/10 text-gold" : "border-white/20 text-white hover:border-white/50"}`}
                      >
                        {finish}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-6 mb-8">
                <span className="text-white font-medium">Quantity</span>
                <div className="flex items-center border border-white/20 rounded-xl overflow-hidden">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-white/10 text-white transition-colors"><Minus className="w-4 h-4" /></button>
                  <span className="w-12 text-center text-white">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-white/10 text-white transition-colors"><Plus className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                <Button variant="primary" className="w-full py-4 text-lg" onClick={handleAddToCart}>Add to Cart</Button>
                <div className="flex gap-4">
                  <Button variant="secondary" className="flex-1 flex items-center justify-center gap-2"><Heart className="w-4 h-4" /> Wishlist</Button>
                  <Button variant="ghost" className="flex-1">Request Quote</Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-text-secondary">
                <div className="flex items-center gap-3"><Shield className="w-5 h-5 text-gold" /> 10 Year Warranty</div>
                <div className="flex items-center gap-3"><Truck className="w-5 h-5 text-gold" /> Free Shipping</div>
                <div className="flex items-center gap-3"><Package className="w-5 h-5 text-gold" /> Secure Packaging</div>
                <div className="flex items-center gap-3"><Share2 className="w-5 h-5 text-gold" /> Share Product</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Details Tabs */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <ScrollReveal>
          <div className="flex gap-8 border-b border-white/10 mb-8 overflow-x-auto custom-scrollbar">
            {["description", "specifications", "installation", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-lg font-medium capitalize whitespace-nowrap transition-colors relative ${activeTab === tab ? "text-gold" : "text-text-secondary hover:text-white"}`}
              >
                {tab}
                {activeTab === tab && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />}
              </button>
            ))}
          </div>

          <div className="min-h-[300px]">
            {activeTab === "description" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="prose prose-invert max-w-3xl text-text-secondary text-lg leading-relaxed">
                <p>{product.description}</p>
                <p>Designed with meticulous attention to detail, this masterpiece elevates your space with its unparalleled aesthetic and premium build quality. Manufactured using state-of-the-art technology to ensure longevity and timeless beauty.</p>
              </motion.div>
            )}
            
            {activeTab === "specifications" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl">
                <div className="divide-y divide-white/10">
                  {Object.entries(product.features || {}).map(([key, val]) => (
                    <div key={key} className="py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-12">
                      <span className="text-text-secondary font-medium w-48 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-white">{String(val)}</span>
                    </div>
                  ))}
                  <div className="py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-12">
                     <span className="text-text-secondary font-medium w-48">Material</span>
                     <span className="text-white">{product.material || "Premium Grade"}</span>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Other tabs left as mock for brevity */}
            {["installation", "reviews"].includes(activeTab) && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-text-secondary py-12 text-center">
                <p>Content for {activeTab} will be available soon.</p>
              </motion.div>
            )}
          </div>
        </ScrollReveal>
      </section>

      {/* Floating WhatsApp */}
      <a href={`https://wa.me/919876543210?text=I'm interested in ${product.name}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform z-40">
        <MessageCircle className="w-8 h-8" />
      </a>
    </main>
  );
}

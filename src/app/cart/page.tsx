"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useCart } from "@/components/cart/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  
  const gst = totalPrice * 0.18;
  const shipping = totalPrice > 50000 ? 0 : 2500;
  const grandTotal = totalPrice + gst + shipping;

  return (
    <SmoothScroll>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-12">Your Cart</h1>
        </ScrollReveal>

        {items.length === 0 ? (
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col items-center justify-center py-24 text-center bg-surface/30 rounded-3xl border border-white/5 backdrop-blur-sm">
              <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <ShoppingBag className="w-10 h-10 text-white/30" />
              </div>
              <h2 className="text-2xl text-white mb-4">Your cart is empty</h2>
              <p className="text-text-secondary mb-8 max-w-md">Looks like you haven&apos;t added any luxury pieces to your cart yet.</p>
              <Link href="/products">
                <Button variant="primary" className="flex items-center gap-2">Explore Collection <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </ScrollReveal>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Cart Items */}
            <div className="w-full lg:w-[65%] space-y-6">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={`${item.productId}-${item.finish}-${item.size}`}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  >
                    <GlassCard className="p-4 sm:p-6 flex flex-col sm:flex-row gap-6 relative group">
                      <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-surface flex-shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-4 mb-2">
                            <Link href={`/products/${item.productId}`}>
                              <h3 className="text-lg font-medium text-white hover:text-gold transition-colors">{item.name}</h3>
                            </Link>
                            <button
                              onClick={() => removeItem(item.productId)}
                              className="text-text-secondary hover:text-red-400 transition-colors p-2 -mr-2"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-text-secondary mb-4">
                            {item.finish && <span className="bg-white/5 px-3 py-1 rounded-full">Finish: {item.finish}</span>}
                            {item.size && <span className="bg-white/5 px-3 py-1 rounded-full">Size: {item.size}</span>}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-white/20 rounded-lg overflow-hidden">
                            <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} className="p-2 hover:bg-white/10 text-white transition-colors"><Minus className="w-4 h-4" /></button>
                            <span className="w-10 text-center text-white text-sm">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="p-2 hover:bg-white/10 text-white transition-colors"><Plus className="w-4 h-4" /></button>
                          </div>
                          <span className="text-lg font-medium text-white">₹{(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary Sidebar */}
            <div className="w-full lg:w-[35%]">
              <div className="sticky top-32">
                <GlassCard className="p-8">
                  <h3 className="text-xl font-medium text-white mb-6">Order Summary</h3>
                  
                  <div className="space-y-4 text-sm mb-6">
                    <div className="flex justify-between text-text-secondary">
                      <span>Subtotal</span>
                      <span className="text-white">₹{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>GST (18%)</span>
                      <span className="text-white">₹{gst.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Estimated Shipping</span>
                      <span className="text-white">{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString()}`}</span>
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-white/10 mb-6" />
                  
                  <div className="flex justify-between items-end mb-8">
                    <span className="text-white font-medium">Total</span>
                    <div className="text-right">
                      <span className="text-3xl text-gold font-light block">₹{grandTotal.toLocaleString()}</span>
                      <span className="text-xs text-text-secondary">Includes taxes</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Link href="/checkout" className="block w-full">
                      <Button variant="primary" className="w-full py-4">Proceed to Checkout</Button>
                    </Link>
                    <Link href="/products" className="block w-full">
                      <Button variant="ghost" className="w-full">Continue Shopping</Button>
                    </Link>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </SmoothScroll>
  );
}

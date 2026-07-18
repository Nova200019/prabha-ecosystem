/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CreditCard, Wallet, Smartphone, Banknote, ShieldCheck } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useCart } from "@/components/cart/CartContext";

const STEPS = ["Shipping", "Payment", "Review"];

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  
  const gst = totalPrice * 0.18;
  const shipping = totalPrice > 50000 ? 0 : 2500;
  const grandTotal = totalPrice + gst + shipping;

  const handleNext = () => setCurrentStep((p) => Math.min(STEPS.length - 1, p + 1));
  const handleBack = () => setCurrentStep((p) => Math.max(0, p - 1));
  
  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  if (isOrderPlaced) {
    return (
      <SmoothScroll>
        <Navigation />
        <main className="min-h-screen pt-32 flex items-center justify-center px-4">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-lg w-full">
            <GlassCard className="p-12 flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-8"
              >
                <Check className="w-12 h-12" />
              </motion.div>
              <h1 className="text-3xl text-white font-medium mb-4">Order Confirmed</h1>
              <p className="text-text-secondary mb-8">Thank you for your purchase. Your luxury pieces are being prepared for dispatch.</p>
              <div className="p-4 bg-surface rounded-xl w-full mb-8 border border-white/5">
                <p className="text-sm text-text-secondary mb-1">Order Number</p>
                <p className="text-xl font-mono text-white tracking-wider">PRB-{Math.floor(Math.random() * 1000000)}</p>
              </div>
              <Button variant="primary" className="w-full" onClick={() => window.location.href = '/products'}>Continue Shopping</Button>
            </GlassCard>
          </motion.div>
        </main>
      </SmoothScroll>
    );
  }

  return (
    <SmoothScroll>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Steps Indicator */}
          <div className="flex items-center justify-center mb-16 max-w-2xl mx-auto">
            {STEPS.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-500 ${currentStep >= idx ? "bg-gold text-bg" : "bg-surface border border-white/20 text-text-secondary"}`}>
                    {currentStep > idx ? <Check className="w-5 h-5" /> : idx + 1}
                  </div>
                  <span className={`absolute top-12 text-sm whitespace-nowrap transition-colors duration-500 ${currentStep >= idx ? "text-white font-medium" : "text-text-secondary"}`}>{step}</span>
                </div>
                {idx < STEPS.length - 1 && (
                  <div className={`flex-1 h-px transition-colors duration-500 ${currentStep > idx ? "bg-gold" : "bg-white/20"}`} />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-12 mt-24">
            {/* Main Content Area */}
            <div className="w-full lg:w-[60%]">
              <AnimatePresence mode="wait">
                {/* Step 1: Shipping */}
                {currentStep === 0 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-6">
                    <h2 className="text-2xl text-white font-medium mb-6">Shipping Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-text-secondary">First Name</label>
                        <input type="text" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors" defaultValue="Aditya" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-text-secondary">Last Name</label>
                        <input type="text" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors" defaultValue="Roy" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm text-text-secondary">Email Address</label>
                        <input type="email" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors" defaultValue="aditya@example.com" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm text-text-secondary">Street Address</label>
                        <input type="text" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors" defaultValue="12, Jubilee Hills" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-text-secondary">City</label>
                        <input type="text" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors" defaultValue="Hyderabad" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-text-secondary">PIN Code</label>
                        <input type="text" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors" defaultValue="500033" />
                      </div>
                    </div>
                    <div className="pt-6">
                      <Button variant="primary" className="w-full" onClick={handleNext}>Continue to Payment</Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Payment */}
                {currentStep === 1 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-6">
                    <h2 className="text-2xl text-white font-medium mb-6">Payment Method</h2>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { id: "upi", icon: Smartphone, label: "UPI (GPay, PhonePe, Paytm)" },
                        { id: "card", icon: CreditCard, label: "Credit / Debit Card" },
                        { id: "netbanking", icon: Wallet, label: "Net Banking" },
                        { id: "cod", icon: Banknote, label: "Cash on Delivery" },
                      ].map((method) => (
                        <div
                          key={method.id}
                          onClick={() => setPaymentMethod(method.id)}
                          className={`p-5 rounded-xl border flex items-center gap-4 cursor-pointer transition-all ${paymentMethod === method.id ? "border-gold bg-gold/5" : "border-white/10 bg-surface hover:border-white/30"}`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${paymentMethod === method.id ? "bg-gold/20 text-gold" : "bg-white/5 text-text-secondary"}`}>
                            <method.icon className="w-5 h-5" />
                          </div>
                          <span className={`font-medium ${paymentMethod === method.id ? "text-white" : "text-text-secondary"}`}>{method.label}</span>
                          {paymentMethod === method.id && <Check className="w-5 h-5 text-gold ml-auto" />}
                        </div>
                      ))}
                    </div>
                    <div className="pt-6 flex gap-4">
                      <Button variant="ghost" onClick={handleBack}>Back</Button>
                      <Button variant="primary" className="flex-1" onClick={handleNext}>Review Order</Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Review */}
                {currentStep === 2 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-8">
                    <div>
                      <h2 className="text-2xl text-white font-medium mb-6">Review Your Order</h2>
                      <div className="space-y-4">
                        {items.map((item) => (
                          <div key={`${item.productId}-${item.finish}`} className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5">
                            <div className="w-16 h-16 rounded-lg bg-white/5 relative overflow-hidden flex-shrink-0">
                              <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-medium">{item.name}</h4>
                              <p className="text-sm text-text-secondary">Qty: {item.quantity}</p>
                            </div>
                            <span className="text-white font-medium">₹{(item.price * item.quantity).toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-surface/50 border border-white/5 rounded-xl p-6 flex items-start gap-4">
                      <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-medium mb-1">Secure Transaction</h4>
                        <p className="text-sm text-text-secondary">Your payment information is encrypted and secure. We do not store your credit card details.</p>
                      </div>
                    </div>

                    <div className="pt-6 flex gap-4">
                      <Button variant="ghost" onClick={handleBack}>Back</Button>
                      <Button variant="primary" className="flex-1 text-lg" onClick={handlePlaceOrder}>Place Order (₹{grandTotal.toLocaleString()})</Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar Summary */}
            <div className="w-full lg:w-[40%]">
              <div className="sticky top-32">
                <GlassCard className="p-8">
                  <h3 className="text-xl font-medium text-white mb-6">Order Summary</h3>
                  <div className="space-y-4 text-sm mb-6">
                    <div className="flex justify-between text-text-secondary">
                      <span>Subtotal ({items.length} items)</span>
                      <span className="text-white">₹{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>GST (18%)</span>
                      <span className="text-white">₹{gst.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Shipping</span>
                      <span className="text-white">{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString()}`}</span>
                    </div>
                  </div>
                  <div className="w-full h-px bg-white/10 mb-6" />
                  <div className="flex justify-between items-end">
                    <span className="text-white font-medium">Total</span>
                    <span className="text-3xl text-gold font-light block">₹{grandTotal.toLocaleString()}</span>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </SmoothScroll>
  );
}

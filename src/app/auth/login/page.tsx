'use client';

import { useState } from 'react';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import { Mail, Phone, Lock, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginPage() {
  const [method, setMethod] = useState<'email' | 'phone'>('email');

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col justify-center items-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A96E]/5 via-[#050505] to-[#050505] pointer-events-none" />
      
      <Link href="/" className="absolute top-8 left-8 text-[#BDBDBD] hover:text-white flex items-center gap-2 transition-colors z-10">
        <ChevronLeft size={20} /> Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif tracking-widest text-[#C9A96E] mb-2">PRABHA</h1>
          <p className="text-[#BDBDBD] text-sm">Welcome back to luxury</p>
        </div>

        <GlassCard className="p-8 backdrop-blur-xl bg-[#121212]/80 border-[#1f1f1f]">
          <div className="flex p-1 bg-[#0A0A0A] rounded-lg mb-8 border border-[#1f1f1f]">
            <button
              onClick={() => setMethod('email')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                method === 'email' ? 'bg-[#1f1f1f] text-white shadow-sm' : 'text-[#BDBDBD] hover:text-white'
              }`}
            >
              Email
            </button>
            <button
              onClick={() => setMethod('phone')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                method === 'phone' ? 'bg-[#1f1f1f] text-white shadow-sm' : 'text-[#BDBDBD] hover:text-white'
              }`}
            >
              Phone
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.form
              key={method}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              {method === 'email' ? (
                <>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">Email Address</label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#404040]" />
                      <input type="email" className="w-full bg-[#050505] border border-[#1f1f1f] rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">Password</label>
                      <a href="#" className="text-xs text-[#C9A96E] hover:underline">Forgot?</a>
                    </div>
                    <div className="relative">
                      <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#404040]" />
                      <input type="password" className="w-full bg-[#050505] border border-[#1f1f1f] rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" placeholder="••••••••" />
                    </div>
                  </div>
                  <Button variant="primary" className="w-full mt-6 py-3">Sign In</Button>
                </>
              ) : (
                <>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">Phone Number</label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#404040]" />
                      <div className="flex">
                        <span className="bg-[#0A0A0A] border border-[#1f1f1f] border-r-0 rounded-l-lg pl-10 pr-3 py-3 text-[#BDBDBD]">+91</span>
                        <input type="tel" className="flex-1 bg-[#050505] border border-[#1f1f1f] rounded-r-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" placeholder="00000 00000" />
                      </div>
                    </div>
                  </div>
                  <Button variant="primary" className="w-full mt-6 py-3">Send OTP</Button>
                </>
              )}
            </motion.form>
          </AnimatePresence>

          <div className="mt-8 pt-6 border-t border-[#1f1f1f]">
            <p className="text-center text-sm text-[#BDBDBD]">
              Don't have an account?{' '}
              <Link href="/auth/register" className="text-[#C9A96E] hover:underline font-medium">
                Register
              </Link>
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import { ChevronLeft, User, Briefcase, Store } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RegisterPage() {
  const [role, setRole] = useState<'customer' | 'architect' | 'dealer'>('customer');

  const roles = [
    { id: 'customer', label: 'Customer', icon: User },
    { id: 'architect', label: 'Architect', icon: Briefcase },
    { id: 'dealer', label: 'Dealer', icon: Store }
  ] as const;

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col justify-center items-center p-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A96E]/5 via-[#050505] to-[#050505] pointer-events-none" />
      
      <Link href="/" className="absolute top-8 left-8 text-[#BDBDBD] hover:text-white flex items-center gap-2 transition-colors z-10">
        <ChevronLeft size={20} /> Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-xl z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif tracking-widest text-[#C9A96E] mb-2">PRABHA</h1>
          <p className="text-[#BDBDBD] text-sm">Create your exclusive account</p>
        </div>

        <GlassCard className="p-8 backdrop-blur-xl bg-[#121212]/80 border-[#1f1f1f]">
          <div className="grid grid-cols-3 gap-3 mb-8">
            {roles.map((r) => {
              const Icon = r.icon;
              return (
                <button
                  key={r.id}
                  onClick={() => setRole(r.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 ${
                    role === r.id 
                      ? 'border-[#C9A96E] bg-[#C9A96E]/10 text-[#C9A96E]' 
                      : 'border-[#1f1f1f] bg-[#0A0A0A] text-[#BDBDBD] hover:border-[#1f1f1f]/80'
                  }`}
                >
                  <Icon size={24} className="mb-2" />
                  <span className="text-xs font-medium uppercase tracking-wider">{r.label}</span>
                </button>
              );
            })}
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">First Name</label>
                <input type="text" className="w-full bg-[#050505] border border-[#1f1f1f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">Last Name</label>
                <input type="text" className="w-full bg-[#050505] border border-[#1f1f1f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">Email Address</label>
              <input type="email" className="w-full bg-[#050505] border border-[#1f1f1f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">Phone Number</label>
              <input type="tel" className="w-full bg-[#050505] border border-[#1f1f1f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
            </div>

            <AnimatePresence mode="sync">
              {role === 'architect' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-5 overflow-hidden"
                >
                  <div className="space-y-1 pt-2">
                    <label className="text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">Firm Name</label>
                    <input type="text" className="w-full bg-[#050505] border border-[#1f1f1f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">License Number</label>
                    <input type="text" className="w-full bg-[#050505] border border-[#1f1f1f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
                  </div>
                </motion.div>
              )}

              {role === 'dealer' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-5 overflow-hidden"
                >
                  <div className="space-y-1 pt-2">
                    <label className="text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">Business Name</label>
                    <input type="text" className="w-full bg-[#050505] border border-[#1f1f1f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">GST Number</label>
                    <input type="text" className="w-full bg-[#050505] border border-[#1f1f1f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">Password</label>
                <input type="password" className="w-full bg-[#050505] border border-[#1f1f1f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">Confirm</label>
                <input type="password" className="w-full bg-[#050505] border border-[#1f1f1f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input type="checkbox" id="terms" className="mt-1 bg-[#050505] border-[#1f1f1f] text-[#C9A96E] focus:ring-[#C9A96E] rounded" />
              <label htmlFor="terms" className="text-sm text-[#BDBDBD]">
                I agree to the <a href="#" className="text-[#C9A96E] hover:underline">Terms of Service</a> and <a href="#" className="text-[#C9A96E] hover:underline">Privacy Policy</a>
              </label>
            </div>

            <Button variant="primary" className="w-full py-4 text-sm uppercase tracking-widest mt-6">Create Account</Button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#1f1f1f]">
            <p className="text-center text-sm text-[#BDBDBD]">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-[#C9A96E] hover:underline font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}

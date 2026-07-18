'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Package, Heart, MapPin, Settings, LogOut, Menu, X, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Orders', href: '/dashboard/orders', icon: Package },
  { name: 'Wishlist', href: '/dashboard/wishlist', icon: Heart },
  { name: 'Addresses', href: '/dashboard/addresses', icon: MapPin },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -256 }}
        animate={{ x: isSidebarOpen ? 0 : -256 }}
        className={`fixed md:relative md:translate-x-0 z-50 w-64 h-full bg-[#121212] border-r border-[#1f1f1f] transition-transform duration-300 ease-in-out flex flex-col`}
      >
        <div className="p-6 flex items-center justify-between border-b border-[#1f1f1f]">
          <Link href="/" className="text-2xl font-serif tracking-widest text-[#C9A96E]">
            PRABHA
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-[#BDBDBD] hover:text-white">
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                  isActive 
                    ? 'bg-[#1f1f1f] text-[#C9A96E]' 
                    : 'text-[#BDBDBD] hover:bg-[#1f1f1f]/50 hover:text-white'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-[#C9A96E]' : ''} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-[#1f1f1f]">
          <Link
            href="/auth/login"
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#BDBDBD] hover:bg-[#1f1f1f]/50 hover:text-red-400 transition-colors duration-200"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </Link>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-4 md:px-8 bg-[#050505]/80 backdrop-blur-md border-b border-[#1f1f1f] z-30">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden text-[#BDBDBD] hover:text-white"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-medium hidden md:block">Welcome back, User</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-[#BDBDBD] hover:text-[#C9A96E] transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C9A96E] rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-[#1f1f1f] flex items-center justify-center text-sm font-medium">
              U
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

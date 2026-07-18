'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Package, ShoppingCart, BarChart3, Settings, Menu, X, Bell, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
  { name: 'Customers', href: '/admin/customers', icon: Users },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#050505] text-white font-sans overflow-hidden">
      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={{ x: -256 }}
        animate={{ x: isSidebarOpen ? 0 : -256 }}
        className={`fixed lg:relative lg:translate-x-0 z-50 w-64 h-full bg-[#0A0A0A] border-r border-[#1f1f1f] transition-transform duration-300 flex flex-col`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-[#1f1f1f]">
          <span className="text-xl font-bold tracking-wider text-white">PRABHA<span className="text-[#C9A96E]">ADMIN</span></span>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-[#BDBDBD] hover:text-white">
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-md transition-colors text-sm font-medium ${
                  isActive 
                    ? 'bg-[#1f1f1f] text-white' 
                    : 'text-[#888888] hover:bg-[#1f1f1f]/50 hover:text-white'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-white' : ''} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-[#1f1f1f]">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C9A96E] to-[#8B7355] flex items-center justify-center text-xs font-bold text-black">
              AD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Admin User</p>
              <p className="text-xs text-[#888888] truncate">admin@prabha.com</p>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-16 flex items-center justify-between px-4 lg:px-8 bg-[#0A0A0A] border-b border-[#1f1f1f]">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-[#BDBDBD] hover:text-white">
              <Menu size={20} />
            </button>
            <div className="hidden md:flex items-center relative">
              <Search size={16} className="absolute left-3 text-[#666]" />
              <input type="text" placeholder="Search..." className="w-64 bg-[#121212] border border-[#1f1f1f] rounded-md pl-9 pr-4 py-1.5 text-sm text-white focus:outline-none focus:border-[#333] transition-colors" />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-[#888888] hover:text-white transition-colors relative">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

'use client';

import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <ScrollReveal>
        <h1 className="text-3xl font-serif text-white">Settings</h1>
        <p className="text-[#BDBDBD] mt-1">Manage your account preferences.</p>
      </ScrollReveal>

      <div className="space-y-8">
        <ScrollReveal delay={0.1}>
          <GlassCard className="p-6">
            <h2 className="text-xl font-medium text-white mb-6">Personal Information</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#BDBDBD] mb-2">First Name</label>
                  <input type="text" defaultValue="John" className="w-full bg-[#121212] border border-[#1f1f1f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#BDBDBD] mb-2">Last Name</label>
                  <input type="text" defaultValue="Doe" className="w-full bg-[#121212] border border-[#1f1f1f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#BDBDBD] mb-2">Email Address</label>
                  <input type="email" defaultValue="john.doe@example.com" className="w-full bg-[#121212] border border-[#1f1f1f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#BDBDBD] mb-2">Phone Number</label>
                  <input type="tel" defaultValue="+91 98765 43210" className="w-full bg-[#121212] border border-[#1f1f1f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="primary">Save Changes</Button>
              </div>
            </form>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <GlassCard className="p-6">
            <h2 className="text-xl font-medium text-white mb-6">Change Password</h2>
            <form className="space-y-6">
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-[#BDBDBD] mb-2">Current Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-[#121212] border border-[#1f1f1f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#BDBDBD] mb-2">New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-[#121212] border border-[#1f1f1f] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors" />
                </div>
              </div>
              <div>
                <Button variant="secondary">Update Password</Button>
              </div>
            </form>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <GlassCard className="p-6 border-red-500/20 bg-red-500/5">
            <h2 className="text-xl font-medium text-white mb-2">Danger Zone</h2>
            <p className="text-[#BDBDBD] text-sm mb-6">Permanently delete your account and all of your content.</p>
            <Button variant="secondary" className="text-red-400 border-red-900 hover:bg-red-900/30">Delete Account</Button>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  );
}

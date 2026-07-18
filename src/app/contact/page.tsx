import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Contact Us | Prabha',
  description: 'Get in touch with Prabha for inquiries, appointments, and support.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeader title="Contact Us" subtitle="Get in Touch" />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            <div>
              <GlassCard className="p-8">
                <h3 className="text-2xl text-white font-medium mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-text-secondary">First Name</label>
                      <input type="text" className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-text-secondary">Last Name</label>
                      <input type="text" className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary">Email</label>
                    <input type="email" className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary">Inquiry Type</label>
                    <select className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                      <option>General Inquiry</option>
                      <option>Sales</option>
                      <option>Support</option>
                      <option>Architect/Dealer</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary">Message</label>
                    <textarea rows={4} className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"></textarea>
                  </div>
                  <Button variant="primary" className="w-full justify-center">Send Message</Button>
                </form>
              </GlassCard>
            </div>
            
            <div className="space-y-8">
              <GlassCard className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Showroom</h4>
                      <p className="text-text-secondary mt-1">123 Luxury Boulevard<br/>Design District<br/>City, State 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Phone</h4>
                      <p className="text-text-secondary mt-1">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Hours</h4>
                      <p className="text-text-secondary mt-1">Mon - Sat: 10:00 AM - 7:00 PM<br/>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-4">
                  <Button variant="secondary" className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </Button>
                  <Button variant="primary">Book Appointment</Button>
                </div>
              </GlassCard>
              
              <div className="h-64 rounded-2xl overflow-hidden border border-border relative">
                <div className="absolute inset-0 bg-surface/50 flex items-center justify-center">
                  <p className="text-text-secondary">Map Embed Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}

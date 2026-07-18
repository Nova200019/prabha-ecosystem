import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ContactForm from '@/components/ui/ContactForm';
import GlassCard from '@/components/ui/GlassCard';
import { Phone, Mail, MapPin, Clock, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Support & Contact | Prabha',
  description: 'Get in touch with Prabha for expert advice, support, and quotations on luxury tiles and bath fittings.',
};

const FAQS = [
  {
    q: 'Do you deliver across India?',
    a: 'Yes, we have a robust logistics network capable of delivering premium materials securely to any major city in India with specialized handling for large format slabs.'
  },
  {
    q: 'Can I get a physical sample before ordering?',
    a: 'We offer a sample service for architects and designers. For retail clients, we highly recommend visiting our experiential center to appreciate the true texture and scale.'
  },
  {
    q: 'What is the warranty on Jaquar products?',
    a: 'Jaquar offers up to a 10-year warranty on their bath fittings. Complete warranty details are provided at the time of purchase and vary by specific product line.'
  },
  {
    q: 'Do you provide installation services?',
    a: 'While we primarily supply materials, we have a curated list of certified master installers we can recommend for flawless execution of large format tiles and complex plumbing.'
  }
];

export default function SupportPage() {
  return (
    <SmoothScroll>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24 bg-[#050505]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Support & Contact" 
            subtitle="We are here to assist you in creating exceptional spaces. Reach out to our specialists."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Contact Info & FAQs */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal>
                <GlassCard className="p-8">
                  <h3 className="text-2xl font-light text-white mb-8">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-[#C9A96E] shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-[#BDBDBD] mb-1">Direct Line</p>
                        <p className="text-lg text-white font-medium">+91 080 4000 6864</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-[#C9A96E] shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-[#BDBDBD] mb-1">Email Inquiry</p>
                        <p className="text-lg text-white font-medium">luxury@prabha.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-[#C9A96E] shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-[#BDBDBD] mb-1">Experiential Center</p>
                        <p className="text-white leading-relaxed">
                          123, Luxury Boulevard<br />
                          Indiranagar, Bangalore<br />
                          Karnataka, 560038
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-[#C9A96E] shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-[#BDBDBD] mb-1">Business Hours</p>
                        <p className="text-white">Monday - Saturday</p>
                        <p className="text-[#BDBDBD] text-sm">10:00 AM - 7:30 PM</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <GlassCard className="p-8 bg-gradient-to-br from-[#111] to-[#0A0A0A]">
                  <h3 className="text-xl font-light text-white mb-6 flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#C9A96E]" />
                    Frequently Asked Questions
                  </h3>
                  
                  <div className="space-y-6">
                    {FAQS.map((faq, i) => (
                      <div key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                        <h4 className="text-white font-medium mb-2">{faq.q}</h4>
                        <p className="text-sm text-[#BDBDBD] leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.3} className="sticky top-32">
                <div className="mb-6">
                  <h3 className="text-3xl font-light text-white mb-2">Send a Message</h3>
                  <p className="text-[#BDBDBD]">Fill out the form below and our luxury consultant will get back to you within 24 hours.</p>
                </div>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}

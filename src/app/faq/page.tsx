'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';

const FAQ_DATA = [
  { question: "What is the warranty on your sanitaryware products?", answer: "We offer a 10-year warranty on most of our sanitaryware products. Specific terms vary by brand, such as Jaquar, which has its own extensive warranty policies." },
  { question: "Do you provide installation services?", answer: "While we do not provide direct installation services, we have a network of certified plumbers and contractors we can recommend for your projects." },
  { question: "Can I order samples of tiles?", answer: "Yes, tile samples are available in our showroom. For bulk or architect orders, we can arrange for samples to be delivered to your office or site." },
  { question: "What is the lead time for large marble orders?", answer: "Standard sizes are usually in stock. Custom cuts or large format imported slabs may take 3-6 weeks depending on availability." },
  { question: "Do you offer trade discounts?", answer: "Yes, we have dedicated programs for architects, interior designers, and contractors. Please visit our Architect Zone or Dealer Zone to register." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeader title="FAQ" subtitle="Common Questions" align="center" />
          
          <div className="relative mt-8 mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search questions..." 
              className="w-full bg-surface border border-border rounded-full py-4 pl-12 pr-6 text-white focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <GlassCard key={i} className="p-0 overflow-hidden">
                <button 
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className={`font-medium transition-colors ${openIndex === i ? 'text-gold' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-gold' : 'text-text-secondary'}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-border/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}

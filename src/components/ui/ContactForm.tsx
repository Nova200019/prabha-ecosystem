'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after success message
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', phone: '', subject: 'General', message: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <GlassCard className="w-full max-w-2xl p-8 md:p-10 relative overflow-hidden">
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-4 left-4 right-4 bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-lg flex items-center gap-3 z-10 backdrop-blur-md"
          >
            <CheckCircle2 className="w-5 h-5" />
            <p className="text-sm font-medium">Thank you! Your message has been sent successfully.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <input 
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="peer w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#C9A96E] transition-colors"
              placeholder="Name"
            />
            <label 
              htmlFor="name" 
              className="absolute left-0 -top-3.5 text-xs text-[#BDBDBD] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#C9A96E]"
            >
              Full Name
            </label>
          </div>
          
          <div className="relative group">
            <input 
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="peer w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#C9A96E] transition-colors"
              placeholder="Email"
            />
            <label 
              htmlFor="email" 
              className="absolute left-0 -top-3.5 text-xs text-[#BDBDBD] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#C9A96E]"
            >
              Email Address
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <input 
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="peer w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#C9A96E] transition-colors"
              placeholder="Phone"
            />
            <label 
              htmlFor="phone" 
              className="absolute left-0 -top-3.5 text-xs text-[#BDBDBD] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#C9A96E]"
            >
              Phone Number
            </label>
          </div>
          
          <div className="relative group">
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#C9A96E] transition-colors appearance-none cursor-pointer"
            >
              <option value="General" className="bg-[#111111] text-white">General Inquiry</option>
              <option value="Quotation" className="bg-[#111111] text-white">Request Quotation</option>
              <option value="Architect" className="bg-[#111111] text-white">Architect / Designer</option>
              <option value="Dealer" className="bg-[#111111] text-white">Become a Dealer</option>
              <option value="Complaint" className="bg-[#111111] text-white">Complaint / Support</option>
            </select>
            <div className="absolute right-0 top-4 pointer-events-none border-l border-b border-white/50 w-2 h-2 -rotate-45"></div>
          </div>
        </div>

        <div className="relative group pt-4">
          <textarea 
            name="message"
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="peer w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#C9A96E] transition-colors resize-none"
            placeholder="Message"
          ></textarea>
          <label 
            htmlFor="message" 
            className="absolute left-0 -top-3.5 text-xs text-[#BDBDBD] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#C9A96E]"
          >
            Your Message
          </label>
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full py-4 mt-8 flex items-center justify-center gap-3"
          variant="primary"
        >
          {isSubmitting ? (
            <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4" />
            </>
          )}
        </Button>
      </form>
    </GlassCard>
  );
}

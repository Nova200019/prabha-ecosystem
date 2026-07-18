'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Delay showing the button so it doesn't distract immediately
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="bg-white text-black px-4 py-2 rounded-lg shadow-lg font-medium text-sm hidden md:block"
              >
                Chat with us
              </motion.div>
            )}
          </AnimatePresence>
          
          <a
            href="https://wa.me/9108040006864"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#128C7E] transition-colors"
          >
            {/* Pulse effect */}
            <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
            
            <MessageCircle className="w-7 h-7" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

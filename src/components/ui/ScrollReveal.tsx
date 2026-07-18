'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  const getInitial = () => {
    switch (direction) {
      case 'down': return { opacity: 0, y: -40 };
      case 'left': return { opacity: 0, x: -60 };
      case 'right': return { opacity: 0, x: 60 };
      case 'up':
      default: return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : getInitial()}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

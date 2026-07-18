'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { STATS } from '@/lib/constants';

function AnimatedCounter({ value, suffix = '' }: { value: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [displayValue, setDisplayValue] = useState(0);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 50,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = STATS || [
    { id: 1, value: 15, suffix: '+', label: 'Years of Excellence' },
    { id: 2, value: 5000, suffix: '+', label: 'Premium Products' },
    { id: 3, value: 10000, suffix: '+', label: 'Happy Customers' },
    { id: 4, value: 50, suffix: '+', label: 'Exclusive Brands' },
  ];

  return (
    <section className="py-20 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat: any, index: number) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <h4 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#C9A96E] mb-4">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </h4>
              <p className="text-sm md:text-base text-[#BDBDBD] font-light uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

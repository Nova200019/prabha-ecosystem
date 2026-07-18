'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  type?: 'words' | 'letters';
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export default function AnimatedText({ text, className = '', type = 'words', tag: Tag = 'h2' }: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: type === 'words' ? 0.08 : 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  const MotionTag = motion[Tag] as any;

  if (type === 'words') {
    const words = text.split(' ');
    return (
      <MotionTag
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </MotionTag>
    );
  }

  const letters = Array.from(text);
  return (
    <MotionTag
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
          key={index}
        >
          {letter}
        </motion.span>
      ))}
    </MotionTag>
  );
}

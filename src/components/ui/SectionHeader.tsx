'use client';

import ScrollReveal from './ScrollReveal';
import AnimatedText from './AnimatedText';

interface SectionHeaderProps {
  caption?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  caption,
  title,
  subtitle,
  className = '',
  align = 'center',
}: SectionHeaderProps) {
  const alignmentClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-4 max-w-3xl ${alignmentClass} ${className}`}>
      <ScrollReveal direction="up">
        <span className="text-[#C9A96E] font-medium tracking-[0.2em] uppercase text-xs sm:text-sm">
          {caption}
        </span>
      </ScrollReveal>
      
      <AnimatedText 
        text={title} 
        tag="h2" 
        className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white" 
      />
      
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className="text-[#BDBDBD] text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}

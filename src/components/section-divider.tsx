'use client';

import { ScrollReveal } from './scroll-reveal';

interface SectionDividerProps {
  variant: 'number' | 'quote' | 'text';
  content: string;
  className?: string;
}

export function SectionDivider({ variant, content, className = '' }: SectionDividerProps) {
  return (
    <div className={`py-24 md:py-40 flex justify-center items-center overflow-hidden ${className}`}>
      {variant === 'number' && (
        <ScrollReveal>
          <div className="font-display text-[15vw] leading-none opacity-10 text-center">
            {content}
          </div>
        </ScrollReveal>
      )}

      {variant === 'quote' && (
        <ScrollReveal>
          <div className="flex items-center justify-center gap-6">
            <span className="w-12 h-[1px] bg-stone-500/30"></span>
            <div className="font-accent italic text-xl md:text-3xl text-stone-400 text-center max-w-2xl px-4">
              &quot;{content}&quot;
            </div>
            <span className="w-12 h-[1px] bg-stone-500/30"></span>
          </div>
        </ScrollReveal>
      )}

      {variant === 'text' && (
        <ScrollReveal>
          <div className="font-display text-[10vw] uppercase leading-none opacity-5 whitespace-nowrap text-center">
            {content}
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}

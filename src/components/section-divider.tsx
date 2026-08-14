'use client';

import { ScrollReveal } from './scroll-reveal';

interface SectionDividerProps {
  variant: 'number' | 'quote' | 'text';
  content: string;
  className?: string;
}

export function SectionDivider({ variant, content, className = '' }: SectionDividerProps) {
  return (
    <div className={`py-10 sm:py-16 md:py-40 flex justify-center items-center overflow-hidden max-w-full ${className}`}>
      {variant === 'number' && (
        <ScrollReveal>
          <div className="font-display text-[15vw] md:text-[15vw] leading-none opacity-10 text-center select-none">
            {content}
          </div>
        </ScrollReveal>
      )}

      {variant === 'quote' && (
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3 sm:gap-6 px-4">
            <span className="w-8 sm:w-12 h-[1px] bg-stone-500/30"></span>
            <div className="font-accent italic text-base sm:text-xl md:text-3xl text-stone-400 text-center max-w-2xl px-2 sm:px-4 leading-relaxed">
              &quot;{content}&quot;
            </div>
            <span className="w-8 sm:w-12 h-[1px] bg-stone-500/30"></span>
          </div>
        </ScrollReveal>
      )}

      {variant === 'text' && (
        <ScrollReveal>
          <div className="font-display text-[11vw] sm:text-[10vw] uppercase leading-none opacity-5 whitespace-nowrap text-center select-none max-w-full overflow-hidden">
            {content}
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}

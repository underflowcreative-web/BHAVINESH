'use client';

import { ScrollReveal } from '@/components/scroll-reveal';
import { useCursor } from '@/hooks/use-cursor';

export function PreFooterCTA() {
  const { setCursorVariant } = useCursor();

  return (
    <section className="section-padding py-16 sm:py-24 md:py-36 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,115,85,0.06),transparent_70%)] pointer-events-none" />

      <ScrollReveal>
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="h-[1px] w-12 sm:w-16 bg-[#8B7355]/50 mx-auto" />

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-white font-light tracking-tight leading-tight">
            Ready to Create<br />
            <span className="text-stone italic">Something Timeless?</span>
          </h2>

          <p className="text-xs sm:text-sm font-body font-light text-[#c2bbae]/80 leading-relaxed tracking-wide max-w-lg mx-auto">
            Every great photograph begins with a conversation. Share your vision with us and receive a personalized quotation crafted around your celebration.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5 pt-2 sm:pt-4 w-full max-w-md mx-auto sm:max-w-none">
            <a
              href="#contact"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
              className="uppercase tracking-[0.2em] sm:tracking-[0.22em] font-heading text-xs bg-[#8B7355] hover:bg-[#8B7355]/80 text-white px-7 sm:px-9 py-3.5 sm:py-4 transition-all duration-300 rounded-sm font-medium inline-flex items-center justify-center gap-3 min-h-[46px]"
            >
              <span>Enquire Now</span>
              <span>→</span>
            </a>
            <a
              href="#contact"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
              className="uppercase tracking-[0.2em] sm:tracking-[0.22em] font-heading text-xs border border-white/20 hover:border-[#8B7355] text-[#e8e4df] hover:text-[#8B7355] px-7 sm:px-9 py-3.5 sm:py-4 transition-all duration-300 rounded-sm inline-flex items-center justify-center gap-3 min-h-[46px]"
            >
              <span>Book a Session</span>
              <span>→</span>
            </a>
          </div>

          <div className="h-[1px] w-12 sm:w-16 bg-[#8B7355]/50 mx-auto pt-0 mt-3 sm:mt-4" />
        </div>
      </ScrollReveal>
    </section>
  );
}

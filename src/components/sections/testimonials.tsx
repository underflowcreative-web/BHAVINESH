'use client';

import { testimonials } from '@/data/testimonials';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCursor } from '@/hooks/use-cursor';

export function Testimonials() {
  const { setCursorVariant } = useCursor();

  return (
    <section id="testimonials" className="section-padding editorial-gap bg-primary relative overflow-hidden">
      {/* Background Watermark */}
      <span className="absolute top-12 left-1/2 -translate-x-1/2 font-display text-[12rem] md:text-[22rem] leading-none text-white/[0.02] font-bold z-0 pointer-events-none select-none whitespace-nowrap">
        KIND WORDS
      </span>

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto space-y-4">
            <span className="text-label text-bronze tracking-[0.25em] uppercase text-xs font-semibold">
              Client Endorsements & Reviews
            </span>
            <h2 className="text-section-title">
              <span className="block text-white font-display">Kind Words &</span>
              <span className="block text-stone font-display">Shared Memories</span>
            </h2>
            <div className="w-16 h-[1px] bg-bronze mx-auto mt-6" />
          </div>
        </ScrollReveal>

        {/* Staggered Editorial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {testimonials.map((testimonial, index) => {
            const isHero = index === 0;
            const isWide = index === 4;
            const rotation = index % 2 === 0 ? (index % 4 === 0 ? '-0.8deg' : '0.8deg') : '-0.5deg';

            return (
              <ScrollReveal
                key={testimonial.id}
                delay={Math.min(index * 0.08, 0.5)}
                className={isHero ? 'lg:col-span-2' : isWide ? 'md:col-span-2 lg:col-span-1' : ''}
              >
                <div
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className={`bg-card/90 border border-white/10 hover:border-bronze/50 rounded-sm transition-all duration-500 p-8 md:p-10 flex flex-col justify-between relative group hover:shadow-[0_0_35px_rgba(139,115,85,0.12)] hover:-translate-y-1 ${
                    isHero ? 'md:p-12 lg:p-14 min-h-[340px]' : 'min-h-[300px]'
                  }`}
                  style={{ transform: `rotate(${rotation})` }}
                >
                  {/* Oversized Decorative Quotation Mark */}
                  <span className="absolute top-4 right-6 font-display text-7xl md:text-8xl text-white/5 group-hover:text-bronze/10 transition-colors pointer-events-none select-none">
                    &ldquo;
                  </span>

                  <div className="relative z-10 space-y-6">
                    {/* Rating Stars */}
                    <div className="flex text-bronze text-sm tracking-widest">
                      {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                      {testimonial.rating % 1 !== 0 && <span className="opacity-60">★</span>}
                    </div>

                    <p
                      className={`font-accent italic text-[#e8e4df]/90 leading-relaxed ${
                        isHero
                          ? 'text-xl md:text-2xl lg:text-3xl'
                          : 'text-base md:text-lg'
                      }`}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex justify-between items-end">
                    <div>
                      <h4 className="font-heading text-sm md:text-base tracking-[0.15em] uppercase text-white font-semibold group-hover:text-bronze transition-colors">
                        {testimonial.name}
                      </h4>
                      <span className="text-label text-stone/60 text-xs mt-1 block">
                        {testimonial.event}
                      </span>
                    </div>

                    <span className="text-[10px] font-heading uppercase tracking-[0.2em] text-stone/40 bg-white/5 px-2.5 py-1 rounded">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

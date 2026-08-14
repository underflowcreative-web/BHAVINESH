'use client';

import { testimonials } from '@/data/testimonials';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCursor } from '@/hooks/use-cursor';

export function Testimonials() {
  const { setCursorVariant } = useCursor();
  // Display only 3 curated testimonials as requested
  const displayTestimonials = testimonials.slice(0, 3);

  return (
    <section id="testimonials" className="section-padding editorial-gap bg-primary relative overflow-hidden">
      {/* Background Watermark */}
      <span className="absolute top-8 sm:top-12 left-1/2 -translate-x-1/2 font-display text-[4.5rem] sm:text-[10rem] md:text-[22rem] leading-none text-white/[0.02] font-bold z-0 pointer-events-none select-none whitespace-nowrap max-w-full overflow-hidden">
        KIND WORDS
      </span>

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-10 sm:mb-16 md:mb-24 text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <span className="text-label text-bronze tracking-[0.25em] uppercase text-xs font-semibold">
              Client Endorsements & Reviews
            </span>
            <h2 className="text-section-title">
              <span className="block text-white font-display">Kind Words &</span>
              <span className="block text-stone font-display">Shared Memories</span>
            </h2>
            <div className="w-12 sm:w-16 h-[1px] bg-bronze mx-auto mt-4 sm:mt-6" />
          </div>
        </ScrollReveal>

        {/* 3-Card Balanced Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">
          {displayTestimonials.map((testimonial, index) => {
            return (
              <ScrollReveal
                key={testimonial.id}
                delay={Math.min(index * 0.08, 0.3)}
                className="h-full"
              >
                <div
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="bg-card/90 border border-white/10 hover:border-bronze/50 rounded-sm transition-all duration-500 p-6 sm:p-8 md:p-10 flex flex-col justify-between relative group hover:shadow-[0_0_35px_rgba(139,115,85,0.12)] hover:-translate-y-1 h-full min-h-[260px] sm:min-h-[300px]"
                >
                  {/* Oversized Decorative Quotation Mark */}
                  <span className="absolute top-3 right-5 sm:top-4 sm:right-6 font-display text-5xl sm:text-7xl md:text-8xl text-white/5 group-hover:text-bronze/10 transition-colors pointer-events-none select-none">
                    &ldquo;
                  </span>

                  <div className="relative z-10 space-y-4 sm:space-y-6">
                    {/* Rating Stars */}
                    <div className="flex text-bronze text-xs sm:text-sm tracking-widest">
                      {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                      {testimonial.rating % 1 !== 0 && <span className="opacity-60">★</span>}
                    </div>

                    <p className="font-accent italic text-[#e8e4df]/90 leading-relaxed text-sm sm:text-base md:text-lg">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 flex justify-between items-end gap-2">
                    <div>
                      <h4 className="font-heading text-xs sm:text-sm md:text-base tracking-[0.15em] uppercase text-white font-semibold group-hover:text-bronze transition-colors">
                        {testimonial.name}
                      </h4>
                      <span className="text-label text-stone/60 text-[10px] sm:text-xs mt-1 block">
                        {testimonial.event}
                      </span>
                    </div>

                    <span className="text-[9px] sm:text-[10px] font-heading uppercase tracking-[0.18em] sm:tracking-[0.2em] text-stone/40 bg-white/5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded flex-shrink-0">
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

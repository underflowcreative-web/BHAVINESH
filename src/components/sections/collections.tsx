'use client';

import { ScrollReveal } from '@/components/scroll-reveal';
import { useCursor } from '@/hooks/use-cursor';
import { collectionsData, preWeddingCard } from '@/data/collections';

export function Collections() {
  const { setCursorVariant } = useCursor();

  const handleEnquire = (collectionTitle: string, eventType: string) => {
    window.dispatchEvent(
      new CustomEvent('select-collection-enquiry', {
        detail: { collectionTitle, eventType },
      })
    );

    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="collections" className="section-padding editorial-gap bg-primary relative overflow-hidden">
      {/* Background Decorative Grid Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="collectionsGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#8B7355" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#collectionsGrid)" />
        </svg>
      </div>

      {/* Section Intro (Title reduced by 35%, description emphasized) */}
      <ScrollReveal>
        <div className="relative mb-24 md:mb-36 max-w-5xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] uppercase tracking-[0.35em] font-heading font-semibold text-[#8B7355]">
              04 / CURATED EXPERIENCES
            </span>
            <div className="h-[1px] w-20 bg-[#8B7355]/40" />
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-light tracking-tight">
              Photography <span className="text-stone italic font-serif">Collections</span>
            </h2>

            <div className="h-[1px] w-32 bg-[#8B7355]" />

            <p className="text-sm sm:text-base font-body font-light text-[#c2bbae]/90 leading-relaxed sm:leading-loose max-w-2xl tracking-wide pt-1">
              Every celebration is a unique story waiting to be told. Explore our signature photography experiences—each designed with discreet coverage, artistic precision, and heirloom physical deliverables.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Vertically Stacked Full-Width Luxury Feature Blocks */}
      <div className="space-y-24 md:space-y-36">
        {collectionsData.map((item, index) => {
          const formattedNumber = String(index + 1).padStart(2, '0');
          const isEven = index % 2 === 0;

          return (
            <ScrollReveal key={item.id} delay={0.1}>
              <div className="w-full bg-[#080808] border border-[#8B7355]/20 hover:border-[#8B7355]/60 transition-all duration-700 p-8 sm:p-12 md:p-16 relative overflow-hidden group shadow-2xl rounded-sm">
                {/* Background Ambient Radial Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(139,115,85,0.08),transparent_70%)] pointer-events-none group-hover:opacity-150 transition-opacity duration-700" />

                {/* Corner Decorative Marking */}
                <div className="absolute top-4 left-4 text-[#8B7355]/20 text-xs font-mono select-none">
                  +
                </div>
                <div className="absolute bottom-4 right-4 text-[#8B7355]/20 text-xs font-mono select-none">
                  +
                </div>

                {/* Block Header: Number, Title & Price Badge */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10 relative z-10">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="font-display text-4xl sm:text-5xl md:text-6xl text-[#8B7355]/40 font-bold group-hover:text-[#8B7355]/70 transition-colors duration-500">
                        {formattedNumber}
                      </span>
                      {item.badge && (
                        <span className="text-[9px] uppercase tracking-[0.25em] font-heading font-medium text-[#8B7355] bg-[#8B7355]/10 border border-[#8B7355]/30 px-3 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-light tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <div className="text-left md:text-right">
                    <span className="inline-block text-[11px] uppercase tracking-[0.22em] font-heading font-medium text-[#8B7355] bg-[#8B7355]/10 border border-[#8B7355]/30 px-4 py-2 rounded-sm">
                      Pricing available on request.
                    </span>
                  </div>
                </div>

                {item.description && (
                  <div className="py-6 border-b border-white/5 relative z-10">
                    <p className="text-xs sm:text-sm font-body font-light text-stone/80 leading-relaxed max-w-3xl">
                      {item.description}
                    </p>
                  </div>
                )}

                {/* 3-Column Specifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-10 relative z-10">
                  {/* Column 1: Coverage */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#8B7355] rounded-full" />
                      <h4 className="text-[10px] uppercase tracking-[0.25em] font-heading text-stone/50 font-semibold">
                        Coverage & Schedule
                      </h4>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#e8e4df]/90 font-body font-light pl-3.5 border-l border-white/10">
                      {item.coverage.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Creative Team */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#8B7355] rounded-full" />
                      <h4 className="text-[10px] uppercase tracking-[0.25em] font-heading text-stone/50 font-semibold">
                        Creative Team
                      </h4>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#e8e4df]/90 font-body font-light pl-3.5 border-l border-white/10">
                      {item.team.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Deliverables */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#8B7355] rounded-full" />
                      <h4 className="text-[10px] uppercase tracking-[0.25em] font-heading text-stone/50 font-semibold">
                        Includes & Deliverables
                      </h4>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#e8e4df]/90 font-body font-light pl-3.5 border-l border-white/10">
                      {item.includes.map((inc, i) => (
                        <li key={i}>{inc}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Bar: Action Button Aligned Right */}
                <div className="pt-8 border-t border-white/10 flex items-center justify-between gap-6 relative z-10">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-heading text-stone/40 hidden sm:inline-block">
                    Bhavinesh Bharathan Photography
                  </span>

                  <button
                    onClick={() => handleEnquire(item.title, item.eventTypeOption)}
                    onMouseEnter={() => setCursorVariant('button')}
                    onMouseLeave={() => setCursorVariant('default')}
                    className="ml-auto uppercase tracking-[0.22em] font-heading text-xs sm:text-sm border border-[#8B7355]/50 hover:border-[#8B7355] bg-[#8B7355]/10 hover:bg-[#8B7355] text-white hover:text-primary px-8 py-4 transition-all duration-300 rounded-sm font-medium inline-flex items-center gap-3 group/btn"
                  >
                    <span>{item.ctaText}</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          );
        })}

        {/* Pre-Wedding Experience Highlighted Suite Block */}
        <ScrollReveal delay={0.2}>
          <div className="w-full bg-gradient-to-r from-[#0a0a0a] via-[#111111] to-[#0a0a0a] border border-[#8B7355]/40 p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl rounded-sm">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(139,115,85,0.12),transparent_70%)] pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#8B7355]/30 relative z-10">
              <div className="space-y-3">
                <span className="text-[9px] uppercase tracking-[0.28em] font-heading text-[#8B7355] font-semibold bg-[#8B7355]/10 border border-[#8B7355]/30 px-3 py-1 rounded-full">
                  Specialized Experience
                </span>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-light tracking-tight">
                  {preWeddingCard.title}
                </h3>
              </div>

              <div>
                <span className="inline-block text-[11px] uppercase tracking-[0.22em] font-heading font-medium text-[#8B7355] bg-[#8B7355]/10 border border-[#8B7355]/30 px-4 py-2 rounded-sm">
                  Pricing available on request.
                </span>
              </div>
            </div>

            {/* Deliverables List */}
            <div className="py-10 relative z-10">
              <h4 className="text-[10px] uppercase tracking-[0.25em] font-heading text-stone/50 font-semibold mb-4">
                Session Deliverables
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm text-[#e8e4df]/90 font-body font-light">
                {preWeddingCard.includes.map((inc, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 bg-black/40 border border-white/5 rounded-sm">
                    <span className="w-1.5 h-1.5 bg-[#8B7355] rounded-full flex-shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-[#8B7355]/30 flex items-center justify-between gap-6 relative z-10">
              <span className="text-[10px] uppercase tracking-[0.2em] font-heading text-stone/40 hidden sm:inline-block">
                Exclusive Couple Session
              </span>

              <button
                onClick={() => handleEnquire(preWeddingCard.title, preWeddingCard.eventTypeOption)}
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
                className="ml-auto uppercase tracking-[0.22em] font-heading text-xs sm:text-sm bg-[#8B7355] hover:bg-[#8B7355]/80 text-white px-9 py-4 transition-all duration-300 rounded-sm font-medium inline-flex items-center gap-3 shadow-lg"
              >
                <span>{preWeddingCard.ctaText}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqs } from '@/data/faq';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCursor } from '@/hooks/use-cursor';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default for rich layout
  const { setCursorVariant } = useCursor();

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding editorial-gap bg-secondary relative overflow-hidden">
      {/* Background Subtle Number Backdrop */}
      <span className="absolute top-10 right-10 font-display text-[12rem] md:text-[20rem] leading-none text-white/[0.02] font-bold z-0 pointer-events-none select-none">
        FAQ
      </span>

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-label text-bronze tracking-[0.25em] uppercase text-xs font-semibold mb-3 block">
                Information & Inquiry
              </span>
              <h2 className="text-section-title">
                <span className="block text-white font-display">Frequently</span>
                <span className="block text-stone font-display">Asked Questions</span>
              </h2>
            </div>
            <p className="text-body-lg text-stone max-w-md">
              Everything you need to know about booking, delivery, equipment, and our creative process.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col gap-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              const number = (index + 1).toString().padStart(2, '0');

              return (
                <div
                  key={item.id || index}
                  className={`border transition-all duration-500 rounded-sm overflow-hidden ${
                    isOpen
                      ? 'border-bronze/40 bg-primary/80 shadow-[0_0_30px_rgba(139,115,85,0.08)]'
                      : 'border-white/10 bg-primary/40 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    onMouseEnter={() => setCursorVariant('button')}
                    onMouseLeave={() => setCursorVariant('default')}
                    className="w-full text-left p-6 md:p-8 flex justify-between items-center group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 md:gap-8 pr-4">
                      <span className="font-heading text-xs tracking-[0.2em] text-bronze font-mono">
                        {number}
                      </span>

                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-stone/50 font-heading">
                          {item.category}
                        </span>
                        <h3
                          className={`font-display text-xl md:text-2xl lg:text-3xl transition-colors duration-300 ${
                            isOpen ? 'text-white font-medium' : 'text-[#e8e4df]/80 group-hover:text-white'
                          }`}
                        >
                          {item.question}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 flex-shrink-0 ${
                        isOpen
                          ? 'border-bronze bg-bronze/20 text-white rotate-45'
                          : 'border-white/15 text-stone group-hover:border-bronze group-hover:text-white'
                      }`}
                    >
                      <span className="text-xl font-light leading-none">+</span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-white/5">
                          <p className="text-body-lg text-stone/90 leading-relaxed max-w-4xl">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

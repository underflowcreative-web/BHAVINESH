'use client';

import { ScrollReveal } from '@/components/scroll-reveal';

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-primary section-padding relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-12">
        <ScrollReveal>
          <div className="w-16 h-[1px] bg-bronze mx-auto" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="text-quote font-accent text-white whitespace-pre-line leading-tight">
            {"I don't just capture moments.\nI preserve emotions."}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-label text-stone tracking-widest uppercase">BHAVINESH BHARATHAN</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

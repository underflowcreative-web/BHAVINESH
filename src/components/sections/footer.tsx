'use client';

import { ScrollReveal } from '@/components/scroll-reveal';
import { useCursor } from '@/hooks/use-cursor';

export function Footer() {
  const { setCursorVariant } = useCursor();

  return (
    <footer className="bg-primary border-t border-white/5 py-20 section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(4rem,15vw,16rem)] text-white/[0.03] leading-none text-center select-none tracking-tighter w-full">
            BHAVINESH
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-label tracking-widest text-sm text-stone">
            <a 
              href="https://instagram.com/bhavinesh_bharathan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-bronze transition-colors nav-link-premium flex items-center gap-2"
              onMouseEnter={() => setCursorVariant('link')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              INSTAGRAM
            </a>
            <a 
              href="https://youtube.com/@bhavinesh_bharathan?si=koxylJ8cPVBQS2K8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-bronze transition-colors nav-link-premium flex items-center gap-2"
              onMouseEnter={() => setCursorVariant('link')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YOUTUBE
            </a>
            <a 
              href="mailto:bhavineshbharathan@gmail.com"
              className="hover:text-bronze transition-colors nav-link-premium"
              onMouseEnter={() => setCursorVariant('link')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              EMAIL
            </a>
            <a 
              href="tel:+919544885698"
              className="hover:text-bronze transition-colors nav-link-premium"
              onMouseEnter={() => setCursorVariant('link')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              PHONE
            </a>
            <span className="cursor-default text-stone/50">LOCATION: KERALA, INDIA</span>
          </div>
        </ScrollReveal>

        {/* Copyright & Credit Line */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-white/30 tracking-wider text-center border-t border-white/5 pt-8">
            <span>© 2026 Bhavinesh Bharathan Photography. All rights reserved.</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span className="text-stone/40 font-light">
              Designed & Developed by <span className="text-stone/85 font-medium tracking-wide text-white/90">ADHITHYAN PALAKKAL</span> (<span className="text-stone/75 font-normal">UnderflowCreatives</span>) · <a href="mailto:underflow.creative@gmail.com" className="hover:text-bronze transition-colors text-stone/60 font-normal">underflow.creative@gmail.com</a>
            </span>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}

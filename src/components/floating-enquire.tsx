'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCursor } from '@/hooks/use-cursor';

export function FloatingEnquire() {
  const [visible, setVisible] = useState(false);
  const { setCursorVariant } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.25;
      setVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setCursorVariant('button')}
          onMouseLeave={() => setCursorVariant('default')}
          className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-[790] uppercase tracking-[0.2em] font-heading text-[10px] sm:text-[11px] bg-[#8B7355] hover:bg-[#8B7355]/85 text-white px-5 py-2.5 rounded-full shadow-[0_8px_30px_rgba(139,115,85,0.4)] hover:shadow-[0_8px_40px_rgba(139,115,85,0.6)] transition-all duration-300 hover:scale-105 flex items-center gap-2 backdrop-blur-sm border border-[#8B7355]/60"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>Get a Quote</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

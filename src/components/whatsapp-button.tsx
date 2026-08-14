'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCursor } from '@/hooks/use-cursor';

const PHONE_NUMBER = '919544885698';

const PREFILLED_MESSAGE = `Hello Bhavinesh,

I came across your website and I'm interested in your photography services.

Name: 
Event Type: 
Event Date: 
Location: 

I'd like to know your availability and packages.

Looking forward to hearing from you.`;

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { setCursorVariant } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      // Fade in after scrolling 20% of the viewport height
      const threshold = window.innerHeight * 0.2;
      if (window.scrollY > threshold) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-[800] flex items-center group"
          onMouseEnter={() => {
            setIsHovered(true);
            setCursorVariant('button');
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setCursorVariant('default');
          }}
        >
          {/* Floating Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute right-14 sm:right-16 top-1/2 -translate-y-1/2 whitespace-nowrap text-[9.5px] sm:text-[10px] font-heading font-medium tracking-[0.2em] uppercase text-[#e8e4df] bg-[#0d0d0d]/95 px-3 py-1.5 sm:px-3.5 sm:py-2 border border-[#8B7355]/30 rounded shadow-xl backdrop-blur-md pointer-events-none"
              >
                Enquire via WhatsApp
              </motion.span>
            )}
          </AnimatePresence>

          {/* Circular Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enquire via WhatsApp"
            className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#0d0d0d]/90 border border-[#8B7355]/40 hover:border-[#8B7355] shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(139,115,85,0.35)] group"
          >
            {/* Soft Ambient Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-[#8B7355]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />

            {/* Official WhatsApp Green SVG Icon */}
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#25D366] transition-transform duration-300 group-hover:scale-110 relative z-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

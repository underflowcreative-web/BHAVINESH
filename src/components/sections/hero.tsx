'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCursor } from '@/hooks/use-cursor';

const heroImages = [
  '/images/client/16E9CENfCEoCsCZ05I3dkHSEoBWD9Vwo2_DSC01056.jpg',
  '/images/client/1ljbELOPGq4p821MRMbu0H9_b3RQTnsL8__DSC1373.JPG',
  '/images/client/1OPiohkC-39652qDD_ez43SHW1HZ0zl3r_DSC01064.jpg',
  '/images/client/11nIs1YZf75lnXDlwRCOq4EouKxNEw_Sm__DSC4308-2.JPG',
  '/images/client/1_aXNQANoYnjoj1i8oFeFK8kD0jv-321r_DSC01176.jpg',
];

const categoryList = [
  'Wedding',
  'Pre Wedding',
  'Commercial',
  'Model Shoot',
  'Film',
  'Drone',
  'Maternity',
  'Baby Shoot',
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setCursorVariant } = useCursor();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden bg-primary flex flex-col justify-end">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroImages[currentIndex]}
            alt={`Hero background ${currentIndex + 1}`}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,6,6,0.65)_100%)] pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/95 via-primary/35 to-transparent pointer-events-none" />

      <div className="relative z-20 flex flex-col justify-end pb-16 sm:pb-24 pt-24 sm:pt-28 section-padding">
        <div className="max-w-5xl space-y-5 sm:space-y-7 md:space-y-9">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[clamp(2.1rem,8.5vw,10rem)] text-white leading-[1] font-display font-light tracking-tight"
          >
            Crafting Timeless<br />
            Stories Through Light.
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 3.4, ease: 'easeInOut' }}
            className="h-[1px] w-20 sm:w-24 bg-[#8B7355] origin-left"
          />

          <div className="flex flex-col items-start gap-6 sm:gap-8 md:flex-row md:items-end md:justify-between pt-1 sm:pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-xl space-y-3.5 sm:space-y-5"
            >
              {/* Ultra-Refined Luxury Category Wrap List */}
              <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-5 gap-y-1.5 sm:gap-y-2.5 text-[9px] sm:text-[10.5px] font-heading font-light tracking-[0.22em] sm:tracking-[0.26em] uppercase text-[#8B7355]/85 leading-relaxed">
                {categoryList.map((cat, i) => (
                  <span key={cat} className="inline-flex items-center gap-3 sm:gap-5">
                    <span>{cat}</span>
                    {i < categoryList.length - 1 && (
                      <span className="w-[3px] h-[3px] rounded-full bg-[#8B7355]/35 inline-block" />
                    )}
                  </span>
                ))}
              </div>

              {/* Soft Off-white Readability Paragraph */}
              <p className="text-xs sm:text-[13.5px] font-body font-light text-[#c2bbae]/80 leading-relaxed sm:leading-loose max-w-md tracking-wide">
                Preserving emotions and timeless narratives across Kerala, India, and worldwide destination locations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 flex-shrink-0 w-full sm:w-auto"
            >
              <a
                href="#contact"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
                className="uppercase tracking-[0.22em] font-heading text-xs border border-white/20 hover:border-[#8B7355] px-6 sm:px-7 py-3.5 transition-all duration-300 text-[#e8e4df] hover:text-[#8B7355] text-center justify-center flex items-center min-h-[44px]"
              >
                BOOK A SESSION
              </a>
              <a
                href="#contact"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
                className="uppercase tracking-[0.22em] font-heading text-xs bg-[#8B7355] hover:bg-[#8B7355]/80 px-6 sm:px-7 py-3.5 transition-all duration-300 text-white text-center justify-center flex items-center min-h-[44px]"
              >
                ENQUIRE NOW
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Minimalist Lower Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
        className="hidden sm:flex absolute bottom-5 sm:bottom-6 left-1/2 z-20 -translate-x-1/2 flex-col items-center gap-2.5 pointer-events-none"
      >
        <div className="h-8 w-[1px] bg-white/10 overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
            className="h-full w-full bg-[#8B7355]/70"
          />
        </div>
        <span className="text-[9px] font-heading text-white/35 tracking-[0.3em] uppercase">SCROLL</span>
      </motion.div>
    </section>
  );
}

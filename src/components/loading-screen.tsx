"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Small delay before showing the logo
    const showTimer = setTimeout(() => setShowContent(true), 200);
    // Total loading duration
    const hideTimer = setTimeout(() => setIsLoading(false), 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const brandName = "BHAVINESH BHARATHAN";
  const subtitle = "PHOTOGRAPHY";

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary"
          exit={{ y: "-100%", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
        >
          {/* Subtle grain overlay on loading */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full">
              <filter id="loadNoise">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#loadNoise)" />
            </svg>
          </div>

          <div className="relative text-center">
            {/* Logo image */}
            <AnimatePresence>
              {showContent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-8 flex justify-center"
                >
                  <motion.img
                    src="/logo.png"
                    alt="Bhavinesh Bharathan Photography"
                    className="h-16 w-auto object-contain invert-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    onError={(e) => {
                      // Hide image if logo not found
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Brand name - staggered letter reveal */}
            <div className="overflow-hidden">
              <AnimatePresence>
                {showContent && (
                  <motion.div className="flex justify-center gap-[0.04em]">
                    {brandName.split("").map((letter, i) => (
                      <motion.span
                        key={i}
                        className="text-section-title text-[#e8e4df] inline-block"
                        style={{ fontFamily: "var(--font-display)" }}
                        initial={{ y: "120%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.4 + i * 0.03,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden mt-3">
              <AnimatePresence>
                {showContent && (
                  <motion.p
                    className="text-label text-stone tracking-[0.4em]"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.0,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {subtitle}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Loading line */}
            <motion.div
              className="mt-10 h-[1px] bg-bronze/30 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: showContent ? 120 : 0 }}
              transition={{ duration: 2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useCursor } from "@/hooks/use-cursor";

interface LightboxProps {
  images: { src: string; alt: string }[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const { setCursorVariant } = useCursor();

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const navigate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrentIndex((prev) => {
        const next = prev + dir;
        if (next < 0) return images.length - 1;
        if (next >= images.length) return 0;
        return next;
      });
    },
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          navigate(-1);
          break;
        case "ArrowRight":
          navigate(1);
          break;
        case "Escape":
          onClose();
          break;
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, navigate, onClose]);

  // Drag / swipe handling
  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 50;
    const velocityThreshold = 500;

    if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      navigate(-1);
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      navigate(1);
    }
  };

  if (!images.length) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[2000] bg-primary/95 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('default')}
            className="lightbox-control absolute top-6 right-6 md:top-8 md:right-8 z-[2010] text-label text-stone hover:text-bronze flex items-center gap-2 w-10 h-10 justify-center"
          >
            <span className="hidden md:inline">CLOSE</span>
            <span className="text-2xl leading-none">×</span>
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8 z-[2010] text-label text-stone/60">
            {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => navigate(-1)}
            onMouseEnter={() => setCursorVariant('lightbox-left')}
            onMouseLeave={() => setCursorVariant('default')}
            className="lightbox-control absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[2010] w-14 h-14 flex items-center justify-center text-stone hover:text-bronze"
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => navigate(1)}
            onMouseEnter={() => setCursorVariant('lightbox-right')}
            onMouseLeave={() => setCursorVariant('default')}
            className="lightbox-control absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[2010] w-14 h-14 flex items-center justify-center text-stone hover:text-bronze"
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              className="w-full h-full flex items-center justify-center p-12 md:p-20 cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setCursorVariant('drag')}
              onMouseLeave={() => setCursorVariant('default')}
              custom={direction}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
            >
              <img
                src={images[currentIndex]?.src}
                alt={images[currentIndex]?.alt || ""}
                className="max-w-full max-h-full object-contain select-none"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

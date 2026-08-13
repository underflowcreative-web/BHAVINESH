"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { useCursor, CursorVariant } from "@/hooks/use-cursor";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export function CustomCursor() {
  const { cursorVariant } = useCursor();
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isHoveredOverInteractive, setIsHoveredOverInteractive] = useState(false);
  const counterRef = useRef(0);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Responsive spring physics: snappy stiffness (360) and optimal damping (28) for high precision with crisp inertia
  const springConfig = { damping: 28, stiffness: 360, mass: 0.3 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsMobile(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);

      // Store trail points for ~120ms motion tail
      counterRef.current += 1;
      if (counterRef.current % 2 === 0) {
        setTrail((prev) => [
          { x: clientX, y: clientY, id: Date.now() + Math.random() },
          ...prev.slice(0, 2),
        ]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  // Variant styles and rotations
  const isView = cursorVariant === "view";
  const isButton = cursorVariant === "button";
  const isLink = cursorVariant === "link";
  const isDrag = cursorVariant === "drag";
  const isLightboxLeft = cursorVariant === "lightbox-left";
  const isLightboxRight = cursorVariant === "lightbox-right";
  const isHidden = cursorVariant === "hidden";

  if (isHidden) return null;

  return (
    <>
      {/* Motion Trail - Cinematic 100-150ms tail */}
      <div className="fixed inset-0 z-[9990] pointer-events-none overflow-hidden">
        {trail.map((point, index) => {
          const opacity = 0.25 - index * 0.08;
          const scale = 0.8 - index * 0.2;
          return (
            <motion.div
              key={point.id}
              className="absolute top-0 left-0 w-4 h-4 border border-[#8B7355]/40 rounded-[2px]"
              style={{
                x: point.x - 8,
                y: point.y - 8,
                transform: "rotate(45deg)",
                opacity: Math.max(0, opacity),
                scale: Math.max(0.2, scale),
              }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            />
          );
        })}
      </div>

      {/* Main Luxury Diamond Cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center select-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div className="relative flex items-center justify-center">
          {/* Main Rotated Diamond (45° square) */}
          <motion.div
            className="border relative flex items-center justify-center backdrop-blur-[1px]"
            animate={{
              width: isView ? 34 : isButton ? 22 : isLink ? 26 : isDrag ? 28 : 18,
              height: isView ? 34 : isButton ? 22 : isLink ? 16 : isDrag ? 28 : 18,
              rotate: isButton ? 0 : 45,
              scaleX: isLink ? 1.4 : 1,
              scaleY: isLink ? 0.7 : 1,
              borderColor: isView
                ? "rgba(139, 115, 85, 0.95)"
                : isButton
                ? "rgba(255, 255, 255, 1)"
                : "rgba(255, 255, 255, 0.85)",
              backgroundColor: isView
                ? "rgba(6, 6, 6, 0.6)"
                : isButton
                ? "rgba(139, 115, 85, 0.2)"
                : "rgba(6, 6, 6, 0.2)",
              borderRadius: isButton ? "3px" : "2px",
              boxShadow: isView
                ? "0 0 15px rgba(139, 115, 85, 0.5), 0 0 30px rgba(139, 115, 85, 0.25)"
                : isButton
                ? "0 0 20px rgba(255, 255, 255, 0.4), 0 0 15px rgba(139, 115, 85, 0.4)"
                : "0 0 10px rgba(139, 115, 85, 0.35), 0 0 20px rgba(139, 115, 85, 0.15)",
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              mass: 0.2,
            }}
          >
            {/* Center Glowing Dot */}
            {!isDrag && !isLightboxLeft && !isLightboxRight && (
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-[#8B7355] shadow-[0_0_6px_#8B7355]"
                animate={{
                  scale: isView ? [1, 1.4, 1] : isButton ? [1, 1.3, 1] : 1,
                  backgroundColor: isButton ? "#ffffff" : "#8B7355",
                }}
                transition={{
                  repeat: isView ? Infinity : 0,
                  duration: isView ? 1.5 : 0.2,
                  ease: "easeInOut",
                }}
              />
            )}

            {/* Drag Arrows Icon */}
            {isDrag && (
              <motion.svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8B7355"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: -45 }}
                transition={{ duration: 0.15 }}
              >
                <path d="M12 2v20M2 12h20M5 9l-3 3 3 3M19 9l3 3-3 3M9 5l3-3 3 3M9 19l3 3 3-3" />
              </motion.svg>
            )}

            {/* Lightbox Arrow Left */}
            {isLightboxLeft && (
              <motion.svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e8e4df"
                strokeWidth="2.5"
                initial={{ opacity: 0, x: 4, rotate: -45 }}
                animate={{ opacity: 1, x: 0, rotate: -45 }}
                transition={{ duration: 0.15 }}
              >
                <path d="M15 19l-7-7 7-7" />
              </motion.svg>
            )}

            {/* Lightbox Arrow Right */}
            {isLightboxRight && (
              <motion.svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e8e4df"
                strokeWidth="2.5"
                initial={{ opacity: 0, x: -4, rotate: -45 }}
                animate={{ opacity: 1, x: 0, rotate: -45 }}
                transition={{ duration: 0.15 }}
              >
                <path d="M9 5l7 7-7 7" />
              </motion.svg>
            )}
          </motion.div>

          {/* Floating VIEW Label underneath image hover */}
          <AnimatePresence>
            {isView && (
              <motion.span
                className="absolute top-10 left-1/2 -translate-x-1/2 text-[10px] font-heading font-semibold tracking-[0.25em] uppercase text-[#8B7355] bg-primary/90 px-2 py-0.5 border border-[#8B7355]/30 rounded shadow-lg backdrop-blur-md pointer-events-none whitespace-nowrap"
                initial={{ opacity: 0, y: -4, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.85 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                VIEW
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
}

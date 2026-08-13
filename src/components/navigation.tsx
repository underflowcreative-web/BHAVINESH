"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useCursor } from "@/hooks/use-cursor";
import { categories } from "@/data/portfolio";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Featured Work", href: "/#portfolio" },
  { label: "All Categories", href: "/#categories" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
  { label: "Instagram", href: "https://instagram.com/bhavinesh_bharathan", external: true },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setCursorVariant } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Fixed Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[900] section-padding flex items-center justify-between transition-all duration-700 ${
          scrolled ? "py-4 backdrop-blur-sm bg-primary/70" : "py-6"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo / Brand */}
        <Link
          href="/"
          className="relative z-[950] nav-link-premium"
          onMouseEnter={() => setCursorVariant("link")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <span className="font-heading text-sm tracking-[0.25em] uppercase text-[#e8e4df] font-light">
            BHAVINESH BHARATHAN
          </span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[950] w-10 h-10 flex flex-col items-end justify-center gap-[6px] group"
          onMouseEnter={() => setCursorVariant("button")}
          onMouseLeave={() => setCursorVariant("default")}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <motion.span
            className="block h-[1.5px] bg-[#e8e4df] origin-right"
            animate={{
              width: isOpen ? 28 : 28,
              rotate: isOpen ? -45 : 0,
              y: isOpen ? 0 : 0,
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.span
            className="block h-[1.5px] bg-[#e8e4df]"
            animate={{
              width: isOpen ? 0 : 20,
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.span
            className="block h-[1.5px] bg-[#e8e4df] origin-right"
            animate={{
              width: isOpen ? 28 : 14,
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 0 : 0,
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </button>
      </motion.header>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[890] bg-primary flex items-center overflow-y-auto py-24"
            initial={{ clipPath: "inset(0 0 0 100%)" }}
            animate={{ clipPath: "inset(0 0 0 0%)" }}
            exit={{ clipPath: "inset(0 0 0 100%)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg className="w-full h-full">
                <filter id="menuNoise">
                  <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#menuNoise)" />
              </svg>
            </div>

            {/* Menu Content */}
            <div className="section-padding w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <nav className="lg:col-span-7 flex flex-col gap-2 md:gap-3">
                {menuItems.map((item, i) => (
                  <div key={item.label} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "120%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "120%", opacity: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.1 + i * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-section-title text-[#e8e4df] hover:text-bronze transition-colors duration-500 py-1 nav-link-premium"
                          onClick={() => setIsOpen(false)}
                          onMouseEnter={() => setCursorVariant("link")}
                          onMouseLeave={() => setCursorVariant("default")}
                        >
                          <span className="inline-flex items-center gap-4">
                            <span className="text-label text-stone/40 font-heading">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {item.label}
                            <span className="text-sm text-stone/40">↗</span>
                          </span>
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="block text-section-title text-[#e8e4df] hover:text-bronze transition-colors duration-500 py-1 nav-link-premium"
                          onClick={() => setIsOpen(false)}
                          onMouseEnter={() => setCursorVariant("link")}
                          onMouseLeave={() => setCursorVariant("default")}
                        >
                          <span className="inline-flex items-center gap-4">
                            <span className="text-label text-stone/40 font-heading">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {item.label}
                          </span>
                        </Link>
                      )}
                    </motion.div>
                  </div>
                ))}
              </nav>

              {/* Categories Column */}
              <div className="lg:col-span-5 flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
                <span className="text-label text-bronze tracking-[0.25em] uppercase text-xs font-semibold">
                  Collections ({categories.length})
                </span>
                <div className="grid grid-cols-2 gap-3 text-sm font-heading">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/category/${cat.slug}`}
                      onClick={() => setIsOpen(false)}
                      onMouseEnter={() => setCursorVariant("link")}
                      onMouseLeave={() => setCursorVariant("default")}
                      className="text-stone hover:text-white transition-colors duration-300 flex items-center justify-between py-1 border-b border-white/5"
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs text-stone/40">{cat.count}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

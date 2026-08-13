"use client";

import { useParams } from "next/navigation";
import { motion } from "motion/react";
import { useState, useCallback } from "react";
import { portfolioImages, categories } from "@/data/portfolio";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Lightbox } from "@/components/lightbox";
import Link from "next/link";
import { useCursor } from "@/hooks/use-cursor";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const category = categories.find((c) => c.slug === slug);
  const images = portfolioImages.filter((img) => img.category === slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { setCursorVariant } = useCursor();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--badge-x', `${x}px`);
    e.currentTarget.style.setProperty('--badge-y', `${y}px`);
  }, []);

  if (!category) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-editorial text-[#e8e4df] mb-4">Category not found</h1>
          <Link
            href="/"
            className="text-label text-stone hover:text-bronze transition-colors duration-300 nav-link-premium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={category.coverImage}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        </div>

        <div className="relative section-padding pb-16 w-full">
          <ScrollReveal>
            <Link
              href="/#categories"
              className="text-label text-stone/60 hover:text-bronze transition-colors duration-300 mb-6 inline-block nav-link-premium"
            >
              ← Back to Categories
            </Link>
            <h1 className="text-hero text-[#e8e4df]">{category.name}</h1>
            <p className="text-body-lg mt-4 max-w-lg">{category.description}</p>
            <p className="text-label text-stone/40 mt-4">{images.length} Photographs</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="section-padding editorial-gap">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <ScrollReveal key={image.id} delay={Math.min(index * 0.05, 0.4)}>
              <div
                className="portfolio-image-wrapper mb-3 md:mb-4 break-inside-avoid"
                onClick={() => openLightbox(index)}
                onMouseMove={handleMouseMove}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover"
                  style={{
                    height: index % 3 === 0 ? "450px" : index % 3 === 1 ? "320px" : "380px",
                  }}
                  loading="lazy"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
                <span className="view-badge">VIEW</span>
                <div className="portfolio-image-label">
                  <span className="text-label text-[#e8e4df]">{category.name}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Gallery End CTA */}
      <section className="section-padding py-20 md:py-28 bg-primary relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,115,85,0.05),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
          <div className="h-[1px] w-12 bg-[#8B7355]/40 mx-auto" />
          <h3 className="font-display text-2xl sm:text-3xl text-white font-light tracking-tight">
            Love What You See?
          </h3>
          <p className="text-xs sm:text-sm font-body font-light text-[#c2bbae]/80 leading-relaxed tracking-wide">
            Let&apos;s create something beautiful together. Enquire now to discuss your {category.name.toLowerCase()} photography experience.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="/#contact"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
              className="uppercase tracking-[0.22em] font-heading text-xs bg-[#8B7355] hover:bg-[#8B7355]/80 text-white px-8 py-3.5 transition-all duration-300 rounded-sm font-medium inline-flex items-center gap-2"
            >
              <span>Enquire Now</span>
              <span>→</span>
            </a>
            <a
              href="/#contact"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
              className="uppercase tracking-[0.22em] font-heading text-xs border border-white/20 hover:border-[#8B7355] text-[#e8e4df] hover:text-[#8B7355] px-8 py-3.5 transition-all duration-300 rounded-sm inline-flex items-center gap-2"
            >
              <span>Book a Session</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={images.map((img) => ({ src: img.src, alt: img.alt }))}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}

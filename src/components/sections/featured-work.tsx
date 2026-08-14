'use client';

import { useState, useCallback } from 'react';
import { portfolioImages, categories } from '@/data/portfolio';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCursor } from '@/hooks/use-cursor';
import { Lightbox } from '@/components/lightbox';

export function FeaturedWork() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { setCursorVariant } = useCursor();

  const filteredImages = selectedCategory === 'all'
    ? portfolioImages.filter(img => img.featured).length >= 12
      ? portfolioImages.filter(img => img.featured)
      : portfolioImages.slice(0, 32)
    : portfolioImages.filter(img => img.category === selectedCategory);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--badge-x', `${x}px`);
    e.currentTarget.style.setProperty('--badge-y', `${y}px`);
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="portfolio" className="section-padding editorial-gap bg-primary relative">
      <ScrollReveal>
        <div className="relative mb-8 sm:mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 md:gap-12 overflow-hidden">
          <div className="relative z-10">
            <span className="absolute -top-8 sm:-top-12 md:-top-24 left-0 font-display text-[5rem] sm:text-[8rem] md:text-[15rem] leading-none text-white/5 font-bold z-0 pointer-events-none select-none max-w-full overflow-hidden">
              01
            </span>
            <div className="relative z-10">
              <h2 className="text-section-title">
                <span className="block">Featured</span>
                <span className="block text-stone">Work</span>
              </h2>
            </div>
          </div>

          <div className="relative z-10 max-w-md pb-1 md:pb-2">
            <p className="text-xs sm:text-sm font-body font-light text-stone/80 leading-relaxed tracking-wide">
              Every frame tells a story. Explore a curated collection of timeless moments across{' '}
              <span className="text-[#8B7355] font-normal">{portfolioImages.length}+ photographs</span> in{' '}
              <span className="text-[#8B7355] font-normal">{categories.length} photography categories</span>.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Luxury Category Filter Row - Horizontally Scrollable on Mobile, Wrap on Desktop */}
      <ScrollReveal delay={0.2}>
        <div className="flex items-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 mb-8 sm:mb-12 pb-3 sm:pb-5 border-b border-white/10 overflow-x-auto no-scrollbar flex-nowrap sm:flex-wrap">
          <button
            onClick={() => setSelectedCategory('all')}
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('default')}
            className={`text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] font-heading py-2 transition-all duration-300 relative flex-shrink-0 cursor-pointer ${
              selectedCategory === 'all'
                ? 'text-white font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#8B7355]'
                : 'text-stone/60 hover:text-white'
            }`}
          >
            All Works <span className="text-[10px] text-[#8B7355]/80 font-mono ml-1">({portfolioImages.length})</span>
          </button>

          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
                className={`text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] font-heading py-2 transition-all duration-300 relative flex-shrink-0 cursor-pointer ${
                  isSelected
                    ? 'text-white font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#8B7355]'
                    : 'text-stone/60 hover:text-white'
                }`}
              >
                {cat.name} <span className="text-[10px] text-[#8B7355]/80 font-mono ml-1">({cat.count})</span>
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
        {filteredImages.map((image, index) => {
          let spanClass = '';
          let heightClass = 'h-[240px] sm:h-[220px] md:h-[300px]';

          if (index % 5 === 0) {
            spanClass = 'sm:col-span-2 sm:row-span-2';
            heightClass = 'h-[300px] sm:h-[440px] md:h-[610px]';
          } else if (index % 5 === 3) {
            spanClass = 'sm:col-span-2';
            heightClass = 'h-[240px] sm:h-[260px] md:h-[320px]';
          }

          const catName = categories.find(c => c.slug === image.category)?.name || image.category;

          return (
            <ScrollReveal
              key={image.id}
              delay={Math.min(index * 0.04, 0.4)}
              className={spanClass}
            >
              <div
                className={`portfolio-image-wrapper relative w-full overflow-hidden ${heightClass} cursor-pointer rounded-sm`}
                onClick={() => openLightbox(index)}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setCursorVariant('view')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <span className="view-badge">VIEW</span>
                <div className="portfolio-image-label">
                  <span className="text-label text-[#e8e4df]">{catName}</span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="w-full h-[1px] bg-white/10 mt-16 sm:mt-24"></div>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages.map((img) => ({ src: img.src, alt: img.alt }))}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}

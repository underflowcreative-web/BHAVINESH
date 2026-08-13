'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { categories } from '@/data/portfolio';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCursor } from '@/hooks/use-cursor';

export function PortfolioCategories() {
  const { setCursorVariant } = useCursor();
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--badge-x', `${x}px`);
    e.currentTarget.style.setProperty('--badge-y', `${y}px`);
  }, []);

  return (
    <section id="categories" className="section-padding editorial-gap bg-primary">
      <ScrollReveal>
        <div className="mb-20 md:mb-32">
          <h2 className="text-section-title">
            <span className="block">Explore</span>
            <span className="block text-stone">Categories</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="flex flex-col">
        {categories.map((category, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={category.slug} className="my-20 md:my-32 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              {/* Image side */}
              <ScrollReveal 
                direction={isEven ? 'right' : 'left'} 
                className={`w-full md:w-[60%] ${!isEven ? 'md:order-2' : ''}`}
              >
                <Link href={`/category/${category.slug}`}>
                  <div 
                    className="portfolio-image-wrapper relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setCursorVariant('view')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <img
                      src={category.coverImage}
                      alt={category.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <span className="view-badge">VIEW</span>
                  </div>
                </Link>
              </ScrollReveal>
              
              {/* Text side */}
              <ScrollReveal 
                direction={isEven ? 'left' : 'right'} 
                className={`w-full md:w-[40%] flex flex-col justify-center ${!isEven ? 'md:order-1 items-start md:items-end md:text-right' : ''}`}
              >
                <div className={`max-w-md ${!isEven ? 'md:ml-auto' : ''}`}>
                  <h3 className="text-editorial font-display mb-6">{category.name}</h3>
                  <p className="text-body-lg text-stone mb-8">{category.description}</p>
                  
                  <div className={`flex flex-col gap-4 ${!isEven ? 'md:items-end' : ''}`}>
                    <span className="text-label text-stone/60">{category.count} photographs</span>
                    <Link 
                      href={`/category/${category.slug}`} 
                      className="text-label hover:text-bronze transition-colors flex items-center gap-2 group nav-link-premium"
                      onMouseEnter={() => setCursorVariant('link')}
                      onMouseLeave={() => setCursorVariant('default')}
                    >
                      View Collection <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}

'use client';

import { useCallback } from 'react';
import { services } from '@/data/services';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCursor } from '@/hooks/use-cursor';

export function Services() {
  const { setCursorVariant } = useCursor();
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--badge-x', `${x}px`);
    e.currentTarget.style.setProperty('--badge-y', `${y}px`);
  }, []);

  return (
    <section id="services" className="section-padding editorial-gap bg-primary relative overflow-hidden">
      <ScrollReveal>
        <div className="mb-20 md:mb-32">
          <h2 className="text-section-title">
            <span className="block">What I</span>
            <span className="block text-stone">Offer</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-24 md:gap-32">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const number = (index + 1).toString().padStart(2, '0');
          
          return (
            <ScrollReveal key={service.id}>
              <div className="relative w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <span className="absolute top-0 font-display text-[8rem] md:text-[12rem] leading-none text-white/[0.03] font-bold z-0 pointer-events-none select-none left-0 md:left-auto md:right-0">
                  {number}
                </span>
                
                <div className={`w-full md:w-1/2 relative z-10 ${!isEven ? 'md:order-2' : ''}`}>
                  <div 
                    className="portfolio-image-wrapper relative w-full h-[350px] md:h-[450px] overflow-hidden"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setCursorVariant('view')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <span className="view-badge">VIEW</span>
                  </div>
                </div>
                
                <div className={`w-full md:w-1/2 relative z-10 flex flex-col justify-center ${!isEven ? 'md:order-1 md:items-end md:text-right' : ''}`}>
                  <div className={`max-w-xl ${!isEven ? 'md:ml-auto' : ''}`}>
                    <h3 className="text-editorial font-display mb-6 text-[#e8e4df]">{service.title}</h3>
                    <p className="text-body-lg text-stone mb-10">{service.description}</p>
                    
                    <a 
                      href="#contact" 
                      className="text-label hover:text-bronze transition-colors flex items-center gap-2 group nav-link-premium"
                      onMouseEnter={() => setCursorVariant('link')}
                      onMouseLeave={() => setCursorVariant('default')}
                    >
                      Enquire Now <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}

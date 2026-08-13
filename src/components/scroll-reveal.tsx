'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 60, x: 0 };
      case 'down':
        return { y: -60, x: 0 };
      case 'left':
        return { x: 60, y: 0 };
      case 'right':
        return { x: -60, y: 0 };
      default:
        return { y: 60, x: 0 };
    }
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, ...getInitialPosition() }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          x: isInView ? 0 : getInitialPosition().x, 
          y: isInView ? 0 : getInitialPosition().y 
        }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

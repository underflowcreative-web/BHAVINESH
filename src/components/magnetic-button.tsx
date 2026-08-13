'use client';

import { useRef, useState, ReactNode } from 'react';
import { motion } from 'motion/react';
import { useCursor } from '@/hooks/use-cursor';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function MagneticButton({
  children,
  className = '',
  onClick,
  href,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | any>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { setCursorVariant } = useCursor();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
    
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    const moveX = (x / width) * 20;
    const moveY = (y / height) * 20;
    
    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
    setCursorVariant('default');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCursorVariant('button');
  };

  const baseStyles = `relative inline-flex items-center justify-center uppercase tracking-[0.2em] text-sm font-heading text-stone-300 px-8 py-4 border-[1px] border-white/15 transition-all duration-300 hover:border-[#8B7355] hover:text-white ${className}`;

  const glowStyle = isHovered ? {
    boxShadow: '0 0 25px rgba(139, 115, 85, 0.25), 0 0 45px rgba(139, 115, 85, 0.1)',
  } : {};

  const content = (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        ref={buttonRef}
        href={href}
        className={baseStyles}
        style={glowStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={baseStyles}
      style={glowStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {content}
    </button>
  );
}

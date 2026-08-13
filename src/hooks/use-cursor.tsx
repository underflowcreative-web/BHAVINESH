'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type CursorVariant = 
  | 'default' 
  | 'view' 
  | 'button' 
  | 'link' 
  | 'drag' 
  | 'lightbox-left' 
  | 'lightbox-right' 
  | 'hidden';

interface CursorContextType {
  cursorVariant: CursorVariant;
  setCursorVariant: (variant: CursorVariant) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');

  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    // Return dummy no-op if used outside provider gracefully
    return {
      cursorVariant: 'default' as CursorVariant,
      setCursorVariant: () => {},
    };
  }
  return context;
}

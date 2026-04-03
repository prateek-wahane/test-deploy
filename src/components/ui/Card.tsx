'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'bg-white border border-slate-200/60 rounded-2xl p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

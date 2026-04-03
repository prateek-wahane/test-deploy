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
        'bg-white border border-slate-100 rounded-md p-6 transition-colors duration-300 hover:border-slate-200',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  href?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-slate-900 text-white hover:bg-slate-800',
  secondary:
    'border border-slate-300 text-slate-700 hover:bg-slate-50',
  ghost:
    'text-accent hover:text-accent-700 hover:bg-slate-50',
};

export default function Button({
  variant = 'primary',
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded px-6 py-3 text-sm font-semibold font-body transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-white',
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

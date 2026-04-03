'use client';

import { cn } from '@/lib/utils';

interface PulsingDotProps {
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

const sizeMap = {
  sm: 'h-2 w-2',
  md: 'h-3 w-3',
  lg: 'h-4 w-4',
};

const pulseSize = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
};

export default function PulsingDot({
  className,
  size = 'md',
  label,
}: PulsingDotProps) {
  return (
    <div className={cn('relative flex items-center justify-center', className)}>
      <span
        className={cn(
          'absolute rounded-full bg-accent/30 animate-ping',
          pulseSize[size]
        )}
      />
      <span
        className={cn(
          'relative rounded-full bg-accent',
          sizeMap[size]
        )}
      />
      {label && (
        <span className="ms-2 text-xs font-medium text-slate-700 whitespace-nowrap">
          {label}
        </span>
      )}
    </div>
  );
}

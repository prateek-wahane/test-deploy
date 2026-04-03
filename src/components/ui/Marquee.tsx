'use client';

import { cn } from '@/lib/utils';

interface MarqueeProps {
  items: string[];
  className?: string;
  reverse?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
}

const speedMap = {
  slow: 'animate-marquee [animation-duration:45s]',
  normal: 'animate-marquee [animation-duration:30s]',
  fast: 'animate-marquee [animation-duration:18s]',
};

const speedMapReverse = {
  slow: 'animate-marquee-reverse [animation-duration:45s]',
  normal: 'animate-marquee-reverse [animation-duration:30s]',
  fast: 'animate-marquee-reverse [animation-duration:18s]',
};

export default function Marquee({
  items,
  className,
  reverse = false,
  speed = 'normal',
}: MarqueeProps) {
  const doubled = [...items, ...items];
  const animClass = reverse ? speedMapReverse[speed] : speedMap[speed];

  return (
    <div className={cn('overflow-hidden', className)}>
      <div className={cn('flex w-max gap-8', animClass)}>
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

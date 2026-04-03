import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2 className="text-3xl font-heading font-semibold tracking-heading sm:text-4xl lg:text-5xl text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-slate-500 mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

'use client';

import { useDirection } from '@/context/DirectionContext';
import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en' as const, label: 'EN' },
  { code: 'fr' as const, label: 'FR' },
  { code: 'de' as const, label: 'DE' },
  { code: 'ar' as const, label: 'AR' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useDirection();

  return (
    <div className="flex items-center gap-1">
      <Globe className="h-4 w-4 text-slate-400 me-1" strokeWidth={1.5} />
      {languages.map((lang, idx) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => setLanguage(lang.code)}
            className={cn(
              'px-1.5 py-0.5 text-xs font-medium rounded-sm transition-colors',
              language === lang.code
                ? 'text-accent bg-blue-50'
                : 'text-slate-400 hover:text-slate-700'
            )}
          >
            {lang.label}
          </button>
          {idx < languages.length - 1 && (
            <span className="text-slate-300 text-xs mx-0.5">|</span>
          )}
        </span>
      ))}
    </div>
  );
}

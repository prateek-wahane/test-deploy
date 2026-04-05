'use client';

import { useDirection } from '@/context/DirectionContext';
import { cn } from '@/lib/utils';
import { Globe, ChevronDown } from 'lucide-react';
import { useState, useRef } from 'react';

const languages = [
  { code: 'en' as const, label: 'EN', name: 'English' },
  { code: 'fr' as const, label: 'FR', name: 'Français' },
  { code: 'de' as const, label: 'DE', name: 'Deutsch' },
  { code: 'ar' as const, label: 'AR', name: 'العربية' },
  { code: 'es' as const, label: 'ES', name: 'Español' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useDirection();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
      >
        <Globe className="h-4 w-4" strokeWidth={1.5} />
        <span>{currentLanguage?.label}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 end-0 w-40 bg-white rounded-md border border-slate-100 shadow-lg z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={cn(
                'w-full flex items-center gap-2 px-4 py-3 text-sm text-left transition-colors border-0',
                language === lang.code
                  ? 'bg-accent/10 text-accent font-medium'
                  : 'text-slate-700 hover:bg-slate-50'
              )}
            >
              <span className="font-semibold">{lang.label}</span>
              <span className="text-xs text-slate-500">({lang.name})</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

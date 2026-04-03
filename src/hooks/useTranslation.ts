'use client';

import { useCallback } from 'react';
import { useDirection } from '@/context/DirectionContext';
import en from '@/locales/en.json';
import de from '@/locales/de.json';
import fr from '@/locales/fr.json';
import ar from '@/locales/ar.json';

type Translations = typeof en;
type Language = 'en' | 'fr' | 'de' | 'ar';

const dictionaries: Record<Language, Translations> = { en, de, fr, ar };

function getNestedValue(obj: unknown, path: string): string {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return path;
  }, obj) as string;
}

export function useTranslation() {
  const { language } = useDirection();
  const dict = dictionaries[language] || dictionaries.en;

  const t = useCallback(
    (key: string, fallback?: string): string => {
      const value = getNestedValue(dict, key);
      if (typeof value === 'string') return value;
      return fallback ?? key;
    },
    [dict]
  );

  return { t, language };
}

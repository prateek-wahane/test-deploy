'use client';

import { useCallback } from 'react';
import { useDirection } from '@/context/DirectionContext';
import en from '@/locales/en.json';
import de from '@/locales/de.json';
import fr from '@/locales/fr.json';
import ar from '@/locales/ar.json';
import es from '@/locales/es.json';

type Translations = typeof en;

const dictionaries: Record<string, Translations> = { en, de, fr, ar, es };

function getNestedValue(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
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

  const tRaw = useCallback(
    (key: string): unknown => {
      return getNestedValue(dict, key);
    },
    [dict]
  );

  return { t, tRaw, language };
}

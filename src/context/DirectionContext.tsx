'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type Direction = 'ltr' | 'rtl';
type Language = 'en' | 'fr' | 'de' | 'ar' | 'es';

interface DirectionContextType {
  direction: Direction;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const DirectionContext = createContext<DirectionContextType>({
  direction: 'ltr',
  language: 'en',
  setLanguage: () => {},
});

export function DirectionProvider({ children }: { children: ReactNode }) {
  const [language, setLang] = useState<Language>('en');

  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  const setLanguage = useCallback((lang: Language) => {
    setLang(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, []);

  return (
    <DirectionContext.Provider value={{ direction, language, setLanguage }}>
      {children}
    </DirectionContext.Provider>
  );
}

export function useDirection() {
  return useContext(DirectionContext);
}

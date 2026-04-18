'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ExternalLink } from 'lucide-react';
import { navigation } from '@/data/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function getSlugFromHref(href: string): string {
  const parts = href.split('/');
  return parts[parts.length - 1];
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 end-0 h-full w-80 max-w-[85vw] bg-white z-50 overflow-y-auto"
          >
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <span className="text-lg font-heading font-bold text-slate-900">{t('nav.menu')}</span>
              <button
                onClick={onClose}
                className="p-2 rounded-md hover:bg-slate-50 text-slate-500"
                aria-label={t('nav.closeMenu')}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="p-5 space-y-1">
              <button
                onClick={() => setWhatWeDoOpen(!whatWeDoOpen)}
                className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {t('nav.whatWeDo')}
                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform ${whatWeDoOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {whatWeDoOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    {navigation.whatWeDo.map((col) => {
                      const sectionKey = col.title === 'Services' ? 'nav.services' : 'nav.industries';
                      const itemsKey = col.title === 'Services' ? 'services.items' : 'industries.items';
                      return (
                        <div key={col.title} className="ps-4 mb-3">
                          <Link
                            href={col.href || '#'}
                            onClick={onClose}
                            className="block px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-accent transition-colors"
                          >
                            {t(sectionKey)}
                          </Link>
                          {col.items.map((item) => {
                            const slug = getSlugFromHref(item.href);
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                              >
                                {t(`${itemsKey}.${slug}`, item.label)}
                              </Link>
                            );
                          })}
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setWhoWeAreOpen(!whoWeAreOpen)}
                className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {t('nav.whoWeAre')}
                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform ${whoWeAreOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {whoWeAreOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="ps-4">
                      {navigation.whoWeAre.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={onClose}
                          className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Portfolio */}
              {!navigation.portfolio?.[0]?.hidden && (
                <>
                  <button
                    onClick={() => setPortfolioOpen(!portfolioOpen)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    {t('nav.portfolio')}
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 transition-transform ${portfolioOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {portfolioOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="ps-4">
                          {navigation.portfolio?.map((item) => (
                            !item.hidden && (
                              <a
                                key={item.href}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onClose}
                                className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                              >
                                {item.label}
                                <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                              </a>
                            )
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}

              {!navigation.careers?.hidden && (
                <Link
                  href="/careers"
                  onClick={onClose}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {t('nav.careers')}
                </Link>
              )}

              <Link
                href="/contact"
                onClick={onClose}
                className="block rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {t('nav.contactUs')}
              </Link>
            </nav>

            <div className="p-5 border-t border-slate-100">
              <LanguageSwitcher />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

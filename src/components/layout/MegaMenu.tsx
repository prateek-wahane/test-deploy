'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { useTranslation } from '@/hooks/useTranslation';
import { getIcon } from '@/lib/icons';

interface MegaMenuProps {
  isOpen: boolean;
}

const serviceIconMap: Record<string, string> = {};
services.forEach((s) => { serviceIconMap[s.slug] = s.icon; });

const industryIconMap: Record<string, string> = {};
industries.forEach((ind) => { industryIconMap[ind.slug] = ind.icon; });

function getSlugFromHref(href: string): string {
  const parts = href.split('/');
  return parts[parts.length - 1];
}

export default function MegaMenu({ isOpen }: MegaMenuProps) {
  const [servicesCol, industriesCol] = navigation.whatWeDo;
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="absolute start-0 top-full w-[580px] bg-white z-50 rounded-xl border border-slate-200/60 shadow-xl shadow-slate-200/30"
        >
          <div className="h-0.5 bg-gradient-to-r from-accent via-accent/60 to-transparent rounded-t-xl" />
          <div className="px-5 py-4">
            <div className="grid grid-cols-2 gap-0">
              {/* Services */}
              <div className="pe-6 border-e border-slate-200">
                <Link
                  href={servicesCol.href || '/services'}
                  className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-accent transition-colors"
                >
                  {t('nav.services')}
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <ul className="space-y-0">
                  {servicesCol.items.map((item) => {
                    const slug = getSlugFromHref(item.href);
                    const Icon = getIcon(serviceIconMap[slug] || 'Box');
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2.5 rounded px-2 py-1.5 text-[13px] text-slate-600 transition-all hover:bg-accent/5 hover:text-accent"
                        >
                          <Icon className="h-3.5 w-3.5 text-slate-400 shrink-0" strokeWidth={1.5} />
                          {t(`services.items.${slug}`, item.label)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Industries */}
              <div className="ps-6">
                <Link
                  href={industriesCol.href || '/industries'}
                  className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-accent transition-colors"
                >
                  {t('nav.industries')}
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <ul className="space-y-0">
                  {industriesCol.items.map((item) => {
                    const slug = getSlugFromHref(item.href);
                    const Icon = getIcon(industryIconMap[slug] || 'Box');
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-2.5 rounded px-2 py-1.5 text-[13px] text-slate-600 transition-all hover:bg-accent/5 hover:text-accent"
                        >
                          <Icon className="h-3.5 w-3.5 text-slate-400 shrink-0" strokeWidth={1.5} />
                          {t(`industries.items.${slug}`, item.label)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

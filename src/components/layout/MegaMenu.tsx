'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { navigation } from '@/data/navigation';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { useTranslation } from '@/hooks/useTranslation';

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
          className="absolute start-0 top-full w-full bg-white z-50 border-t border-slate-100 shadow-xl shadow-slate-200/30"
        >
          <div className="h-0.5 bg-gradient-to-r from-accent via-accent/60 to-transparent" />
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="grid grid-cols-2 gap-0">
              <div className="pe-8 border-e border-slate-100">
                <Link
                  href={servicesCol.href || '/services'}
                  className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-accent transition-colors"
                >
                  {t('nav.services')}
                  <Icons.ArrowRight className="h-3 w-3" />
                </Link>
                <ul className="space-y-0.5">
                  {servicesCol.items.map((item) => {
                    const slug = getSlugFromHref(item.href);
                    const iconName = serviceIconMap[slug] || 'Box';
                    const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[iconName] || Icons.Box;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 transition-all hover:bg-accent/5 hover:text-accent"
                        >
                          <Icon className="h-4 w-4 text-slate-400" strokeWidth={1.5} />
                          {t(`services.items.${slug}`, item.label)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="ps-8">
                <Link
                  href={industriesCol.href || '/industries'}
                  className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-accent transition-colors"
                >
                  {t('nav.industries')}
                  <Icons.ArrowRight className="h-3 w-3" />
                </Link>
                <ul className="space-y-0.5">
                  {industriesCol.items.map((item) => {
                    const slug = getSlugFromHref(item.href);
                    const iconName = industryIconMap[slug] || 'Box';
                    const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[iconName] || Icons.Box;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 transition-all hover:bg-accent/5 hover:text-accent"
                        >
                          <Icon className="h-4 w-4 text-slate-400" strokeWidth={1.5} />
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

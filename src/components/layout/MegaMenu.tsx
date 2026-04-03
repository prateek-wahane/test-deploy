'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation } from '@/data/navigation';

interface MegaMenuProps {
  isOpen: boolean;
}

export default function MegaMenu({ isOpen }: MegaMenuProps) {
  const [servicesCol, industriesCol] = navigation.whatWeDo;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="absolute start-0 top-full w-full bg-white z-50 border-t border-slate-100 shadow-sm"
        >
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="grid grid-cols-2 gap-0">
              {/* Services Column */}
              <div className="pe-8 border-e border-slate-100">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-900">
                  {servicesCol.title}
                </h3>
                <ul className="space-y-1">
                  {servicesCol.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries Column */}
              <div className="ps-8">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-900">
                  {industriesCol.title}
                </h3>
                <ul className="space-y-1">
                  {industriesCol.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

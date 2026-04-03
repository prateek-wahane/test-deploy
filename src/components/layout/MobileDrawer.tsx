'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { navigation } from '@/data/navigation';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);

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
              <span className="text-lg font-heading font-bold text-slate-900">Menu</span>
              <button
                onClick={onClose}
                className="p-2 rounded-md hover:bg-slate-50 text-slate-500"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="p-5 space-y-1">
              {/* What We Do */}
              <button
                onClick={() => setWhatWeDoOpen(!whatWeDoOpen)}
                className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                What We Do
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
                    {navigation.whatWeDo.map((col) => (
                      <div key={col.title} className="ps-4 mb-3">
                        <p className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">
                          {col.title}
                        </p>
                        {col.items.map((item) => (
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
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Who We Are */}
              <button
                onClick={() => setWhoWeAreOpen(!whoWeAreOpen)}
                className="flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Who We Are
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

              <Link
                href="/careers"
                onClick={onClose}
                className="block rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Careers
              </Link>

              <Link
                href="/contact"
                onClick={onClose}
                className="block rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Contact Us
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

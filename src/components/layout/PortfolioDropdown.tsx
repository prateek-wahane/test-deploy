'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { navigation } from '@/data/navigation';

interface PortfolioDropdownProps {
  isOpen: boolean;
}

export default function PortfolioDropdown({ isOpen }: PortfolioDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="absolute start-0 top-full min-w-[220px] bg-white rounded-xl z-50 overflow-hidden border border-slate-200/60 shadow-xl shadow-slate-200/30"
        >
          <div className="h-0.5 bg-gradient-to-r from-accent to-accent/30" />
          <ul className="py-2">
            {navigation.portfolio.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-2.5 text-sm text-slate-600 transition-all hover:bg-accent/5 hover:text-accent"
                >
                  {item.label}
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

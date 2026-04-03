'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation } from '@/data/navigation';

interface WhoWeAreDropdownProps {
  isOpen: boolean;
}

export default function WhoWeAreDropdown({ isOpen }: WhoWeAreDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="absolute start-0 top-full min-w-[220px] bg-white/98 backdrop-blur-xl rounded-xl z-50 overflow-hidden border border-slate-200/60 shadow-xl shadow-slate-200/30"
        >
          <div className="h-0.5 bg-gradient-to-r from-accent to-accent/30" />
          <ul className="py-2">
            {navigation.whoWeAre.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-5 py-2.5 text-sm text-slate-600 transition-all hover:bg-accent/5 hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

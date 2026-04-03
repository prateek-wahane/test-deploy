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
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="absolute start-0 top-full min-w-[220px] bg-white rounded-b-md z-50 overflow-hidden border border-slate-100 shadow-sm"
        >
          <ul className="py-2">
            {navigation.whoWeAre.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-5 py-2.5 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
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

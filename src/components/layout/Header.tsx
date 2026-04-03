'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronDown } from 'lucide-react';
import MegaMenu from './MegaMenu';
import WhoWeAreDropdown from './WhoWeAreDropdown';
import LanguageSwitcher from './LanguageSwitcher';
import MobileDrawer from './MobileDrawer';

export default function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const megaTimeout = useRef<NodeJS.Timeout | null>(null);
  const whoTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function openMega() {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setWhoOpen(false);
    setMegaOpen(true);
  }

  function closeMega() {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 150);
  }

  function openWho() {
    if (whoTimeout.current) clearTimeout(whoTimeout.current);
    setMegaOpen(false);
    setWhoOpen(true);
  }

  function closeWho() {
    whoTimeout.current = setTimeout(() => setWhoOpen(false), 150);
  }

  const textColor = scrolled ? 'text-slate-700' : 'text-white/90';
  const textHover = scrolled
    ? 'hover:text-slate-900 hover:bg-slate-50'
    : 'hover:text-white hover:bg-white/10';
  const contactColor = scrolled
    ? 'text-accent hover:text-accent-600 hover:bg-accent-50'
    : 'text-white hover:text-white hover:bg-white/10';
  const dividerColor = scrolled ? 'bg-slate-200' : 'bg-white/20';

  return (
    <header
      className={`fixed top-0 start-0 end-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {/* Small mark for compact areas */}
          <Image
            src="/logo.png"
            alt="Intelliware Global logo"
            width={36}
            height={36}
            className="rounded-md bg-transparent object-contain"
            priority
          />

          {/* Wordmark shown on small+ screens */}
          <div className="hidden sm:block">
            <Image
              src="/logo.png"
              alt="Intelliware Global"
              width={160}
              height={36}
              className={`transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-90'}`}
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
          >
            <button
              className={`flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${textColor} ${textHover}`}
            >
              What We Do
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>

          <span className={`h-4 w-px ${dividerColor} transition-colors duration-300`} />

          <div
            className="relative"
            onMouseEnter={openWho}
            onMouseLeave={closeWho}
          >
            <button
              className={`flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${textColor} ${textHover}`}
            >
              Who We Are
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <WhoWeAreDropdown isOpen={whoOpen} />
          </div>

          <span className={`h-4 w-px ${dividerColor} transition-colors duration-300`} />

          <Link
            href="/careers"
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${textColor} ${textHover}`}
          >
            Careers
          </Link>

          <span className={`h-4 w-px ${dividerColor} transition-colors duration-300`} />

          <Link
            href="/contact"
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${contactColor}`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          <button
            onClick={() => setDrawerOpen(true)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled ? 'hover:bg-slate-50 text-slate-700' : 'hover:bg-white/10 text-white'
            }`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mega Menu portal-style below header */}
      <div
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
      >
        <MegaMenu isOpen={megaOpen} />
      </div>

      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}

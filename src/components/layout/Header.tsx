'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronDown } from 'lucide-react';
import MegaMenu from './MegaMenu';
import WhoWeAreDropdown from './WhoWeAreDropdown';
import PortfolioDropdown from './PortfolioDropdown';
import LanguageSwitcher from './LanguageSwitcher';
import MobileDrawer from './MobileDrawer';
import { navigation } from '@/data/navigation';
import { useTranslation } from '@/hooks/useTranslation';

export default function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  const megaTimeout = useRef<NodeJS.Timeout | null>(null);
  const whoTimeout = useRef<NodeJS.Timeout | null>(null);
  const portfolioTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function openMega() {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setWhoOpen(false);
    setPortfolioOpen(false);
    setMegaOpen(true);
  }

  function closeMega() {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 150);
  }

  function openWho() {
    if (whoTimeout.current) clearTimeout(whoTimeout.current);
    setMegaOpen(false);
    setPortfolioOpen(false);
    setWhoOpen(true);
  }

  function closeWho() {
    whoTimeout.current = setTimeout(() => setWhoOpen(false), 150);
  }

  function openPortfolio() {
    if (portfolioTimeout.current) clearTimeout(portfolioTimeout.current);
    setMegaOpen(false);
    setWhoOpen(false);
    setPortfolioOpen(true);
  }

  function closePortfolio() {
    portfolioTimeout.current = setTimeout(() => setPortfolioOpen(false), 150);
  }

  return (
    <header
      className={`sticky top-0 start-0 end-0 z-50 transition-all duration-500 bg-white ${
        scrolled
          ? 'border-b border-slate-200/60 shadow-sm shadow-slate-200/50'
          : 'border-b border-slate-100'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center shrink-0 me-4">
          <Image
            src="/logo.png"
            alt="Intelliware Global"
            width={200}
            height={48}
            className="transition-opacity duration-300 opacity-100"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
          >
            <button
              className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-semibold font-heading text-slate-700 hover:text-accent hover:bg-accent/5 transition-all duration-200"
            >
              {t('nav.whatWeDo')}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
            </button>
            <MegaMenu isOpen={megaOpen} />
          </div>

          <span className="h-4 w-px bg-slate-200 transition-colors duration-300" />

          <div
            className="relative"
            onMouseEnter={openWho}
            onMouseLeave={closeWho}
          >
            <button
              className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-semibold font-heading text-slate-700 hover:text-accent hover:bg-accent/5 transition-all duration-200"
            >
              {t('nav.whoWeAre')}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${whoOpen ? 'rotate-180' : ''}`} />
            </button>
            <WhoWeAreDropdown isOpen={whoOpen} />
          </div>

          <span className="h-4 w-px bg-slate-200 transition-colors duration-300" />

          {!navigation.portfolio?.[0]?.hidden && (
            <>
              <div
                className="relative"
                onMouseEnter={openPortfolio}
                onMouseLeave={closePortfolio}
              >
                <button
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-semibold font-heading text-slate-700 hover:text-accent hover:bg-accent/5 transition-all duration-200"
                >
                  {t('nav.portfolio')}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${portfolioOpen ? 'rotate-180' : ''}`} />
                </button>
                <PortfolioDropdown isOpen={portfolioOpen} />
              </div>

              <span className="h-4 w-px bg-slate-200 transition-colors duration-300" />
            </>
          )}

          {!navigation.careers?.hidden && (
            <>
              <Link
                href="/careers"
                className="rounded-lg px-4 py-2 text-sm font-semibold font-heading text-slate-700 hover:text-accent hover:bg-accent/5 transition-all duration-200"
              >
                {t('nav.careers')}
              </Link>

              <span className="h-4 w-px bg-slate-200 transition-colors duration-300" />
            </>
          )}

          <Link
            href="/contact"
            className="rounded-lg px-4 py-2 text-sm font-semibold font-heading text-slate-700 hover:text-accent hover:bg-accent/5 transition-all duration-200"
          >
            {t('nav.contactUs')}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          <button
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden p-2 rounded-lg transition-colors hover:bg-slate-50 text-slate-700"
            aria-label={t('nav.openMenu')}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}

'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Globe, Users } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const slides = [
  {
    id: 'ai-frontier',
    image: '/hero/slide-1.png',
    video: '/hero/intelliware-carousel.mp4',
    ctas: [
      { href: '/contact', primary: true },
      { href: '/about/about-us', primary: false },
    ],
  },
  {
    id: 'intelliware-edge',
    image: '/hero/slide-2.png',
    video: '/hero/agentic.mp4',
    ctas: [
      { href: '/about/about-us', primary: true },
      { href: '/services/applications', primary: false },
    ],
  },
  {
    id: 'genai-solutions',
    image: '/hero/slide-1.png',
    video: '/hero/gen_ai.mp4',
    ctas: [
      { href: '/services/applications', primary: true },
      { href: '/about/about-us', primary: false },
    ],
  },
  {
    id: 'collaboration-team',
    image: '/hero/collabortion and team.jpeg',
    ctas: [
      { href: '/about/about-us', primary: true },
      { href: '/careers', primary: false },
    ],
  },
  {
    id: 'customer-growth',
    image: '/hero/customer-growth.jpeg',
    ctas: [
      { href: '/about/about-us', primary: true },
      { href: '/contact', primary: false },
    ],
  },
];

const trustItems = [
  { icon: ShieldCheck, key: 'security' },
  { icon: Globe, key: 'global' },
  { icon: Users, key: 'team' },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const { t } = useTranslation();

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slideTexts = (t('hero.slides') as unknown) as Array<{
    tagline: string;
    headline: string;
    subtext: string;
    ctas: string[];
  }>;

  const currentSlideText = Array.isArray(slideTexts) ? slideTexts[current] : null;

  return (
    <>
      <section
        className="relative h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {slides[current].video ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={slides[current].video} type="video/mp4" />
                <Image
                  src={slides[current].image}
                  alt=""
                  fill
                  className="object-cover"
                  priority={current === 0}
                  quality={90}
                />
              </video>
            ) : (
              <Image
                src={slides[current].image}
                alt=""
                fill
                className="object-cover"
                priority={current === 0}
                quality={90}
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-slate-900/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="max-w-3xl"
                >
                  {currentSlideText && (
                    <>
                      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/90">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        {currentSlideText.tagline}
                      </p>

                      <h1 className="text-4xl font-heading font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl whitespace-pre-line leading-[1.08]">
                        {currentSlideText.headline}
                      </h1>

                      <p className="mt-6 text-lg text-white/80 sm:text-xl lg:text-2xl leading-relaxed max-w-2xl">
                        {currentSlideText.subtext}
                      </p>

                      <div className="mt-10 flex flex-wrap gap-4">
                        {slides[current].ctas.map((cta, idx) => (
                          <Link
                            key={idx}
                            href={cta.href}
                            className={`inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold transition-all duration-200 ${
                              cta.primary
                                ? 'bg-accent text-white hover:bg-accent-600 shadow-lg shadow-accent/25'
                                : 'border border-white/25 text-white hover:bg-white/10 backdrop-blur-sm'
                            }`}
                          >
                            {currentSlideText.ctas[idx]}
                            {cta.primary && <ArrowRight className="h-4 w-4" />}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-8 start-0 end-0 z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-10 bg-accent' : 'w-4 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`${t('common.goToSlide')} ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="rounded-lg border border-white/20 p-2.5 text-white/60 hover:text-white hover:bg-white/10 backdrop-blur-sm transition-all"
                aria-label={t('common.previous')}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="rounded-lg border border-white/20 p-2.5 text-white/60 hover:text-white hover:bg-white/10 backdrop-blur-sm transition-all"
                aria-label={t('common.next')}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="relative bg-slate-900 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <p className="text-sm font-medium text-slate-400 tracking-wide">
              {t('hero.trustBar')}
            </p>
            <div className="flex items-center gap-6">
              {trustItems.map((item) => (
                <div key={item.key} className="flex items-center gap-2 text-slate-500">
                  <item.icon className="h-4 w-4 text-accent/70" strokeWidth={1.5} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

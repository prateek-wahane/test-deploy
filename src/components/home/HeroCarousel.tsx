'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 'ai-frontier',
    image: '/hero/slide-1.png',
    video: '/hero/intelliware-carousel.mp4',
    tagline: 'Built Faster with Agents',
    headline: 'AI-Powered Solutions\nBuilt for Your Business',
    subtext:
      'Mastering Voice.ai, Conversational Chatbots, and Agentic Frameworks to accelerate your enterprise.',
    ctas: [
      { label: "Let's Talk", href: '/contact', primary: true },
      { label: 'Read Case Studies', href: '/about/about-us', primary: false },
    ],
  },
  {
    id: 'intelliware-edge',
    image: '/hero/slide-2.png',
    video: '/hero/agentic.mp4',
    tagline: 'Welcome to Intelliware Global',
    headline: 'Experience\nAccelerated Growth',
    subtext:
      'Bridging human-centric values with cutting-edge digital delivery to empower your global enterprise.',
    ctas: [
      { label: 'Discover Who We Are', href: '/about/about-us', primary: true },
      { label: 'Our Services', href: '/services/applications', primary: false },
    ],
  },
  {
    id: 'genai-solutions',
    image: '/hero/slide-1.png',
    video: '/hero/gen_ai.mp4',
    tagline: 'Generative AI Solutions',
    headline: 'Transform with\nGenerative AI',
    subtext:
      'Harness the power of generative AI to create innovative solutions and drive digital transformation.',
    ctas: [
      { label: 'Explore GenAI', href: '/services/applications', primary: true },
      { label: 'Case Studies', href: '/about/about-us', primary: false },
    ],
  },
  {
    id: 'collaboration-team',
    image: '/hero/collabortion and team.jpeg',
    tagline: 'Team Collaboration',
    headline: 'Building Strong\nTeams Together',
    subtext:
      'Our collaborative approach brings diverse talents together to deliver exceptional results for your business.',
    ctas: [
      { label: 'Meet Our Team', href: '/about/about-us', primary: true },
      { label: 'Join Us', href: '/careers', primary: false },
    ],
  },
  {
    id: 'customer-growth',
    image: '/hero/customer-growth.jpeg',
    tagline: 'Customer Success',
    headline: 'Drive Sustainable\nGrowth',
    subtext:
      'Partner with us to achieve measurable growth and lasting success through innovative digital solutions.',
    ctas: [
      { label: 'See Our Impact', href: '/about/about-us', primary: true },
      { label: 'Start Your Journey', href: '/contact', primary: false },
    ],
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

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

  return (
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
          {/* Background video or image */}
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
                alt={slides[current].headline.replace('\n', ' ')}
                fill
                className="object-cover"
                priority={current === 0}
                quality={90}
              />
            </video>
          ) : (
            <Image
              src={slides[current].image}
              alt={slides[current].headline.replace('\n', ' ')}
              fill
              className="object-cover"
              priority={current === 0}
              quality={90}
            />
          )}

          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

          {/* Text content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="max-w-3xl"
              >
                {/* Tagline */}
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/70">
                  {slides[current].tagline}
                </p>

                {/* Headline */}
                <h1 className="text-4xl font-heading font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl whitespace-pre-line leading-[1.1]">
                  {slides[current].headline}
                </h1>

                {/* Subtext */}
                <p className="mt-6 text-lg text-white/80 sm:text-xl lg:text-2xl leading-relaxed max-w-2xl">
                  {slides[current].subtext}
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                  {slides[current].ctas.map((cta) => (
                    <Link
                      key={cta.label}
                      href={cta.href}
                      className={`inline-flex items-center gap-2 rounded px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                        cta.primary
                          ? 'bg-accent text-white hover:bg-accent-600'
                          : 'border border-white/30 text-white hover:bg-white/10'
                      }`}
                    >
                      {cta.label}
                      {cta.primary && <ArrowRight className="h-4 w-4" />}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation controls */}
      <div className="absolute bottom-8 start-0 end-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-white' : 'w-4 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="rounded-md border border-white/20 p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="rounded-md border border-white/20 p-2 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import type { AboutPage } from '@/types';
import Container from '@/components/ui/Container';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

interface Props {
  page: AboutPage;
}

export default function AboutContent({ page }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-50">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-heading font-semibold tracking-heading sm:text-5xl lg:text-6xl text-slate-900">
              {page.title}
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-accent">
              {page.subtitle}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            {page.content.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-base text-slate-600 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </Container>
      </section>

      {/* Highlights */}
      {page.highlights && page.highlights.length > 0 && (
        <section className="section-padding bg-slate-50">
          <Container>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {page.highlights.map((hl, i) => (
                <motion.div
                  key={hl.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="text-3xl font-heading font-semibold text-accent sm:text-4xl">
                    {isNaN(parseInt(hl.value))
                      ? hl.value
                      : (
                          <AnimatedCounter
                            target={parseInt(hl.value.replace(/[^0-9]/g, ''))}
                            suffix={hl.value.replace(/[0-9,]/g, '')}
                          />
                        )}
                  </div>
                  <p className="mt-2 text-xs text-slate-400 uppercase tracking-widest">
                    {hl.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

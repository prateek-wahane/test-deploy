'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import type { Industry } from '@/types';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface Props {
  industry: Industry;
}

export default function IndustryDetail({ industry }: Props) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[industry.icon] || Icons.Box;

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
            <div className="mb-6 inline-flex rounded-md bg-blue-50 p-4">
              <Icon className="h-10 w-10 text-accent" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl font-heading font-semibold tracking-heading sm:text-5xl lg:text-6xl text-slate-900">
              {industry.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-500 leading-relaxed">
              {industry.longDescription}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Challenges & Solutions */}
      <section className="section-padding">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card hover={false} className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-md bg-amber-50 p-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl font-heading font-semibold text-slate-900">
                    Industry Challenges
                  </h2>
                </div>
                <ul className="space-y-4">
                  {industry.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span className="text-sm text-slate-600 leading-relaxed">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card hover={false} className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-md bg-emerald-50 p-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl font-heading font-semibold text-slate-900">
                    How We Solve It
                  </h2>
                </div>
                <ul className="space-y-4">
                  {industry.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-sm text-slate-600 leading-relaxed">
                        {solution}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Case Study Placeholder */}
      <section className="section-padding bg-slate-50">
        <Container className="text-center">
          <h2 className="text-2xl font-heading font-semibold tracking-heading sm:text-3xl mb-4 text-slate-900">
            Featured Case Studies
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-8">
            Discover how leading {industry.shortTitle} organisations have
            partnered with Intelliware Global to drive transformation.
          </p>
          <div className="rounded-md border border-slate-100 bg-white p-12 text-center">
            <p className="text-sm text-slate-400">
              Case studies coming soon. Contact us to learn about our{' '}
              {industry.shortTitle} engagements.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <Container className="text-center">
          <h2 className="text-2xl font-heading font-semibold tracking-heading sm:text-3xl mb-4 text-slate-900">
            Transform Your {industry.shortTitle} Operations
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-8">
            Connect with our industry specialists to explore tailored technology
            solutions for your organisation.
          </p>
          <Button href="/contact">
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Container>
      </section>
    </>
  );
}

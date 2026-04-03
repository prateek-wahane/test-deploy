'use client';

import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const pillars = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We invest in emerging technologies — AI, blockchain, edge computing — and turn them into production-grade solutions that deliver real ROI.',
    stat: { target: 50, suffix: '+', label: 'Enterprise Clients' },
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    description:
      'With delivery centres in London, Dubai, and Bangalore, we offer follow-the-sun support and global talent pools that scale with your ambitions.',
    stat: { target: 500, suffix: '+', label: 'Technology Professionals' },
  },
  {
    icon: ShieldCheck,
    title: 'Trust',
    description:
      'We operate with the governance, compliance rigour, and accountability of a Tier 1 firm — backed by founder-led personal ownership.',
    stat: { target: 25, suffix: '+', label: 'EMEA Markets Served' },
  },
];

export default function WhyIntelliware() {
  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <SectionHeading
          title="Why Intelliware Global"
          subtitle="The conviction to innovate. The discipline to deliver."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="mx-auto mb-5 inline-flex rounded-md bg-blue-50 p-4">
                <pillar.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-slate-900">{pillar.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                {pillar.description}
              </p>
              <div className="text-3xl font-heading font-semibold text-accent">
                <AnimatedCounter
                  target={pillar.stat.target}
                  suffix={pillar.stat.suffix}
                />
              </div>
              <p className="mt-1 text-xs text-slate-400 uppercase tracking-widest">
                {pillar.stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

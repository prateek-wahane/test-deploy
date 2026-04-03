'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { industries } from '@/data/industries';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { useTranslation } from '@/hooks/useTranslation';

export default function IndustriesStrip() {
  const { t } = useTranslation();

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          title={t('industries.sectionTitle')}
          subtitle={t('industries.sectionSubtitle')}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {industries.map((ind, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[ind.icon] || Icons.Box;
            return (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200/60 bg-white p-6 text-center transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
                >
                  <div className="rounded-xl bg-slate-50 p-3 transition-colors duration-300 group-hover:bg-accent/10">
                    <Icon className="h-5 w-5 text-slate-400 group-hover:text-accent transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-slate-700 group-hover:text-accent transition-colors">
                    {t(`industries.items.${ind.slug}`, ind.shortTitle)}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-accent transition-all opacity-0 group-hover:opacity-100" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

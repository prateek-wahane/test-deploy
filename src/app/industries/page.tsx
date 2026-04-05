'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { industries } from '@/data/industries';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useTranslation } from '@/hooks/useTranslation';
import { getIcon } from '@/lib/icons';

export default function IndustriesPage() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 via-slate-50 to-slate-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-heading font-bold tracking-heading sm:text-5xl lg:text-6xl text-slate-900">
              {t('industries.pageTitle')}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
              {t('industries.pageSubtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" className="flex items-center gap-2">
                {t('services.getStarted')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-semibold tracking-heading sm:text-3xl text-slate-900 mb-2">
              {t('industries.gridTitle')}
            </h2>
            <p className="text-slate-600 max-w-2xl">
              {t('industries.gridSubtitle')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const IndustryIcon = getIcon(industry.icon);

              return (
                <motion.div
                  key={industry.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <Link href={`/industries/${industry.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-all">
                      <div className="mb-4 inline-flex rounded-xl bg-accent/5 p-3">
                        <IndustryIcon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg font-heading font-semibold mb-2 text-slate-900 line-clamp-2">
                        {industry.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                        {industry.description}
                      </p>
                      <div className="flex items-center gap-2 text-accent font-medium text-sm">
                        {t('services.learnMore')}
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gradient-to-br from-blue-50 to-slate-50">
        <Container className="text-center">
          <h2 className="text-2xl font-heading font-semibold tracking-heading sm:text-3xl mb-4 text-slate-900">
            {t('industries.ctaTitle')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            {t('industries.ctaSubtitle')}
          </p>
          <Button href="/contact" className="gap-2">
            {t('industries.ctaButton')}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Container>
      </section>
    </>
  );
}

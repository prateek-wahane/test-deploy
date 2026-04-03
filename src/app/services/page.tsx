'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useTranslation } from '@/hooks/useTranslation';

export default function ServicesPage() {
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
              {t('services.pageTitle')}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
              {t('services.pageSubtitle')}
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
              {t('services.gridTitle')}
            </h2>
            <p className="text-slate-600 max-w-2xl">
              {t('services.gridSubtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const ServiceIcon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] || Icons.Box;

              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <Link href={`/services/${service.slug}`} className="group block h-full">
                    <div className="h-full overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20 hover:-translate-y-1">
                      {service.image && (
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={service.image}
                            alt={t(`services.items.${service.slug}`, service.shortTitle)}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                          <div className="absolute bottom-3 left-3 inline-flex rounded-xl bg-white/95 backdrop-blur-sm p-2 shadow-md">
                            <ServiceIcon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                          </div>
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-lg font-heading font-semibold mb-2 text-slate-900 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-2 text-accent font-medium text-sm">
                          {t('services.learnMore')}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
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
            {t('services.ctaTitle')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            {t('services.ctaSubtitle')}
          </p>
          <Button href="/contact" className="gap-2">
            {t('services.ctaButton')}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Container>
      </section>
    </>
  );
}

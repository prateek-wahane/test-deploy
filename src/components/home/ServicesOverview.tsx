'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { useTranslation } from '@/hooks/useTranslation';
import { getIcon } from '@/lib/icons';

const featured = services.slice(0, 6);

export default function ServicesOverview() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-gradient-to-b from-white via-slate-50/50 to-white">
      <Container>
        <SectionHeading
          title={t('services.sectionTitle')}
          subtitle={t('services.sectionSubtitle')}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="h-full overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20 hover:-translate-y-1">
                    {service.image && (
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={t(`services.items.${service.slug}`, service.shortTitle)}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 inline-flex rounded-xl bg-white/95 backdrop-blur-sm p-2.5 shadow-lg">
                          <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-heading font-semibold mb-2 text-slate-900 group-hover:text-accent transition-colors">
                        {t(`services.items.${service.slug}`, service.shortTitle)}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {t('services.explore')}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-6 py-3 text-sm font-semibold text-accent hover:bg-accent hover:text-white transition-all duration-300"
          >
            {t('services.viewAll')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

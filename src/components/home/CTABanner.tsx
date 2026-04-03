'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { useTranslation } from '@/hooks/useTranslation';

export default function CTABanner() {
  const { t } = useTranslation();

  return (
    <section className="section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 md:p-16 text-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="relative z-10">
            <h2 className="text-3xl font-heading font-bold text-white sm:text-4xl lg:text-5xl">
              {t('cta.title')}
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed">
              {t('cta.subtitle')}
            </p>
            <div className="mt-10">
              <Button href="/contact" className="bg-accent text-white hover:bg-accent-600 shadow-lg shadow-accent/25 rounded-lg px-8 py-4 text-base">
                {t('cta.button')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

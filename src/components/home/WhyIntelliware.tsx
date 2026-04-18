'use client';

import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { useTranslation } from '@/hooks/useTranslation';

export default function WhyIntelliware() {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: Lightbulb,
      titleKey: 'why.innovation',
      descKey: 'why.innovationDesc',
      stat: { target: 12, suffix: '+', labelKey: 'why.enterpriseClients' },
      gradient: 'from-blue-500/10 to-indigo-500/10',
    },
    {
      icon: TrendingUp,
      titleKey: 'why.scale',
      descKey: 'why.scaleDesc',
      stat: { target: 100, suffix: '+', labelKey: 'why.techProfessionals' },
      gradient: 'from-accent/10 to-blue-500/10',
    },
    {
      icon: ShieldCheck,
      titleKey: 'why.trust',
      descKey: 'why.trustDesc',
      stat: { target: 10, suffix: '+', labelKey: 'why.emeaMarkets' },
      gradient: 'from-emerald-500/10 to-teal-500/10',
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      <Container className="relative z-10">
        <SectionHeading
          title={t('why.sectionTitle')}
          subtitle={t('why.sectionSubtitle')}
        />

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.titleKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group text-center"
            >
              <div className={`mx-auto mb-6 inline-flex rounded-2xl bg-gradient-to-br ${pillar.gradient} p-5 transition-transform duration-300 group-hover:scale-110`}>
                <pillar.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-slate-900">
                {t(pillar.titleKey)}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-xs mx-auto">
                {t(pillar.descKey)}
              </p>
              <div className="text-4xl font-heading font-bold text-accent">
                <AnimatedCounter
                  target={pillar.stat.target}
                  suffix={pillar.stat.suffix}
                />
              </div>
              <p className="mt-2 text-xs text-slate-400 uppercase tracking-widest font-medium">
                {t(pillar.stat.labelKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

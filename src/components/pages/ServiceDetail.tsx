'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/types';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Marquee from '@/components/ui/Marquee';

interface Props {
  service: Service;
}

export default function ServiceDetail({ service }: Props) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] || Icons.Box;

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
              {service.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-500 leading-relaxed">
              {service.longDescription}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Value Pillars */}
      <section className="section-padding">
        <Container>
          <h2 className="text-center text-2xl font-heading font-semibold tracking-heading sm:text-3xl mb-12 text-slate-900">
            The Value We Deliver
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {service.pillars.map((pillar, i) => {
              const PillarIcon = (Icons as unknown as Record<string, Icons.LucideIcon>)[pillar.icon] || Icons.Box;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Card className="text-center h-full">
                    <div className="mx-auto mb-4 inline-flex rounded-md bg-blue-50 p-3">
                      <PillarIcon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-heading font-semibold mb-2 text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {pillar.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Tech Stack Marquee */}
      <section className="section-padding bg-slate-50">
        <Container>
          <h2 className="text-center text-2xl font-heading font-semibold tracking-heading sm:text-3xl mb-10 text-slate-900">
            Technology Stack
          </h2>
          <Marquee items={service.techStack} speed="normal" />
          <Marquee items={service.techStack} speed="slow" reverse className="mt-4" />
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <Container className="text-center">
          <h2 className="text-2xl font-heading font-semibold tracking-heading sm:text-3xl mb-4 text-slate-900">
            Ready to Get Started?
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-8">
            Connect with our {service.shortTitle} experts to discuss how we can
            accelerate your technology agenda.
          </p>
          <Button href="/contact">
            Talk to Our Experts
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Container>
      </section>
    </>
  );
}

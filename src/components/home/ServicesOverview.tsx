'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { services } from '@/data/services';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

const featured = services.slice(0, 6);

export default function ServicesOverview() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          title="Our Core Services"
          subtitle="Enterprise-grade technology solutions designed for scale, security, and speed."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] || Icons.Box;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <Card className="h-full">
                    <div className="mb-4 inline-flex rounded-md bg-blue-50 p-3">
                      <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-heading font-semibold mb-2 text-slate-900">
                      {service.shortTitle}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {service.description}
                    </p>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services/applications"
            className="text-sm font-medium text-accent hover:text-accent-600 transition-colors"
          >
            View All Services &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}

'use client';

import Link from 'next/link';
import * as Icons from 'lucide-react';
import { industries } from '@/data/industries';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export default function IndustriesStrip() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          title="Industries We Serve"
          subtitle="Deep domain expertise across the sectors that power the EMEA economy."
        />

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((ind) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[ind.icon] || Icons.Box;
            return (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group flex items-center gap-2.5 rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-all hover:border-accent/30 hover:bg-blue-50 hover:text-accent"
              >
                <Icon className="h-4 w-4 text-slate-400 group-hover:text-accent" strokeWidth={1.5} />
                {ind.shortTitle}
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

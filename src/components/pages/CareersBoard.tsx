'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Briefcase, Building2 } from 'lucide-react';
import { jobPostings } from '@/data/careers';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const tabs = [
  { id: 'uk' as const, label: 'United Kingdom' },
  { id: 'middle-east' as const, label: 'Middle East' },
  { id: 'india' as const, label: 'India' },
];

export default function CareersBoard() {
  const [activeTab, setActiveTab] = useState<'uk' | 'middle-east' | 'india'>('uk');
  const filtered = jobPostings.filter((j) => j.region === activeTab);

  return (
    <section className="section-padding">
      <Container>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-md px-5 py-2.5 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white'
                  : 'border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Job cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((job) => (
              <Card key={job.id} className="flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-heading font-semibold mb-3 text-slate-900">
                    {job.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Briefcase className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Building2 className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
                      {job.department}
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <Button variant="secondary" className="w-full text-xs py-2">
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}

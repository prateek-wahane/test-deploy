'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function CTABanner() {
  return (
    <section className="section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-md border border-slate-100 bg-slate-900 p-10 md:p-16 text-center"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-heading font-semibold text-white sm:text-4xl lg:text-5xl">
              Ready to Transform?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
              Partner with Intelliware Global to accelerate your digital journey.
              Let&apos;s build something extraordinary together.
            </p>
            <div className="mt-8">
              <Button href="/contact" className="bg-white text-slate-900 hover:bg-slate-100">
                Get In Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

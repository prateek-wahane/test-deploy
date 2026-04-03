'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="rounded-full bg-emerald-50 p-4 mb-4">
          <CheckCircle2 className="h-10 w-10 text-emerald-600" strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-heading font-semibold mb-2 text-slate-900">
          Thank You
        </h3>
        <p className="text-slate-500 max-w-sm">
          Your enquiry has been received. Our team will be in touch within
          24 hours.
        </p>
      </motion.div>
    );
  }

  const inputClasses =
    'w-full rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          required
          className={inputClasses}
          placeholder="Jane Smith"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
          Work Email
        </label>
        <input
          type="email"
          id="email"
          required
          className={inputClasses}
          placeholder="jane@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
          Company
        </label>
        <input
          type="text"
          id="company"
          className={inputClasses}
          placeholder="Acme Corporation"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">
          Service Interest
        </label>
        <select
          id="service"
          className={inputClasses + ' appearance-none'}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service...
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.shortTitle}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          required
          className={inputClasses + ' resize-none'}
          placeholder="Tell us about your project or challenge..."
        />
      </div>

      <Button type="submit" className="w-full">
        Send Enquiry
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}

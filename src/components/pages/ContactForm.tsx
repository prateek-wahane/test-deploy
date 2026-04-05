'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { services } from '@/data/services';
import Button from '@/components/ui/Button';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
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
          value={form.name}
          onChange={handleChange}
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
          value={form.email}
          onChange={handleChange}
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
          value={form.company}
          onChange={handleChange}
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
          value={form.service}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select a service...
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.shortTitle}>
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
          value={form.message}
          onChange={handleChange}
          className={inputClasses + ' resize-none'}
          placeholder="Tell us about your project or challenge..."
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      <Button type="submit" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <>
            Sending...
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Send Enquiry
            <Send className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import PulsingDot from '@/components/ui/PulsingDot';
import LiveClock from '@/components/ui/LiveClock';
import { useTranslation } from '@/hooks/useTranslation';

const locations = [
  { city: 'London', top: '28%', left: '47%', timezone: 'Europe/London', label: 'GMT/BST' },
  { city: 'Dubai', top: '45%', left: '60%', timezone: 'Asia/Dubai', label: 'GST' },
  { city: 'Pune', top: '50%', left: '65%', timezone: 'Asia/Kolkata', label: 'IST' },
  { city: 'Hyderabad', top: '52%', left: '67%', timezone: 'Asia/Kolkata', label: 'IST' },
];

export default function GlobalPresence() {
  const { t } = useTranslation();

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <Container>
        <SectionHeading
          title={t('globalPresence.sectionTitle')}
          subtitle={t('globalPresence.sectionSubtitle')}
        />

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative aspect-[2/1] rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm">
              <svg
                viewBox="0 0 800 400"
                className="w-full h-full opacity-25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M350,100 Q380,80 400,95 Q420,85 440,100 Q450,110 445,130 Q430,140 410,135 Q390,145 370,135 Q355,125 350,100Z" fill="#2563EB" opacity="0.3" />
                <path d="M450,140 Q470,130 490,145 Q500,160 495,180 Q480,190 460,180 Q445,165 450,140Z" fill="#2563EB" opacity="0.25" />
                <path d="M370,160 Q400,150 420,170 Q430,200 420,240 Q400,270 380,260 Q360,240 355,210 Q350,180 370,160Z" fill="#2563EB" opacity="0.15" />
                <path d="M520,150 Q540,140 555,160 Q560,185 545,210 Q530,220 520,200 Q510,175 520,150Z" fill="#2563EB" opacity="0.25" />
                {[0, 1, 2, 3, 4].map((i) => (
                  <line key={`h${i}`} x1="0" y1={80 + i * 60} x2="800" y2={80 + i * 60} stroke="#94A3B8" strokeWidth="0.3" opacity="0.2" />
                ))}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <line key={`v${i}`} x1={100 + i * 80} y1="0" x2={100 + i * 80} y2="400" stroke="#94A3B8" strokeWidth="0.3" opacity="0.2" />
                ))}
                <line x1="376" y1="112" x2="480" y2="164" stroke="#2563EB" strokeWidth="0.8" opacity="0.3" strokeDasharray="4 3" />
                <line x1="480" y1="164" x2="544" y2="188" stroke="#2563EB" strokeWidth="0.8" opacity="0.3" strokeDasharray="4 3" />
                <line x1="376" y1="112" x2="544" y2="188" stroke="#2563EB" strokeWidth="0.8" opacity="0.15" strokeDasharray="4 3" />
              </svg>

              {locations.map((loc) => (
                <div
                  key={loc.city}
                  className="absolute"
                  style={{ top: loc.top, left: loc.left, transform: 'translate(-50%, -50%)' }}
                >
                  <PulsingDot size="sm" label={loc.city} />
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-3 max-h-[500px] overflow-y-auto">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-2xl border border-slate-200/60 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-heading font-semibold text-slate-900 text-sm">{loc.city}</h4>
                  <span className="text-xs text-slate-400 font-medium">{loc.label}</span>
                </div>
                <LiveClock timezone={loc.timezone} label={loc.label} />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

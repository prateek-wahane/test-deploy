'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import PulsingDot from '@/components/ui/PulsingDot';

const locations = [
  { city: 'London', top: '28%', left: '47%' },
  { city: 'Dubai', top: '45%', left: '60%' },
  { city: 'Bangalore', top: '52%', left: '68%' },
];

export default function GlobalPresence() {
  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <SectionHeading
          title="Global Presence"
          subtitle="Strategically positioned across three continents for follow-the-sun delivery."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="relative aspect-[2/1] rounded-md border border-slate-100 bg-white p-8">
            <svg
              viewBox="0 0 800 400"
              className="w-full h-full opacity-30"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Europe */}
              <path
                d="M350,100 Q380,80 400,95 Q420,85 440,100 Q450,110 445,130 Q430,140 410,135 Q390,145 370,135 Q355,125 350,100Z"
                fill="#2563EB"
                opacity="0.3"
              />
              {/* Middle East */}
              <path
                d="M450,140 Q470,130 490,145 Q500,160 495,180 Q480,190 460,180 Q445,165 450,140Z"
                fill="#2563EB"
                opacity="0.25"
              />
              {/* Africa */}
              <path
                d="M370,160 Q400,150 420,170 Q430,200 420,240 Q400,270 380,260 Q360,240 355,210 Q350,180 370,160Z"
                fill="#2563EB"
                opacity="0.15"
              />
              {/* India */}
              <path
                d="M520,150 Q540,140 555,160 Q560,185 545,210 Q530,220 520,200 Q510,175 520,150Z"
                fill="#2563EB"
                opacity="0.25"
              />
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line key={`h${i}`} x1="0" y1={80 + i * 60} x2="800" y2={80 + i * 60} stroke="#94A3B8" strokeWidth="0.3" opacity="0.3" />
              ))}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <line key={`v${i}`} x1={100 + i * 80} y1="0" x2={100 + i * 80} y2="400" stroke="#94A3B8" strokeWidth="0.3" opacity="0.3" />
              ))}
            </svg>

            {locations.map((loc) => (
              <div
                key={loc.city}
                className="absolute"
                style={{ top: loc.top, left: loc.left, transform: 'translate(-50%, -50%)' }}
              >
                <PulsingDot size="md" label={loc.city} />
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/pages/ContactForm';
import PulsingDot from '@/components/ui/PulsingDot';
import { offices } from '@/data/offices';

const mapDots = [
  { city: 'London', cx: 380, cy: 120 },
  { city: 'Dubai', cx: 490, cy: 195 },
  { city: 'Bangalore', cx: 555, cy: 230 },
  { city: 'Pune', cx: 530, cy: 210 },
  { city: 'Hyderabad', cx: 545, cy: 218 },
  { city: 'Mumbai', cx: 520, cy: 200 },
];

export default function ContactPageContent() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-50">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-heading font-semibold tracking-heading sm:text-5xl text-slate-900">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Whether you&apos;re exploring a new initiative or need a technology
              partner for an enterprise programme, we&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-md border border-slate-100 bg-white p-8"
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="rounded-md border border-slate-100 bg-white p-8"
            >
              <h2 className="text-xl font-heading font-semibold mb-6 text-slate-900">
                Our Offices
              </h2>
              <div className="relative">
                <svg
                  viewBox="0 0 800 400"
                  className="w-full opacity-30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M320,80 Q360,60 400,80 Q430,70 460,90 Q470,110 465,140 Q440,155 410,145 Q380,160 355,145 Q335,130 320,80Z" fill="#2563EB" opacity="0.3" />
                  <path d="M460,150 Q490,135 510,155 Q525,175 515,200 Q495,215 470,200 Q455,180 460,150Z" fill="#2563EB" opacity="0.25" />
                  <path d="M350,170 Q385,155 410,180 Q425,215 415,260 Q395,295 370,280 Q350,255 340,220 Q335,190 350,170Z" fill="#2563EB" opacity="0.15" />
                  <path d="M530,160 Q555,145 570,175 Q575,205 560,235 Q540,245 530,220 Q520,190 530,160Z" fill="#2563EB" opacity="0.25" />
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line key={`h-${i}`} x1="0" y1={80 + i * 70} x2="800" y2={80 + i * 70} stroke="#94A3B8" strokeWidth="0.3" opacity="0.3" />
                  ))}
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <line key={`v-${i}`} x1={100 + i * 80} y1="0" x2={100 + i * 80} y2="400" stroke="#94A3B8" strokeWidth="0.3" opacity="0.3" />
                  ))}
                </svg>

                {mapDots.map((dot) => (
                  <div
                    key={dot.city}
                    className="absolute"
                    style={{
                      top: `${(dot.cy / 400) * 100}%`,
                      left: `${(dot.cx / 800) * 100}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <PulsingDot size="sm" label={dot.city} />
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4 max-h-[300px] overflow-y-auto">
                {offices.map((office) => (
                  <div key={office.city} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">{office.city}, {office.country}</p>
                      <p className="text-xs text-slate-400">{office.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}

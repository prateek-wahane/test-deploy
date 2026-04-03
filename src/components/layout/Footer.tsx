'use client';

import Link from 'next/link';
import {
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  Instagram,
  MapPin,
} from 'lucide-react';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { offices } from '@/data/offices';
import LiveClock from '@/components/ui/LiveClock';
import Container from '@/components/ui/Container';

const quickLinks = [
  { label: 'About Us', href: '/about/about-us' },
  { label: 'Careers', href: '/careers' },
  { label: 'Global Capability Centers', href: '/about/about-us' },
  { label: 'Contact Us', href: '/contact' },
];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'X (Twitter)' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <Container className="section-padding">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-900">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-900">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-900">
              Industries
            </h3>
            <ul className="space-y-3">
              {industries.map((ind) => (
                <li key={ind.slug}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    {ind.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Global */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-900">
              Global Offices
            </h3>
            <div className="space-y-5">
              {offices.map((office) => (
                <div key={office.city}>
                  <div className="flex items-start gap-2 mb-1">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {office.city}, {office.country}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {office.address}
                      </p>
                    </div>
                  </div>
                  <div className="ps-6">
                    <LiveClock
                      timezone={office.timezone}
                      label={office.timezoneLabel}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Intelliware Global Consulting and
            Services LLP. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}

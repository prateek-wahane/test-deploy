'use client';

import Link from 'next/link';
import Image from 'next/image';
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
import { useTranslation } from '@/hooks/useTranslation';

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'X (Twitter)' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t('footer.aboutUs'), href: '/about/about-us' },
    { label: t('footer.careers'), href: '/careers' },
    { label: t('footer.gcc'), href: '/about/about-us' },
    { label: t('footer.contactUs'), href: '/contact' },
  ];

  return (
    <footer className="border-t border-slate-200/60 bg-slate-50">
      <Container className="section-padding">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6">
              <Image src="/logo.png" alt="Intelliware Global" width={160} height={40} />
            </div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-900">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-900">
              {t('footer.services')}
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-slate-500 transition-colors hover:text-accent"
                  >
                    {t(`services.items.${s.slug}`, s.shortTitle)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-900">
              {t('footer.industries')}
            </h3>
            <ul className="space-y-3">
              {industries.map((ind) => (
                <li key={ind.slug}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="text-sm text-slate-500 transition-colors hover:text-accent"
                  >
                    {t(`industries.items.${ind.slug}`, ind.shortTitle)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-900">
              {t('footer.globalOffices')}
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

      <div className="border-t border-slate-200">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-slate-400 transition-all hover:bg-accent/10 hover:text-accent"
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

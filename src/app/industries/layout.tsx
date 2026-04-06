import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve — Banking, Healthcare, Manufacturing & More',
  description:
    'Intelliware Global delivers tailored technology solutions across Banking & Financial Services, Healthcare, Hi-Tech, Insurance, Life Sciences, Manufacturing, Media, Retail, Telecom, and Energy sectors.',
  alternates: {
    canonical: 'https://www.intelliwareglobal.com/industries',
  },
  openGraph: {
    title: 'Industries We Serve — Banking, Healthcare, Manufacturing & More',
    description:
      'Deep domain expertise across the sectors that power the EMEA economy. Industry-focused technology solutions for enterprise transformation.',
    url: 'https://www.intelliwareglobal.com/industries',
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

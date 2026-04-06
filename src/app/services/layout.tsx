import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Services — Cloud, AI, Cybersecurity & Digital Transformation',
  description:
    'Explore Intelliware Global\'s comprehensive suite of enterprise technology services including Application Development, Cloud Transformation, Cybersecurity, Data & Analytics, Digital Transformation, AI & Machine Learning, and more.',
  alternates: {
    canonical: 'https://www.intelliwareglobal.com/services',
  },
  openGraph: {
    title: 'IT Services — Cloud, AI, Cybersecurity & Digital Transformation',
    description:
      'Enterprise-grade technology services designed for scale, security, and speed. Delivered by certified experts with deep industry experience.',
    url: 'https://www.intelliwareglobal.com/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

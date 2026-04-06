import type { Metadata } from 'next';
import ContactPageContent from '@/components/pages/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch with Intelliware Global',
  description:
    'Contact Intelliware Global for enterprise technology consulting. Offices in London, Dubai, Bangalore, Pune, Hyderabad, and Mumbai serving enterprises across EMEA.',
  alternates: {
    canonical: 'https://www.intelliwareglobal.com/contact',
  },
  openGraph: {
    title: 'Contact Us — Intelliware Global',
    description:
      'Get in touch with our enterprise technology consulting team. Global offices across UK, UAE, and India.',
    url: 'https://www.intelliwareglobal.com/contact',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}

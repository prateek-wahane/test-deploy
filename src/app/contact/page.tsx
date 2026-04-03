import type { Metadata } from 'next';
import ContactPageContent from '@/components/pages/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Intelliware Global. Offices in London, Dubai, and Bangalore serving enterprises across EMEA.',
};

export default function ContactPage() {
  return <ContactPageContent />;
}

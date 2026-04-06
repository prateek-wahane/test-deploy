import type { Metadata } from 'next';
import HeroCarousel from '@/components/home/HeroCarousel';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyIntelliware from '@/components/home/WhyIntelliware';
import IndustriesStrip from '@/components/home/IndustriesStrip';
import GlobalPresence from '@/components/home/GlobalPresence';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'Intelliware Global — Enterprise Technology Consulting & IT Outsourcing',
  description:
    'Intelliware Global is a leading enterprise technology consulting firm delivering Cloud, AI, Cybersecurity, Data Analytics, and Digital Transformation solutions across EMEA. Trusted by 50+ enterprise clients with 500+ technology professionals.',
  alternates: {
    canonical: 'https://www.intelliwareglobal.com',
  },
  openGraph: {
    title: 'Intelliware Global — Enterprise Technology Consulting & IT Outsourcing',
    description:
      'Bridging human-centric values with cutting-edge digital delivery. Cloud, AI, Cybersecurity, Data & Digital Transformation for global enterprises across 25+ EMEA markets.',
    url: 'https://www.intelliwareglobal.com',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ServicesOverview />
      <WhyIntelliware />
      <IndustriesStrip />
      <GlobalPresence />
      <CTABanner />
    </>
  );
}

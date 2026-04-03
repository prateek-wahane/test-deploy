import HeroCarousel from '@/components/home/HeroCarousel';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyIntelliware from '@/components/home/WhyIntelliware';
import IndustriesStrip from '@/components/home/IndustriesStrip';
import GlobalPresence from '@/components/home/GlobalPresence';
import CTABanner from '@/components/home/CTABanner';

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

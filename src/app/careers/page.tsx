import type { Metadata } from 'next';
import CareersBoard from '@/components/pages/CareersBoard';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Careers — Join Intelliware Global',
  description:
    'Explore career opportunities at Intelliware Global. Join 500+ technology professionals delivering enterprise solutions across London, Dubai, Bangalore, Pune, Hyderabad, and Mumbai.',
  alternates: {
    canonical: 'https://www.intelliwareglobal.com/careers',
  },
  openGraph: {
    title: 'Careers — Join Intelliware Global',
    description:
      'Build your career with a next-generation technology consulting firm. Opportunities across Europe, Middle East, and India.',
    url: 'https://www.intelliwareglobal.com/careers',
  },
};

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-50">
        <Container className="relative z-10 text-center">
          <h1 className="text-4xl font-heading font-semibold tracking-heading sm:text-5xl lg:text-6xl text-slate-900">
            Build Your Career With Us
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-500">
            Join a team of exceptional technologists delivering enterprise-grade
            solutions across Europe, the Middle East, and India. We invest in
            your growth as much as our clients&apos; success.
          </p>
        </Container>
      </section>
      <CareersBoard />
    </>
  );
}

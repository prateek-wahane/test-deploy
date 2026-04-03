import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { industries } from '@/data/industries';
import IndustryDetail from '@/components/pages/IndustryDetail';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const industry = industries.find((ind) => ind.slug === params.slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.description,
  };
}

export default function IndustryPage({ params }: Props) {
  const industry = industries.find((ind) => ind.slug === params.slug);
  if (!industry) notFound();

  return <IndustryDetail industry={industry} />;
}

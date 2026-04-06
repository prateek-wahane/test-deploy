import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { industries } from '@/data/industries';
import IndustryDetail from '@/components/pages/IndustryDetail';
import JsonLd, { createBreadcrumbSchema } from '@/components/seo/JsonLd';

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
    title: `${industry.title} — Industry Solutions`,
    description: industry.description,
    alternates: {
      canonical: `https://www.intelliwareglobal.com/industries/${industry.slug}`,
    },
    openGraph: {
      title: `${industry.title} — Intelliware Global`,
      description: industry.description,
      url: `https://www.intelliwareglobal.com/industries/${industry.slug}`,
      type: 'article',
    },
  };
}

export default function IndustryPage({ params }: Props) {
  const industry = industries.find((ind) => ind.slug === params.slug);
  if (!industry) notFound();

  return (
    <>
      <JsonLd data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://www.intelliwareglobal.com' },
        { name: 'Industries', url: 'https://www.intelliwareglobal.com/industries' },
        { name: industry.title, url: `https://www.intelliwareglobal.com/industries/${industry.slug}` },
      ])} />
      <IndustryDetail industry={industry} />
    </>
  );
}

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { services } from '@/data/services';
import ServiceDetail from '@/components/pages/ServiceDetail';
import JsonLd, { createServiceSchema, createBreadcrumbSchema } from '@/components/seo/JsonLd';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} — IT Services`,
    description: service.description,
    alternates: {
      canonical: `https://www.intelliwareglobal.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} — Intelliware Global`,
      description: service.description,
      url: `https://www.intelliwareglobal.com/services/${service.slug}`,
      type: 'article',
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={createServiceSchema(service)} />
      <JsonLd data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://www.intelliwareglobal.com' },
        { name: 'Services', url: 'https://www.intelliwareglobal.com/services' },
        { name: service.title, url: `https://www.intelliwareglobal.com/services/${service.slug}` },
      ])} />
      <ServiceDetail service={service} />
    </>
  );
}

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { services } from '@/data/services';
import ServiceDetail from '@/components/pages/ServiceDetail';

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
    title: service.title,
    description: service.description,
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return <ServiceDetail service={service} />;
}

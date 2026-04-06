import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { aboutPages, leadershipTeam } from '@/data/about';
import AboutContent from '@/components/pages/AboutContent';
import LeadershipGrid from '@/components/pages/LeadershipGrid';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return aboutPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = aboutPages.find((p) => p.slug === params.slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.subtitle,
    alternates: {
      canonical: `https://www.intelliwareglobal.com/about/${page.slug}`,
    },
    openGraph: {
      title: `${page.title} — Intelliware Global`,
      description: page.subtitle,
      url: `https://www.intelliwareglobal.com/about/${page.slug}`,
    },
  };
}

export default function AboutPage({ params }: Props) {
  const page = aboutPages.find((p) => p.slug === params.slug);
  if (!page) notFound();

  return (
    <>
      <AboutContent page={page} />
      {params.slug === 'leadership' && (
        <LeadershipGrid members={leadershipTeam} />
      )}
    </>
  );
}

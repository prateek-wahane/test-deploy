import type { Metadata } from 'next';
import BlogListing from '@/components/pages/BlogListing';

export const metadata: Metadata = {
  title: 'Blog — Latest Articles & Insights',
  description:
    'Stay updated with industry trends, best practices, and expert insights from Intelliware Global.',
  alternates: {
    canonical: 'https://www.intelliwareglobal.com/blog',
  },
  openGraph: {
    title: 'Blog — Intelliware Global',
    description:
      'Latest articles and insights on technology, AI, cloud computing, and enterprise solutions.',
    url: 'https://www.intelliwareglobal.com/blog',
  },
};

export default function BlogPage() {
  return <BlogListing />;
}

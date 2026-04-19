import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Share2, ArrowLeft } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { blogPosts, getBlogBySlug } from '@/data/blogs';
import Container from '@/components/ui/Container';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: Props) {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // LinkedIn share URL
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    `${process.env.NEXT_PUBLIC_SITE_URL || 'https://intelliwareglobal.com'}/blog/${post.slug}`
  )}`;

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
        <Container className="relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 font-semibold"
          >
            <ArrowLeft size={18} />
            Back to Articles
          </Link>

          <div className="max-w-3xl">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-slate-600 bg-slate-100">
                {post.category.split(',')[0].trim()}
              </span>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  {post.readTime} min read
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-heading font-semibold tracking-heading sm:text-5xl lg:text-6xl text-slate-900 mb-6">
              {post.title}
            </h1>

            {/* Share Buttons */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-600">Share:</span>
              <a
                href={linkedinShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Image */}
      {post.image && (
        <section className="relative overflow-hidden py-12 md:py-20">
          <Container>
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </Container>
        </section>
      )}

      {/* Article Content */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div
                className="text-slate-700 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split('\n')
                    .map(para => {
                      // Handle headings
                      if (para.startsWith('## ')) {
                        return `<h2 class="text-2xl md:text-3xl font-heading font-semibold text-slate-900 mt-8 mb-4">${para.replace(/^## /, '')}</h2>`;
                      }
                      if (para.startsWith('### ')) {
                        return `<h3 class="text-xl md:text-2xl font-heading font-semibold text-slate-900 mt-6 mb-3">${para.replace(/^### /, '')}</h3>`;
                      }
                      // Handle numbered lists
                      if (para.match(/^\d+\./)) {
                        return `<div class="ml-6 mb-2 text-slate-700">${para}</div>`;
                      }
                      // Handle bullet points
                      if (para.startsWith('- ')) {
                        return `<div class="ml-6 mb-2 flex gap-3"><span class="text-accent">•</span><span class="text-slate-700">${para.replace(/^- /, '')}</span></div>`;
                      }
                      // Regular paragraph
                      if (para.trim()) {
                        return `<p class="text-slate-700 leading-relaxed">${para}</p>`;
                      }
                      return '';
                    })
                    .filter(Boolean)
                    .join(''),
                }}
              />
            </article>

            {/* Author & Share Footer */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">By</p>
                  <p className="text-lg font-semibold text-slate-900">
                    {post.author}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500 mb-3">Share this article:</p>
                  <a
                    href={linkedinShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
                  >
                    <Linkedin size={18} />
                    Share on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-8">
                Related Articles
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {blogPosts
                  .filter(
                    p =>
                      p.id !== post.id &&
                      p.category
                        .split(',')
                        .some(c =>
                          post.category
                            .split(',')
                            .map(pc => pc.trim())
                            .includes(c.trim())
                        )
                  )
                  .slice(0, 2)
                  .map(relatedPost => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group rounded-lg border border-slate-200 p-4 hover:border-accent hover:shadow-md transition-all"
                    >
                      <h3 className="font-heading font-semibold text-slate-900 mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-slate-500 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

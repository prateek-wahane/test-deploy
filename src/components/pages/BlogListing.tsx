'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { blogPosts, getBlogCategories } from '@/data/blogs';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function BlogListing() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getBlogCategories();

  const filteredPosts = selectedCategory
    ? blogPosts.filter(post =>
        post.category
          .split(',')
          .map(c => c.trim())
          .includes(selectedCategory)
      )
    : blogPosts;

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-50">
        <Container className="relative z-10 text-center">
          <h1 className="text-4xl font-heading font-semibold tracking-heading sm:text-5xl lg:text-6xl text-slate-900">
            Latest Articles & Insights
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-500">
            Stay updated with industry trends, best practices, and expert insights
            from our team of technology leaders.
          </p>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <Container>
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-900 mb-4">
              Filter by Category
            </h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === null
                    ? 'bg-accent text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Articles
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-accent text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map(post => (
              <div
                key={post.id}
                className="group rounded-2xl overflow-hidden border border-slate-200/60 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Featured Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center text-white/40">
                        <p className="text-sm">{post.category}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-slate-600 bg-slate-100">
                      <Tag size={12} />
                      {post.category.split(',')[0].trim()}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-semibold mb-3 text-slate-900 line-clamp-3">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime} min read
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors">
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-slate-500 mb-4">
                No articles found in this category.
              </p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-accent hover:text-accent/80 font-semibold"
              >
                View all articles
              </button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

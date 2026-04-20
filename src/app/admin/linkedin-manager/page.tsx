'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Linkedin, Send, Loader, AlertCircle, CheckCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import { blogPosts } from '@/data/blogs';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
}

interface PostStatus {
  slug: string;
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
  postId?: string;
}

export default function LinkedInPostManager() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [postStatuses, setPostStatuses] = useState<Record<string, PostStatus>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Initialize blog posts
    const mappedPosts: BlogPost[] = blogPosts.map(post => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      category: post.category,
    }));
    setPosts(mappedPosts);

    // Initialize post statuses
    const statuses: Record<string, PostStatus> = {};
    mappedPosts.forEach(post => {
      statuses[post.slug] = { slug: post.slug, status: 'idle' };
    });
    setPostStatuses(statuses);
  }, []);

  const handlePostToLinkedIn = async (slug: string) => {
    try {
      setPostStatuses(prev => ({
        ...prev,
        [slug]: { slug, status: 'loading', message: 'Posting to LinkedIn...' },
      }));

      const response = await fetch(`/api/blog/post-to-linkedin?slug=${slug}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setPostStatuses(prev => ({
          ...prev,
          [slug]: {
            slug,
            status: 'success',
            message: `Posted successfully! ID: ${data.postId}`,
            postId: data.postId,
          },
        }));
      } else {
        setPostStatuses(prev => ({
          ...prev,
          [slug]: {
            slug,
            status: 'error',
            message: data.error || 'Failed to post to LinkedIn',
          },
        }));
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setPostStatuses(prev => ({
        ...prev,
        [slug]: {
          slug,
          status: 'error',
          message: errorMessage,
        },
      }));
    }
  };

  const handlePostAll = async () => {
    setIsLoading(true);
    for (const post of posts) {
      await handlePostToLinkedIn(post.slug);
      // Add delay between posts to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    setIsLoading(false);
  };

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Linkedin className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-heading font-semibold text-slate-900">
                LinkedIn Blog Post Manager
              </h1>
            </div>
            <p className="text-lg text-slate-600">
              Publish your blog articles directly to your LinkedIn company page
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Info Card */}
            <div className="mb-12 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">How it works</h3>
                  <p className="text-blue-800 text-sm">
                    Select a blog post below and click "Post to LinkedIn" to automatically publish it to your company page. The post will include the title, excerpt, featured image, and a link to the full article on your website.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mb-8 flex flex-wrap gap-4 items-center">
  <a
    href="/api/linkedin/connect"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors"
  >
    <Linkedin className="h-5 w-5" />
    Connect LinkedIn
  </a>

  <button
    onClick={handlePostAll}
    disabled={isLoading || posts.length === 0}
    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold transition-colors"
  >
    {isLoading ? (
      <>
        <Loader className="h-5 w-5 animate-spin" />
        Posting...
      </>
    ) : (
      <>
        <Send className="h-5 w-5" />
        Post All to LinkedIn
      </>
    )}
  </button>
</div>

<div className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700">
  1. Click <strong>Connect LinkedIn</strong><br />
  2. Sign in with the LinkedIn account that is an admin of your company page<br />
  3. Return to this page and click <strong>Post</strong> or <strong>Post All</strong>
</div>

            {/* Blog Posts List */}
            <div className="space-y-4">
              {posts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-slate-500">No blog posts available</p>
                </div>
              ) : (
                posts.map(post => {
                  const status = postStatuses[post.slug];
                  return (
                    <div
                      key={post.slug}
                      className="flex items-center justify-between p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">{post.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-slate-500">
                          <span className="inline-flex px-2 py-1 rounded bg-slate-100 text-xs font-semibold">
                            {post.category.split(',')[0].trim()}
                          </span>
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        {status && status.status !== 'idle' && (
                          <div className="text-right">
                            {status.status === 'loading' && (
                              <div className="flex items-center gap-2 text-sm text-blue-600">
                                <Loader className="h-4 w-4 animate-spin" />
                                <span>Posting...</span>
                              </div>
                            )}
                            {status.status === 'success' && (
                              <div className="flex items-center gap-2 text-sm text-green-600">
                                <CheckCircle className="h-4 w-4" />
                                <span>Posted</span>
                              </div>
                            )}
                            {status.status === 'error' && (
                              <div className="text-right">
                                <div className="flex items-center gap-2 text-sm text-red-600 mb-1">
                                  <AlertCircle className="h-4 w-4" />
                                  <span>Failed</span>
                                </div>
                                <p className="text-xs text-red-500">{status.message}</p>
                              </div>
                            )}
                          </div>
                        )}

                        <button
                          onClick={() => handlePostToLinkedIn(post.slug)}
                          disabled={status?.status === 'loading' || isLoading}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                            status?.status === 'success'
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : status?.status === 'error'
                              ? 'bg-red-100 text-red-700 hover:bg-red-200'
                              : 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-slate-300'
                          }`}
                        >
                          {status?.status === 'loading' ? (
                            <Loader className="h-4 w-4 animate-spin" />
                          ) : status?.status === 'success' ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <Send className="h-4 w-4" />
                          )}
                          <span className="hidden sm:inline">
                            {status?.status === 'success'
                              ? 'Posted'
                              : status?.status === 'error'
                              ? 'Retry'
                              : 'Post'}
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* API Documentation */}
            <div className="mt-12 p-6 bg-slate-900 text-slate-50 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">API Usage</h3>
              <div className="space-y-4 text-sm font-mono">
                <div>
                  <p className="text-slate-400 mb-2">List all blog posts:</p>
                  <code className="bg-slate-800 p-3 rounded block overflow-x-auto">
                    GET /api/blog/post-to-linkedin?action=list
                  </code>
                </div>
                <div>
                  <p className="text-slate-400 mb-2">Post latest blog to LinkedIn:</p>
                  <code className="bg-slate-800 p-3 rounded block overflow-x-auto">
                    POST /api/blog/post-to-linkedin
                  </code>
                </div>
                <div>
                  <p className="text-slate-400 mb-2">Post specific blog to LinkedIn:</p>
                  <code className="bg-slate-800 p-3 rounded block overflow-x-auto">
                    POST /api/blog/post-to-linkedin?slug=ai-prediction-enterprise-security
                  </code>
                </div>
              </div>
            </div>

            {/* Back Link */}
            <div className="mt-8">
              <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

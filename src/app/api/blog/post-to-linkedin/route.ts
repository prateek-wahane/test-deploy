import { NextRequest, NextResponse } from 'next/server';
import { postToLinkedInWithMemberToken } from '@/lib/linkedin';
import { getBlogBySlug, blogPosts } from '@/data/blogs';

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get('linkedin_access_token')?.value;
    const expiresAt = request.cookies.get('linkedin_expires_at')?.value;

    if (!token || !expiresAt) {
      return NextResponse.json(
        { success: false, error: 'LinkedIn is not connected. Please connect first.' },
        { status: 401 }
      );
    }

    if (Date.now() > Number(expiresAt)) {
      return NextResponse.json(
        { success: false, error: 'LinkedIn connection expired. Please reconnect.' },
        { status: 401 }
      );
    }

    const searchParams = request.nextUrl.searchParams;
    let slug = searchParams.get('slug');

    if (!slug) {
      try {
        const body = await request.json();
        slug = body.slug;
      } catch {
        // ignore
      }
    }

    if (!slug) {
      slug = blogPosts[0]?.slug;
    }

    if (!slug) {
      return NextResponse.json(
        { success: false, error: 'No blog post found to publish.' },
        { status: 400 }
      );
    }

    const blogPost = getBlogBySlug(slug);
    if (!blogPost) {
      return NextResponse.json(
        { success: false, error: `Blog post not found: ${slug}` },
        { status: 404 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || 'https://www.intelliwareglobal.com';
    const postUrl = `${baseUrl}/blog/${slug}`;

    const result = await postToLinkedInWithMemberToken(token, {
      title: blogPost.title,
      description: blogPost.excerpt,
      url: postUrl,
    });

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error,
          blog: {
            slug: blogPost.slug,
            title: blogPost.title,
          },
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      postId: result.postId,
      blog: {
        slug: blogPost.slug,
        title: blogPost.title,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const action = searchParams.get('action');

  if (action === 'list') {
    return NextResponse.json({
      availablePosts: blogPosts.map((post) => ({
        slug: post.slug,
        title: post.title,
        date: post.date,
        category: post.category,
      })),
      total: blogPosts.length,
    });
  }

  return NextResponse.json({
    message: 'LinkedIn Blog Post API',
    endpoints: {
      connect: '/api/linkedin/connect',
      callback: '/api/linkedin/callback',
      post: '/api/blog/post-to-linkedin?slug=your-blog-slug',
    },
  });
}
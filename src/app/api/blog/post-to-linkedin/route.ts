import { NextRequest, NextResponse } from 'next/server';
import { postToLinkedIn } from '@/lib/linkedin';
import { getBlogBySlug, blogPosts } from '@/data/blogs';

/**
 * POST /api/blog/post-to-linkedin
 * 
 * Post a blog article to LinkedIn company page
 * 
 * Query parameters:
 * - slug: (optional) Blog post slug to post. If not provided, posts the latest blog post.
 * 
 * Request body (optional):
 * - slug: Blog post slug to post
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request
    const searchParams = request.nextUrl.searchParams;
    let slug = searchParams.get('slug');

    // If slug not in query params, try request body
    if (!slug && request.body) {
      try {
        const body = await request.json();
        slug = body.slug;
      } catch {
        // Request body is not JSON, continue without it
      }
    }

    // If no slug provided, use the most recent blog post
    if (!slug) {
      slug = blogPosts[0]?.slug;
    }

    if (!slug) {
      return NextResponse.json(
        { error: 'No blog posts found or slug not provided' },
        { status: 400 }
      );
    }

    // Get blog post
    const blogPost = getBlogBySlug(slug);
    if (!blogPost) {
      return NextResponse.json(
        { error: `Blog post not found: ${slug}` },
        { status: 404 }
      );
    }

    // Construct full URL
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://intelliwareglobal.com';
    const postUrl = `${baseUrl}/blog/${slug}`;
    const imageUrl = blogPost.image ? `${baseUrl}${blogPost.image}` : undefined;

    // Post to LinkedIn
    const result = await postToLinkedIn({
      title: blogPost.title,
      description: blogPost.excerpt,
      url: postUrl,
      imageUrl,
    });

    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          message: 'Blog post posted to LinkedIn successfully',
          postId: result.postId,
          blog: {
            slug: blogPost.slug,
            title: blogPost.title,
          },
        },
        { status: 200 }
      );
    } else {
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
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('API error:', errorMessage);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

/**
 * GET /api/blog/post-to-linkedin
 * 
 * Get status or list available blog posts
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const action = searchParams.get('action');

    if (action === 'list') {
      // Return list of blog posts that can be posted
      return NextResponse.json({
        availablePosts: blogPosts.map(post => ({
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
        post: {
          method: 'POST',
          url: '/api/blog/post-to-linkedin',
          params: {
            slug: '(optional) Blog post slug to post. If not provided, posts the latest.',
          },
          examples: [
            'POST /api/blog/post-to-linkedin (posts latest)',
            'POST /api/blog/post-to-linkedin?slug=ai-prediction-enterprise-security',
          ],
        },
        list: {
          method: 'GET',
          url: '/api/blog/post-to-linkedin?action=list',
          description: 'List all available blog posts that can be posted',
        },
      },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

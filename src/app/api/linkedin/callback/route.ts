import { NextRequest, NextResponse } from 'next/server';
import { exchangeCodeForLinkedInToken } from '@/lib/linkedin';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const error = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');

  if (error) {
    return NextResponse.redirect(
      new URL(
        `/admin/linkedin-manager?error=${encodeURIComponent(
          errorDescription || error
        )}`,
        request.url
      )
    );
  }

  const savedState = request.cookies.get('linkedin_oauth_state')?.value;

  if (!code || !state || !savedState || state !== savedState) {
    return NextResponse.redirect(
      new URL('/admin/linkedin-manager?error=linkedin_oauth_state_mismatch', request.url)
    );
  }

  try {
    const token = await exchangeCodeForLinkedInToken(code);

    const response = NextResponse.redirect(
      new URL('/admin/linkedin-manager?connected=1', request.url)
    );

    response.cookies.set('linkedin_access_token', token.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: token.expires_in,
    });

    response.cookies.set(
      'linkedin_expires_at',
      String(Date.now() + token.expires_in * 1000),
      {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
        maxAge: token.expires_in,
      }
    );

    response.cookies.set('linkedin_oauth_state', '', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 0,
    });

    return response;
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'LinkedIn callback failed';

    return NextResponse.redirect(
      new URL(
        `/admin/linkedin-manager?error=${encodeURIComponent(message)}`,
        request.url
      )
    );
  }
}
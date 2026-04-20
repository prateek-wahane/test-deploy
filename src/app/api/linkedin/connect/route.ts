import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { getLinkedInAuthorizationUrl } from '@/lib/linkedin';

export async function GET() {
  const state = crypto.randomBytes(16).toString('hex');
  const authUrl = getLinkedInAuthorizationUrl(state);

  const response = NextResponse.redirect(authUrl);

  response.cookies.set('linkedin_oauth_state', state, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 10,
  });

  return response;
}
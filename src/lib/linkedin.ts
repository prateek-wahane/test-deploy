interface LinkedInTokenResponse {
  access_token: string;
  expires_in: number;
}

interface LinkedInPostParams {
  title: string;
  description: string;
  url: string;
}

const LINKEDIN_VERSION = process.env.LINKEDIN_API_VERSION || '202511';

export function getLinkedInAuthorizationUrl(state: string): string {
  const clientId = process.env.LINKEDIN_CLIENT_ID!;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI!;

  const url = new URL('https://www.linkedin.com/oauth/v2/authorization');
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('redirect_uri', redirectUri);
  url.searchParams.set('state', state);
  url.searchParams.set('scope', 'w_organization_social');

  return url.toString();
}

export async function exchangeCodeForLinkedInToken(
  code: string
): Promise<LinkedInTokenResponse> {
  const response = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.LINKEDIN_REDIRECT_URI!,
      client_id: process.env.LINKEDIN_CLIENT_ID!,
      client_secret: process.env.LINKEDIN_CLIENT_SECRET!,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `LinkedIn token exchange failed: ${data.error_description || data.error || response.statusText}`
    );
  }

  return data as LinkedInTokenResponse;
}

export async function postToLinkedInWithMemberToken(
  accessToken: string,
  params: LinkedInPostParams
): Promise<{ success: boolean; postId?: string; error?: string }> {
  try {
    const companyPageId = process.env.LINKEDIN_COMPANY_PAGE_ID;
    if (!companyPageId) {
      throw new Error('Missing LINKEDIN_COMPANY_PAGE_ID');
    }

    const commentary = `${params.title}\n\n${params.description}\n\nRead more: ${params.url}`;

    const payload = {
      author: `urn:li:organization:${companyPageId}`,
      commentary,
      visibility: 'PUBLIC',
      distribution: {
        feedDistribution: 'MAIN_FEED',
        targetEntities: [],
        thirdPartyDistributionChannels: [],
      },
      lifecycleState: 'PUBLISHED',
      isReshareDisabledByAuthor: false,
    };

    const response = await fetch('https://api.linkedin.com/rest/posts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Linkedin-Version': LINKEDIN_VERSION,
        'X-Restli-Protocol-Version': '2.0.0',
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();

    if (!response.ok) {
      throw new Error(
        `LinkedIn post failed: ${response.status} ${response.statusText} ${responseText}`
      );
    }

    const postId =
      response.headers.get('x-restli-id') ||
      (() => {
        try {
          const parsed = JSON.parse(responseText);
          return parsed.id;
        } catch {
          return undefined;
        }
      })();

    return { success: true, postId };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return { success: false, error: message };
  }
}
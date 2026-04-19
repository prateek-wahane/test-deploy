interface LinkedInTokenResponse {
  access_token: string;
  expires_in: number;
}

interface LinkedInPostParams {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
}

/**
 * Get LinkedIn access token using client credentials
 */
async function getLinkedInAccessToken(): Promise<string> {
  try {
    const response = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.LINKEDIN_CLIENT_ID!,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET!,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`LinkedIn auth failed: ${error.error_description || error.error}`);
    }

    const data: LinkedInTokenResponse = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Failed to get LinkedIn access token:', error);
    throw error;
  }
}

/**
 * Upload image to LinkedIn and get image URN
 */
async function uploadImageToLinkedIn(
  imageUrl: string,
  accessToken: string
): Promise<string> {
  try {
    // First, register the upload
    const registerResponse = await fetch(
      'https://api.linkedin.com/v2/assets?action=registerUpload',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'LinkedIn-Version': '202404',
        },
        body: JSON.stringify({
          registerUploadRequest: {
            recipes: ['urn:li:digitalmediaRecipe:feedshare-image'],
            owner: `urn:li:organization:${process.env.LINKEDIN_COMPANY_PAGE_ID}`,
            serviceRelationships: [
              {
                relationshipType: 'OWNER',
                identifier: 'urn:li:userGeneratedContent',
              },
            ],
          },
        }),
      }
    );

    if (!registerResponse.ok) {
      throw new Error(
        `Failed to register image upload: ${registerResponse.statusText}`
      );
    }

    const registerData = await registerResponse.json();
    const uploadUrl = registerData.value.uploadMechanism['com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest'].uploadUrl;
    const imageAsset = registerData.value.asset;

    // Fetch the image from the provided URL
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image from ${imageUrl}`);
    }
    const imageBuffer = await imageResponse.arrayBuffer();

    // Upload the image
    const uploadResult = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'image/jpeg',
      },
      body: imageBuffer,
    });

    if (!uploadResult.ok) {
      throw new Error(`Failed to upload image: ${uploadResult.statusText}`);
    }

    return imageAsset;
  } catch (error) {
    console.error('Failed to upload image to LinkedIn:', error);
    throw error;
  }
}

/**
 * Post content to LinkedIn company page
 */
export async function postToLinkedIn(params: LinkedInPostParams): Promise<{
  success: boolean;
  postId?: string;
  error?: string;
}> {
  try {
    if (!process.env.LINKEDIN_CLIENT_ID || !process.env.LINKEDIN_CLIENT_SECRET || !process.env.LINKEDIN_COMPANY_PAGE_ID) {
      throw new Error('Missing LinkedIn credentials in environment variables');
    }

    // Get access token
    const accessToken = await getLinkedInAccessToken();

    // Prepare post content
    let postContent: any = {
      author: `urn:li:organization:${process.env.LINKEDIN_COMPANY_PAGE_ID}`,
      lifecycleState: 'PUBLISHED',
      specificContent: {
        'com.linkedin.ugc.ShareContent': {
          shareCommentary: {
            text: `${params.title}\n\n${params.description}\n\nRead more: ${params.url}`,
          },
          shareMediaCategory: 'ARTICLE',
        },
      },
      visibility: {
        'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC',
      },
    };

    // If image URL is provided, upload it and add to post
    if (params.imageUrl) {
      try {
        const imageAsset = await uploadImageToLinkedIn(params.imageUrl, accessToken);
        postContent.specificContent['com.linkedin.ugc.ShareContent'].media = [
          {
            status: 'READY',
            description: {
              text: params.title,
            },
            media: imageAsset,
            title: {
              text: params.title,
            },
          },
        ];
      } catch (imageError) {
        console.warn('Failed to upload image, posting without image:', imageError);
      }
    }

    // Post to LinkedIn
    const postResponse = await fetch('https://api.linkedin.com/v2/ugcPosts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'LinkedIn-Version': '202404',
      },
      body: JSON.stringify(postContent),
    });

    if (!postResponse.ok) {
      const error = await postResponse.json();
      throw new Error(
        `Failed to post to LinkedIn: ${error.message || postResponse.statusText}`
      );
    }

    const postData = await postResponse.json();
    const postId = postData.id;

    console.log('Successfully posted to LinkedIn:', postId);
    return {
      success: true,
      postId,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('LinkedIn posting error:', errorMessage);
    return {
      success: false,
      error: errorMessage,
    };
  }
}

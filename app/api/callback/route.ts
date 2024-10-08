import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('req', req);
  const { searchParams } = new URL(req.url!, req.url!);
  const code = searchParams.get('code') as string;
  const state = searchParams.get('state') as string;
  console.log('state', state);

  if (!code) {
    return res.status(400).json({ error: 'No authorization code provided' });
  }

  try {
    const tokenResponse = await fetch(process.env.EVE_TOKEN_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        client_id: process.env.EVE_PUBLIC_CLIENT_ID!,
        client_secret: process.env.EVE_CLIENT_SECRET_KEY!,
        redirect_uri: process.env.EVE_REDIRECT_URI!
      }).toString()
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json();
      console.error('Error exchanging authorization code for token:', errorData);
      return res.status(tokenResponse.status).json({ error: errorData });
    }

    const { access_token: accessToken, refresh_token: refreshToken } = await tokenResponse.json();
    const response = NextResponse.redirect(new URL(`${process.env.PUBLIC_SITE_URL}/character`));

    response.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 20 // 20 minutes for the access token
    });

    response.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 7 days for the refresh token
    });

    return response;
  } catch (error) {
    console.error('Error exchanging authorization code for token:', error);
    return new Response('Error exchanging authorization code for token', {
      status: 500
    });
  }
};

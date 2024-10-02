import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const clientId = process.env.EVE_PUBLIC_CLIENT_ID;
  const redirectUri = process.env.EVE_REDIRECT_URI;
  const scope = process.env.EVE_ESI_SCOPES;

  const authUrl = `${
    process.env.EVE_AUTH_URL
  }?response_type=code&redirect_uri=${encodeURIComponent(
    redirectUri!
  )}&client_id=${clientId}&scope=${scope}`;

  res.redirect(authUrl);
}

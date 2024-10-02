import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("req", req);
  const { searchParams } = new URL(req.url!, req.url!);
  const code = searchParams.get("code") as string;
  const state = searchParams.get("state") as string;
  console.log("code", code);
  console.log("state", state);

  if (!code) {
    return res.status(400).json({ error: "No authorization code provided" });
  }

  try {
    const tokenResponse = await axios.post(
      process.env.EVE_TOKEN_URL!,
      new URLSearchParams({
        grant_type: "authorization_code",
        code,
        client_id: process.env.EVE_PUBLIC_CLIENT_ID!,
        client_secret: process.env.EVE_CLIENT_SECRET_KEY!,
        redirect_uri: process.env.EVE_REDIRECT_URI!,
      }).toString(),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    const { access_token, refresh_token } = tokenResponse.data;
    console.log("tokenResponse", tokenResponse.data);
    // Store the token (e.g., session or database) or return it to the client
    return new Response("Successfully exchanged token", {
      status: 200,
    });
  } catch (error) {
    console.error("Error exchanging authorization code for token:", error);
    return new Response("Error exchanging authorization code for token", {
      status: 500,
    });
  }
};

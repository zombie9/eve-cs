import { redirect } from "next/navigation";

export const GET = async () => {
  const clientId = process.env.EVE_PUBLIC_CLIENT_ID;
  const redirectUri = process.env.EVE_REDIRECT_URI;
  const scope = process.env.EVE_ESI_SCOPES;
  console.log("clientId", clientId);
  const authUrl = `${
    process.env.EVE_AUTH_URL
  }?response_type=code&redirect_uri=${encodeURIComponent(
    redirectUri!
  )}&client_id=${clientId}&scope=${scope}&state=random_state`;
  console.log("authUrl", authUrl);

  redirect(authUrl);
};

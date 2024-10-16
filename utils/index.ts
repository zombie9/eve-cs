import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface FetchEveDataProps {
  slug: string;
  authRequired?: boolean;
}

function getAccessToken(): string | undefined {
  const accessToken = cookies().get('accessToken')?.value;
  if (!accessToken) {
    redirect('/');
  }
  return accessToken;
}

export async function fetchEveData<T>({
  slug,
  authRequired = false
}: FetchEveDataProps): Promise<T> {
  let accessToken: string | undefined;

  if (authRequired) {
    accessToken = getAccessToken();
  }

  const endpoint = `${process.env.EVE_ESI_URL}${slug}`;
  const res = await fetch(endpoint, {
    method: 'GET',
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : ''
    },
    cache: 'no-cache'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

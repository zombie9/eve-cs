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

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
};

export function sortByName<T extends { skillName: string | number }>(items: T[]): T[] {
  return items.sort((a, b) => {
    if (a.skillName < b.skillName) {
      return -1;
    }
    if (a.skillName > b.skillName) {
      return 1;
    }
    return 0;
  });
}

export function sortByGroupName<T extends { skillGroup: string }>(items: T[]): T[] {
  return items.sort((a, b) => {
    if (a.skillGroup < b.skillGroup) {
      return -1;
    }
    if (a.skillGroup > b.skillGroup) {
      return 1;
    }
    return 0;
  });
}

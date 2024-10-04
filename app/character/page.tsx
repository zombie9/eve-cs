import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

interface CharacterData {
  CharacterID: number;
  CharacterName: string;
  ExpiresOn: string;
  Scopes: string;
  TokenType: string;
  CharacterOwnerHash: string;
  IntellectualProperty: string;
}

export default async function Character() {
  const accessToken = await cookies().get('accessToken')?.value;

  const res = await fetch(`${process.env.PUBLIC_SITE_URL}/api/character`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    credentials: 'include'
  });

  if (res.ok) {
    const character: CharacterData = await res.json();

    redirect(`/character/${character.CharacterID}`);
  } else {
    console.error('Failed to fetch character data');
    return <div>Failed to load character data. Please try again later.</div>;
  }
}

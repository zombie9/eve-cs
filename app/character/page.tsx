import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { VerificationData } from '@/types';

export default async function VerifyCharacter() {
  const accessToken = await cookies().get('accessToken')?.value;

  const res = await fetch(`${process.env.PUBLIC_SITE_URL}/api/verify`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    credentials: 'include'
  });

  if (res.ok) {
    const character: VerificationData = await res.json();

    redirect(`/character/${character.CharacterID}`);
  } else {
    console.error('Failed to fetch character data');
    return <div>Failed to load character data. Please try again later.</div>;
  }
}

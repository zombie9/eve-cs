import Image from 'next/image';
import { cookies } from 'next/headers';

interface CharacterDetailsProps {
  params: {
    characterId: string;
  };
}

export default async function CharacterDetails({ params }: CharacterDetailsProps) {
  const { characterId } = params;

  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) {
    throw new Error('Access token is missing');
  }

  // Fetch the public character data from the EVE ESI API
  const res = await fetch(`https://esi.evetech.net/latest/characters/${characterId}/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}` // Send the access token in the Authorization header
    },
    cache: 'no-store' // Ensure fresh data is fetched every time
  });

  if (!res.ok) {
    throw new Error('Failed to fetch character data');
  }

  const character: CharacterData = await res.json();

  console.log('character', character);

  return (
    <div>
      <Image
        src={`https://images.evetech.net/characters/${characterId}/portrait?size=256`}
        alt="Character portrait"
        width={256}
        height={256}
      />
    </div>
  );
}

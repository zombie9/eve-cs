import Image from 'next/image';
import { cookies } from 'next/headers';

import { bloodlines, races } from '../../../data';

interface CharacterDetailsProps {
  params: {
    characterId: string;
  };
}

interface CharacterData {
  name: string;
  birthday: string;
  race_id: number;
  bloodline_id: number;
  description: string;
  security_status: number;
  gender: string;
  corporation_id: number;
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
  const race = races[character.race_id].nameID.en;
  const bloodline = bloodlines[character.bloodline_id].nameID.en;
  console.log(race);

  console.log('character', character);

  return (
    <div className="flex">
      <Image
        src={`https://images.evetech.net/characters/${characterId}/portrait?size=256`}
        alt="Character portrait"
        width={256}
        height={256}
      />
      <div>
        <p>Name: {character.name}</p>
        <p>Birthday: {character.birthday}</p>
        <p>Description: {character.description}</p>
        <p>Gender: {character.gender}</p>
        <p>Race: {race}</p>
        <p>Bloodline: {bloodline}</p>
      </div>
    </div>
  );
}

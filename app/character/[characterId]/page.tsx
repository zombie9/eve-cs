import Image from 'next/image';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

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
    redirect('/');
  }

  const res = await fetch(`https://esi.evetech.net/latest/characters/${characterId}/`, {
    method: 'GET',
    // headers: {
    //   Authorization: `Bearer ${accessToken}`
    // },
    cache: 'no-cache'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch character data');
  }

  const character: CharacterData = await res.json();
  const race = races[character.race_id].nameID.en;
  const bloodline = bloodlines[character.bloodline_id].nameID.en;

  const birthDate = new Date(character.birthday);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = birthDate.toLocaleDateString('en-US', options);

  console.log('character', character);

  return (
    <>
      <div className="flex gap-x-4 bg-black bg-opacity-50 p-4">
        <Image
          src={`https://images.evetech.net/characters/${characterId}/portrait?size=256`}
          alt="Character portrait"
          width={160}
          height={160}
        />
        <div className="grid grid-cols-[auto,1fr] gap-x-10">
          <p>Name:</p>
          <p>{character.name}</p>

          <p>Birthday:</p>
          <p>{formattedDate}</p>

          <p>Gender:</p>
          <p>{character.gender.charAt(0).toUpperCase() + character.gender.slice(1)}</p>

          <p>Race:</p>
          <p>{race}</p>

          <p>Bloodline:</p>
          <p>{bloodline}</p>

          <p>Security Status:</p>
          <p>{character.security_status.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex gap-4 bg-black bg-opacity-50 p-4 mt-4">
        {character.description
          ? "Zinja, one of twenty-three vat-grown experiments, was genetically engineered to survive the rigors of capsuleer augmentation. Zinja's indomitable will, a result of this engineered perfection, empowers them to defy mortality, thriving amidst the cold void of New Eden where others would falter."
          : ''}
      </div>
    </>
  );
}

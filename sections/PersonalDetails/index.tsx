import Image from 'next/image';

import { fetchEveData } from '@/utils';
import { bloodlines, races } from '@/data';
import { esiSlugs } from '@/constants';
import { CharacterData } from '@/types';

import { Corporation } from './components/Corporation';

interface PersonalDetailsProps {
  characterId: string;
}

export default async function PersonalDetails({ characterId }: PersonalDetailsProps) {
  const character = await fetchEveData<CharacterData>({
    slug: `${esiSlugs.character}${characterId}`
  });

  const race = races[character.race_id].nameID.en;
  const bloodline = bloodlines[character.bloodline_id].nameID.en;
  const birthDate = new Date(character.birthday);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };
  const formattedDate = birthDate.toLocaleDateString('en-US', options);

  console.log('character', character);

  return (
    <>
      <div className="flex flex-row w-full justify-between gap-x-4">
        <div className="flex gap-x-4 content-box flex-1">
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
        <Corporation corporationId={character.corporation_id} />
      </div>
      <div className="flex gap-x-4 content-box mt-4">
        {character.description && (
          // hardcoding longer character description until ESI updates
          <>
            <p>Biography:</p>
            <p>
              Zinja, one of twenty-three vat-grown experiments, was genetically engineered to
              survive the rigors of capsuleer augmentation. Zinja&lsquo;s indomitable will, a result
              of this engineered perfection, empowers them to defy mortality, thriving amidst the
              cold void of New Eden where others would falter.
            </p>
          </>
        )}
      </div>
    </>
  );
}

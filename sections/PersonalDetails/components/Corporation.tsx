import Image from 'next/image';

import { fetchEveData, formatDate } from '@/utils';
import { esiSlugs } from '@/constants';
import { CorporationData, CharacterData } from '@/types';
import { stations } from '@/data';

export async function Corporation({ corporationId }: { corporationId: number }) {
  const corporation = await fetchEveData<CorporationData>({
    slug: `${esiSlugs.corporations}${corporationId}`,
    authRequired: true
  });

  const { name, ticker, member_count, date_founded, home_station_id, description, ceo_id } =
    corporation;

  const homeStation =
    stations.find((station) => station.stationID === home_station_id)?.stationName.split(' -')[0] ||
    'Unknown';

  const ceo = await fetchEveData<CharacterData>({
    slug: `${esiSlugs.character}${ceo_id}`
  });
  const ceoName = ceo.name;

  return (
    <div className="flex gap-x-4 content-box flex-1">
      <Image
        src={`https://images.evetech.net/corporations/${corporationId}/logo?size=128`}
        alt="Corporation Logo"
        width={160}
        height={160}
      />
      <div className="grid grid-cols-[auto,1fr] gap-x-10">
        <p>Corporation:</p>
        <p>
          {name} ({ticker})
        </p>

        <p>Member Count:</p>
        <p>{member_count}</p>

        <p>Date Founded:</p>
        <p>{formatDate(date_founded)}</p>

        <p>Home Station:</p>
        <p>{homeStation}</p>

        <p>CEO:</p>
        <p>{ceoName}</p>

        <p>Description:</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

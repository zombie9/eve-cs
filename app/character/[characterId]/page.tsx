import Image from 'next/image';

interface CharacterDetailsProps {
  params: {
    characterId: string;
  };
}

export default function CharacterDetails({ params }: CharacterDetailsProps) {
  const { characterId } = params;

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

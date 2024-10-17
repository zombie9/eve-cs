import PersonalDetails from '@/sections/PersonalDetails';

interface CharacterDetailsProps {
  params: {
    characterId: string;
  };
}

export default async function CharacterDetails({ params }: CharacterDetailsProps) {
  const { characterId } = params;

  return (
    <>
      <PersonalDetails characterId={characterId} />
    </>
  );
}

import PersonalDetails from '@/components/PersonalDetails';

interface CharacterProps {
  params: {
    characterId: string;
  };
}

export default async function Character({ params }: CharacterProps) {
  const { characterId } = params;

  return (
    <>
      <PersonalDetails characterId={characterId} />
    </>
  );
}

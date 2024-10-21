import PersonalDetails from '@/sections/PersonalDetails';
import CurrentSkills from '@/sections/Skills';

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
      <CurrentSkills characterId={characterId} />
    </>
  );
}

interface CharacterDetailsProps {
  params: {
    characterId: string;
  };
}

export default function CharacterDetails({ params }: CharacterDetailsProps) {
  const { characterId } = params;

  return (
    <div>
      <h1>Character Details</h1>
      <br />
      <p>Character ID: {characterId}</p>
      {/* Add more character details here */}
    </div>
  );
}

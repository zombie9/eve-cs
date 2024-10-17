import Image from 'next/image';

export async function Corporation({ corporationId }: { corporationId: number }) {
  return (
    <div className="flex gap-x-4 content-box flex-1">
      <Image
        src={`https://images.evetech.net/corporations/${corporationId}/logo?size=128`}
        alt="Character portrait"
        width={160}
        height={160}
      />
      <div className="grid grid-cols-[auto,1fr] gap-x-10">
        <p>Corporation:</p>

        <p>{corporationId}</p>

        <p>Corporation:</p>

        <p>{corporationId}</p>

        <p>Corporation:</p>

        <p>{corporationId}</p>

        <p>Gender:</p>

        <p>Race:</p>

        <p>Bloodline:</p>

        <p>Security Status:</p>
      </div>
    </div>
  );
}

import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
interface CharacterData {
  CharacterID: number;
  CharacterName: string;
  ExpiresOn: string;
  Scopes: string;
  TokenType: string;
  CharacterOwnerHash: string;
  IntellectualProperty: string;
}

export async function GET(req: NextRequest) {
  const accessToken = req.headers.get('authorization')?.split(' ')[1];

  if (!accessToken) {
    console.error('Access token not provided');
    return NextResponse.json({ error: 'Access token not provided' }, { status: 400 });
  }

  try {
    const verifyUrl = process.env.EVE_VERIFY_URL;
    const response = await fetch(`${verifyUrl}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error fetching character data:', errorData);
      return NextResponse.json(
        { error: errorData || 'Internal Server Error' },
        { status: response.status }
      );
    }

    const data: CharacterData = await response.json();
    console.log('Character data:', data);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching character data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

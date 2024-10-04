import axios from 'axios';
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
    const response = await axios.get<CharacterData>(`${verifyUrl}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    console.log('Character data:', response.data);

    return NextResponse.json(response.data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error fetching character data:', error.response?.data || error.message);
    return NextResponse.json(
      { error: error.response?.data || 'Internal Server Error' },
      { status: error.response?.status || 500 }
    );
  }
}

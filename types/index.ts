export interface VerificationData {
  CharacterID: number;
  CharacterName: string;
  ExpiresOn: string;
  Scopes: string;
  TokenType: string;
  CharacterOwnerHash: string;
  IntellectualProperty: string;
}

export interface CharacterData {
  name: string;
  birthday: string;
  race_id: number;
  bloodline_id: number;
  description: string;
  security_status: number;
  gender: string;
  corporation_id: number;
}

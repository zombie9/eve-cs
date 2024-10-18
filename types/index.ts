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

export interface CorporationData {
  name: string;
  ticker: string;
  member_count: number;
  ceo_id: number;
  alliance_id: number;
  faction_id: number;
  creator_id: number;
  date_founded: string;
  home_station_id: number;
  shares: number;
  url: string;
  war_eligible: boolean;
  description: string;
  tax_rate: number;
}

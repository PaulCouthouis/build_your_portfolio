export interface Portfolio {
  id: number;
  name: string;
  job: string;
  description: string;
  katakana: string;
  sexe: boolean | null;
  address: string;
}

export interface AppState {
  portfolios: Portfolio[];
}

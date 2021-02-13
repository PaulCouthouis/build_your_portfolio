export interface Portfolio {
  id: number;
  name: string;
  job?: string;
  description?: string;
  katakana?: string;
  sexe?: number | null;
  address?: string;
  birthday?: string;
}

export interface AppState {
  current: Portfolio;
  portfolios: Portfolio[];
}

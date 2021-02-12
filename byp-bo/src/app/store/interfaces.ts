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
  access_token: string;
  logged: boolean;
  loginError: boolean;
  user: {
    email: string;
    name: string;
  };
  portfolios: Portfolio[];
}

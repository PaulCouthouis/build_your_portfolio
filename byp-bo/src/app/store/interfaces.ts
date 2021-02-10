export interface Portfolio {
  name: string;
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

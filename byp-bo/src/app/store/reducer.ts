export interface AppState {
  access_token?: string;
  logged: boolean;
  user?: {
    email: string;
    name: string;
  };
}

export function AppReducer(
  state = {
    logged: false,
  }
): AppState {
  return state;
}

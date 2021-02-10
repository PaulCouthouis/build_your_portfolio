import { Action, ActionReducer, createReducer, on, select } from '@ngrx/store';
import * as AppActions from './actions';

export interface AppState {
  access_token?: string;
  logged: boolean;
  user?: {
    email: string;
    name: string;
  };
}

export const AppReducer = createReducer<AppState>(
  // initialState :
  {
    logged: false,
  },
  // actions
  on(AppActions.authActionSuccess, (s) => ({ ...s, logged: true }))
);

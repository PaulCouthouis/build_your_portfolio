import { Action, ActionReducer, createReducer, on, select } from '@ngrx/store';
import * as AppActions from './actions';

export interface AppState {
  access_token?: string;
  logged: boolean;
  loginError: boolean;
  user?: {
    email: string;
    name: string;
  };
}

export const AppReducer = createReducer<AppState>(
  // initialState :
  {
    access_token: '',
    logged: false,
    loginError: false,
    user: {
      email: '',
      name: '',
    },
  },
  // actions
  on(AppActions.authActionSuccess, (oldState, props) => ({
    ...oldState,
    access_token: props.access_token,
    logged: true,
    loginError: false,
    user: props.user,
  })),
  on(AppActions.authActionError, (oldState) => ({
    ...oldState,
    loginError: true,
  }))
);

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

const lS = {
  access_token: localStorage.getItem('access_token'),
  user: {
    email: localStorage.getItem('user_email') || '',
    name: localStorage.getItem('user_name') || '',
  },
};

export const AppReducer = createReducer<AppState>(
  // initialState :
  {
    access_token: lS.access_token || '',
    logged: !!lS.access_token && !!lS.user.email && !!lS.user.name,
    loginError: false,
    user: lS.user,
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

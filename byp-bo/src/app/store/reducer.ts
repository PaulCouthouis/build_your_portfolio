import { createReducer, on } from '@ngrx/store';

import * as AppActions from './actions';
import { AppState } from './interfaces';

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
    portfolios: [],
  },
  // actions
  on(AppActions.authSuccessAction, (oldState, { access_token, user }) => ({
    ...oldState,
    access_token,
    logged: true,
    loginError: false,
    user,
  })),
  on(AppActions.authErrorAction, (oldState) => ({
    ...oldState,
    loginError: true,
  })),
  on(AppActions.getPortfoliosSuccessAction, (oldState, { portfolios }) => ({
    ...oldState,
    portfolios,
  })),
  on(AppActions.getPortfolioSuccessAction, (oldState, { portfolio }) => ({
    ...oldState,
    portfolios: oldState.portfolios.length
      ? oldState.portfolios.map((oldPortfolio) =>
          oldPortfolio.id === portfolio.id ? portfolio : oldPortfolio
        )
      : [portfolio],
  }))
);

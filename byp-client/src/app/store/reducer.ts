import { createReducer, on } from '@ngrx/store';

import * as AppActions from './actions';
import { AppState } from './interfaces';

export const AppReducer = createReducer<AppState>(
  // initialState :
  {
    current: {
      id: -1,
      name: '',
    },
    portfolios: [],
  },
  // actions
  on(AppActions.getPortfoliosSuccessAction, (oldState, { portfolios }) => ({
    ...oldState,
    portfolios,
  })),
  on(AppActions.getPortfolioSuccessAction, (oldState, { portfolio }) => ({
    ...oldState,
    current: portfolio,
  }))
);

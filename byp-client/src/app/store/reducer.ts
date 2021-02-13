import { createReducer, on } from '@ngrx/store';

import * as AppActions from './actions';
import { AppState } from './interfaces';

export const AppReducer = createReducer<AppState>(
  // initialState :
  {
    portfolios: [],
  },
  // actions
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

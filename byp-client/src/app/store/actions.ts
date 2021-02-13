import { createAction, props } from '@ngrx/store';

import { Portfolio } from './interfaces';

/**
 * Get All Portfolios
 */
export const getPortfoliosAction = createAction('[Portfolios] Get All');
export const getPortfoliosSuccessAction = createAction(
  '[Porfolios] Get All Success',
  props<{
    portfolios: Portfolio[];
  }>()
);
export const getPortfoliosErrorAction = createAction(
  '[Porfolios] Get All Error'
);

/**
 * Get Portfolio
 */
export const getPortfolioAction = createAction(
  '[Portfolio] Get Portfolio',
  props<{ id: string }>()
);
export const getPortfolioSuccessAction = createAction(
  '[Portfolio] Get Portfolio Success',
  props<{ portfolio: Portfolio }>()
);
export const getPortfolioErrorAction = createAction(
  '[Portfolio] Get Portfolio Error'
);

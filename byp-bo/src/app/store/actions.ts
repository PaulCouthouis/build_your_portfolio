import { createAction, props } from '@ngrx/store';
import { Portfolio } from './interfaces';

/**
 * Auth
 */
export const authAction = createAction(
  '[Login] Authentification Attempt',
  props<{ email: string; password: string }>()
);
export const authSuccessAction = createAction(
  '[Login] Authentification Success',
  props<{
    access_token: string;
    user: {
      email: string;
      name: string;
    };
  }>()
);
export const authErrorAction = createAction('[Login] Authentification Error');

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
 * Post Portfolio
 */
export const postPortfolioAction = createAction(
  '[Portfolio] Post Porfolio',
  props<Portfolio>()
);
export const postPortfolioSuccessAction = createAction(
  '[Portfolio] Post Porfolio Success',
  props<Portfolio>()
);
export const postPortfolioErrorAction = createAction(
  '[Portfolio] Post Porfolio Error'
);

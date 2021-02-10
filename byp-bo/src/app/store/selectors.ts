import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './interfaces';

const getAppState = createFeatureSelector<AppState>('state');

export const getAccessToken = createSelector(
  getAppState,
  (s) => s.access_token
);
export const getLogged = createSelector(getAppState, (s) => s.logged);
export const getLoginError = createSelector(getAppState, (s) => s.loginError);
export const getPorfolios = createSelector(getAppState, (s) => s.portfolios);

import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState, Portfolio } from './interfaces';

const getAppState = createFeatureSelector<AppState>('state');

export const getPortfolios = createSelector(getAppState, (s) => s.portfolios);
export const getPortfolio = createSelector(getAppState, (s) => s.current);

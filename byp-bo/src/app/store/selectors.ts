import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './reducer';

const getAppState = createFeatureSelector<AppState>('state');

export const getLogged = createSelector(getAppState, (s) => s.logged);
export const getLoginError = createSelector(getAppState, (s) => s.loginError);

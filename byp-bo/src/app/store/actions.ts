import { createAction, props } from '@ngrx/store';

export const authAction = createAction(
  '[Login] Authentification Attempt',
  props<{ email: string; password: string }>()
);
export const authActionSuccess = createAction(
  '[Login] Authentification Success'
);

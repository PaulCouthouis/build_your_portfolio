import { createAction, props } from '@ngrx/store';

export const authAction = createAction(
  '[Login] Authentification Attempt',
  props<{ email: string; password: string }>()
);
export const authActionSuccess = createAction(
  '[Login] Authentification Success',
  props<{
    access_token: string;
    user: {
      email: string;
      name: string;
    };
  }>()
);
export const authActionError = createAction('[Login] Authentification Error');

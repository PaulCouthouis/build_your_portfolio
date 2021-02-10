import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { authAction, authActionError, authActionSuccess } from './actions';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  authentification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction),
      mergeMap((payload) =>
        this.httpClient
          .post<
            | {
                access_token: string;
                user: {
                  email: string;
                  name: string;
                };
              }
            | { message: string }
          >(`${environment.api}login`, payload)
          .pipe(
            map((r) => {
              if ('access_token' in r) {
                this.router.navigate(['/portfolios']);
                return authActionSuccess(r);
              }
              return authActionError();
            }),
            catchError(() => of(authActionError()))
          )
      )
    )
  );
}

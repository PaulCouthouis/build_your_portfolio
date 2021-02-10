import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of, forkJoin } from 'rxjs';
import { catchError, map, mergeMap, pluck, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  authAction,
  authErrorAction,
  authSuccessAction,
  getPortfoliosAction,
  getPortfoliosErrorAction,
  getPortfoliosSuccessAction,
  postPortfolioAction,
  postPortfolioSuccessAction,
} from './actions';
import { Portfolio } from './interfaces';
import { getAccessToken } from './selectors';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store,
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
                localStorage.setItem('access_token', r.access_token);
                localStorage.setItem('user_name', r.user.name);
                localStorage.setItem('user_email', r.user.email);

                this.router.navigate(['/portfolios']);
                return authSuccessAction(r);
              }
              return authErrorAction();
            }),
            catchError(() => of(authErrorAction()))
          )
      )
    )
  );

  getPortfolios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPortfoliosAction),
      mergeMap(() => this.store.pipe(select(getAccessToken))),
      mergeMap((token) =>
        this.httpClient
          .get<Portfolio[]>(`${environment.api}portfolio`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .pipe(
            map((r) => getPortfoliosSuccessAction({ portfolios: r })),
            catchError(() => of(getPortfoliosErrorAction()))
          )
      )
    )
  );

  postPortfolio$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postPortfolioAction),
      mergeMap((payload) =>
        this.store.pipe(
          select(getAccessToken),
          map((token) => ({ payload, token }))
        )
      ),
      mergeMap(({ payload, token }) =>
        this.httpClient
          .post(`${environment.api}portfolio`, payload, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .pipe(
            map(() => {
              this.router.navigate(['/portfolios']);
              return postPortfolioSuccessAction(payload);
            }),
            catchError(() => of(getPortfoliosErrorAction()))
          )
      )
    )
  );
}

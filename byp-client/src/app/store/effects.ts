import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import {
  getPortfolioAction,
  getPortfolioErrorAction,
  getPortfoliosAction,
  getPortfoliosErrorAction,
  getPortfoliosSuccessAction,
  getPortfolioSuccessAction,
} from './actions';
import { Portfolio } from './interfaces';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  getPortfolios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPortfoliosAction),
      mergeMap(() =>
        this.httpClient.get<Portfolio[]>(`${environment.api}portfolio`).pipe(
          map((r) => getPortfoliosSuccessAction({ portfolios: r })),
          catchError(() => of(getPortfoliosErrorAction()))
        )
      )
    )
  );

  getPortfolio$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPortfolioAction),
      mergeMap(({ id }) =>
        this.httpClient
          .get<Portfolio>(`${environment.api}portfolio/${id}`)
          .pipe(
            map((portfolio) => getPortfolioSuccessAction({ portfolio })),
            catchError(() => of(getPortfolioErrorAction()))
          )
      )
    )
  );
}

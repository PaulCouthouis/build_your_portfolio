import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, take, tap } from 'rxjs/operators';
import { authAction, authActionSuccess } from './actions';

@Injectable()
export class AppEffects {
  authentification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction),
      map(() => authActionSuccess()),
      tap(() => {
        this.router.navigate(['/portfolios']);
      })
    )
  );

  constructor(private actions$: Actions, private router: Router) {}
}

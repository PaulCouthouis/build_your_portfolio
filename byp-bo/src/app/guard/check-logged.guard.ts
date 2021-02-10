import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { getLogged } from '../store/selectors';

@Injectable({
  providedIn: 'root',
})
export class CheckLoggedGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly store: Store) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(getLogged),
      tap((b) => {
        if (!b) {
          this.router.navigate(['/login']);
        }
      }),
      take(1)
    );
  }
}

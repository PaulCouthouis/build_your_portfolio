import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { getLogged } from '../store/selectors';

@Injectable({
  providedIn: 'root',
})
export class CheckNotLoggedGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly store: Store) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(getLogged),
      map((b) => {
        if (b) {
          this.router.navigate(['/portfolios']);
        }
        return !b;
      }),
      take(1)
    );
  }
}

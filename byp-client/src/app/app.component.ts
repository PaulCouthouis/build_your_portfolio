import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getPortfoliosAction } from './store/actions';
import { getPortfolios } from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly portfolios$ = this.store.pipe(select(getPortfolios));

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getPortfoliosAction());
  }
}

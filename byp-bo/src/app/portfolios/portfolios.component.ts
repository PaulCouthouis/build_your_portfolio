import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { getPortfoliosAction } from '../store/actions';
import { getPortfolios } from '../store/selectors';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss'],
})
export class PortfoliosComponent implements OnInit {
  readonly displayedColumns: string[] = ['name', 'edit'];
  readonly portfolios$ = this.store.pipe(select(getPortfolios));

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getPortfoliosAction());
  }
}

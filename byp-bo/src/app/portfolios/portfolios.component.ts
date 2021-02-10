import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getPortfoliosAction } from '../store/actions';
import { getPorfolios } from '../store/selectors';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss'],
})
export class PortfoliosComponent implements OnInit {
  displayedColumns: string[] = ['name', 'edit'];
  portfolios$ = this.store.pipe(select(getPorfolios));

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getPortfoliosAction());
  }
}

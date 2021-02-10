import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getPortfoliosAction } from '../store/actions';
import { getPorfolios } from '../store/selectors';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss'],
})
export class PortfoliosComponent implements OnInit {
  readonly displayedColumns: string[] = ['name', 'edit'];
  readonly portfolios$ = this.store.pipe(select(getPorfolios));

  constructor(private readonly store: Store, private readonly router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(getPortfoliosAction());
  }

  navigateToNew(): void {
    this.router.navigate(['/portfolio/new']);
  }
}

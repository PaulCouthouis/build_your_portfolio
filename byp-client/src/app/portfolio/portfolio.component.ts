import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, mergeMap, take } from 'rxjs/operators';
import { getPortfolioAction } from '../store/actions';
import { getPortfolio } from '../store/selectors';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  private readonly routeId$ = this.route.params.pipe<string>(map((p) => p.id));
  readonly portfolio$ = this.routeId$.pipe(
    map((id) => parseInt(id, 10)),
    mergeMap((id) => this.store.select(getPortfolio, id))
  );

  constructor(private readonly store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeId$.subscribe((id) => {
      this.store.dispatch(getPortfolioAction({ id }));
    });
  }
}

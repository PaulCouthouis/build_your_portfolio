import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, mergeMap, take } from 'rxjs/operators';
import { getPortfolioAction, postPortfolioAction } from '../store/actions';
import { getPortfolio } from '../store/selectors';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  private readonly routeId$ = this.route.params.pipe<string>(map((p) => p.id));
  private readonly params$ = this.routeId$.pipe(
    map((id) => ({ type: !!parseInt(id, 10) ? 'edit' : id, id })),
    take(1)
  );
  private readonly portfolio$ = this.routeId$.pipe(
    map((id) => parseInt(id, 10)),
    mergeMap((id) => this.store.select(getPortfolio, id)),
    take(2)
  );

  readonly fgPortfolio = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  readonly wording$ = this.params$.pipe(
    map(({ type }) =>
      type === 'edit'
        ? {
            title: 'Edit this Portfolio',
            submit: 'Edit',
          }
        : {
            title: 'Create a New Portfolio',
            submit: 'Create',
          }
    )
  );

  constructor(
    private readonly store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.params$.subscribe(({ type, id }) => {
      if (!['edit', 'new'].includes(type)) {
        this.router.navigate(['/portfolios']);
        return;
      }

      if (type === 'edit') {
        this.store.dispatch(getPortfolioAction({ id }));
      }
    });

    this.portfolio$.subscribe((portfolio) => {
      this.fgPortfolio.patchValue({ ...portfolio });
    });
  }

  submitPortfolio(): void {
    this.params$.subscribe(({ type }) => {
      if (type === 'edit') {
        return;
      }

      // create new
      this.store.dispatch(postPortfolioAction(this.fgPortfolio.value));
    });
  }
}

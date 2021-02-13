import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, mergeMap, take } from 'rxjs/operators';
import {
  deletePortfolioAction,
  getPortfolioAction,
  patchPortfolioAction,
  postPortfolioAction,
} from '../store/actions';
import { getPortfolio } from '../store/selectors';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  private readonly routeId$ = this.route.params.pipe<string>(map((p) => p.id));
  private readonly portfolio$ = this.routeId$.pipe(
    map((id) => parseInt(id, 10)),
    mergeMap((id) => this.store.select(getPortfolio, id)),
    take(2)
  );

  readonly fgPortfolio = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    job: new FormControl('', [Validators.maxLength(30)]),
    description: new FormControl('', [Validators.maxLength(125)]),
    katakana: new FormControl('', [Validators.maxLength(30)]),
    sexe: new FormControl(null),
    birthday: new FormControl(null),
    address: new FormControl('', [Validators.maxLength(100)]),
  });

  readonly params$ = this.routeId$.pipe(
    map((id) => ({ type: !!parseInt(id, 10) ? 'edit' : id, id })),
    take(1)
  );

  readonly wording$ = this.params$.pipe(
    map(({ type }) =>
      type === 'edit'
        ? {
            title: 'このポートフォリオをエディットする',
            delete: '削除',
            submit: 'エディット',
          }
        : {
            title: '新しいポートフォリオを作成する',
            submit: '作成する',
          }
    )
  );

  constructor(
    private readonly store: Store,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
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
      console.log(portfolio);
      this.fgPortfolio.patchValue({ ...portfolio });
    });
  }

  openDeleteDialog(): void {
    this.dialog
      .open(DeleteDialogComponent)
      .afterClosed()
      .subscribe((b) => {
        if (b) {
          this.store.dispatch(
            deletePortfolioAction({ id: this.fgPortfolio.value.id })
          );
        }
      });
  }

  submitPortfolio(): void {
    const payload = { portfolio: this.fgPortfolio.value };

    this.params$.subscribe(({ type }) => {
      type === 'edit'
        ? this.store.dispatch(patchPortfolioAction(payload))
        : this.store.dispatch(postPortfolioAction(payload));
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { postPortfolioAction } from '../store/actions';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  readonly fgPortfolio = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(private readonly store: Store) {}

  submitPortfolio(): void {
    this.store.dispatch(postPortfolioAction(this.fgPortfolio.value));
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoggedGuard } from './guard/check-logged.guard';
import { CheckNotLoggedGuard } from './guard/check-not-logged.guard';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [CheckNotLoggedGuard],
    component: LoginComponent,
  },
  {
    path: 'portfolios',
    canActivate: [CheckLoggedGuard],
    component: PortfoliosComponent,
  },
  {
    path: 'portfolio/new',
    canActivate: [CheckLoggedGuard],
    component: PortfolioComponent,
  },
  { path: '', redirectTo: '/portfolios', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

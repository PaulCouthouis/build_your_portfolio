import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { authAction } from '../store/actions';
import { getLoginError } from '../store/selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hidePassword = true;
  hasLoginError$ = this.store.pipe(select(getLoginError));

  fgLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  wording = {
    title: 'ログイン',
    loginError: '認証に失敗しました。',
    email: {
      label: 'メール',
      placeholder: 'name@example.com',
    },
    password: {
      label: 'パスワード',
    },
    confirm: 'ログイン',
  };

  constructor(private store: Store) {}

  tryConnexion(): void {
    this.store.dispatch(authAction(this.fgLogin.value));
  }

  switchHidePassword(): void {
    this.hidePassword = !this.hidePassword;
  }
}

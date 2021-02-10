import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authAction } from '../store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hidePassword = true;

  fgLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  wording = {
    title: 'Login',
    email: {
      label: 'Email',
      placeholder: 'name@example.com',
    },
    password: {
      label: 'Password',
    },
    confirm: 'Connexion',
  };

  constructor(private store: Store) {}

  tryConnexion(): void {
    this.store.dispatch(authAction(this.fgLogin.value));
  }

  switchHidePassword(): void {
    this.hidePassword = !this.hidePassword;
  }
}

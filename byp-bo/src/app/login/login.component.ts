import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  tryConnexion(): void {
    //
  }

  switchHidePassword(): void {
    this.hidePassword = !this.hidePassword;
  }
}

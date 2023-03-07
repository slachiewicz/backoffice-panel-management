import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../../../libs/shared/src/lib/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [''],
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(private readonly authService: AuthService) {
    this.loginForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login(): void {
    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
  }

  signInWithGoogle(): void {
    this.authService.signInWithGoogle();
  }

  signInWithFacebook(): void {
    this.authService.signInWithFacebook();
  }
}

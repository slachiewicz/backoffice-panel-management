import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../../../libs/shared/src/lib/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      .login-form {
        max-width: 300px;
      }

      .login-form-margin {
        margin-bottom: 16px;
      }

      .login-form-forgot {
        float: right;
      }

      .login-form-button {
        width: 100%;
      }
    `,
  ],
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(private readonly authService: AuthService) {
    this.loginForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
      remember: new FormControl(false),
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

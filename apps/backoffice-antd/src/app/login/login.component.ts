import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable, take} from 'rxjs';
import {AuthService} from 'shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.loginForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
      remember: new FormControl(false),
    });
  }

  public login() {
    this.subscribeAndNavigate(
      this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      )
    );
  }

  public signInWithGoogle() {
    this.subscribeAndNavigate(this.authService.signInWithGoogle());
  }

  public signInWithFacebook() {
    this.subscribeAndNavigate(this.authService.signInWithFacebook());
  }

  private subscribeAndNavigate(observable: Observable<unknown>) {
    observable
      .pipe(take(1))
      .subscribe(() => this.router.navigateByUrl('/dashboard'));
  }
}

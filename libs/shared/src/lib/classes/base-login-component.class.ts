import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable, take} from 'rxjs';
import {AuthService} from '../services';

export class BaseLoginComponent {
  public loginForm: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      remember: new FormControl(false),
    });
  }

  public handleLogIn() {
    this.subscribeAndNavigate(
      this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      )
    );
  }

  public handleSignInWithGoogle() {
    this.subscribeAndNavigate(this.authService.signInWithGoogle());
  }

  public handleSignInWithFacebook() {
    this.subscribeAndNavigate(this.authService.signInWithFacebook());
  }

  private subscribeAndNavigate(observable: Observable<unknown>) {
    observable
      .pipe(take(1))
      .subscribe(() => this.router.navigateByUrl('/dashboard'));
  }
}

import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from 'shared';
import {User} from '@angular/fire/auth';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  public user$: Observable<User | null>;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.user$ = this.authService.user$;
  }

  public handleLogout() {
    this.authService
      .logout()
      .subscribe(() => this.router.navigateByUrl('/login'));
  }
}

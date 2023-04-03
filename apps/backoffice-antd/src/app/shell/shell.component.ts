import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'libs/shared/src/lib/services/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  public handleLogout() {
    this.authService
      .logout()
      .subscribe(() => this.router.navigateByUrl('/login'));
  }
}

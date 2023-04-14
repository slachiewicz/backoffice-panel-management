import {Component} from '@angular/core';
import {AuthService} from '../../../../../libs/shared/src/lib/services/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  constructor(private readonly authService: AuthService) {}

  public logout(): void {
    this.authService.logout();
  }
}

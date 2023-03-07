import {Component} from '@angular/core';
import {AuthService} from '../../../../../libs/shared/src/lib/services/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
      }
    `,
  ],
})
export class ShellComponent {
  constructor(private readonly authService: AuthService) {}

  public logout(): void {
    this.authService.logout();
  }
}

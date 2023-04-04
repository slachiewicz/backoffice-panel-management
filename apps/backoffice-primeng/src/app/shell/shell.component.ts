import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AuthService} from 'shared';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  public menu: MenuItem[];

  constructor(private readonly authService: AuthService) {
    this.menu = [
      {
        label: 'Dashboard',
        routerLink: '/dashboard',
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'Team',
        icon: 'pi pi-fw pi-building',
      },
      {
        label: 'Offers',
        icon: 'pi pi-fw pi-briefcase',
      },
      {
        label: 'Partners',
        icon: 'pi pi-fw pi-verified',
      },
      {
        label: 'Finances',
        icon: 'pi pi-fw pi-money-bill',
      },
      {
        label: 'Clients',
        routerLink: '/clients',
        icon: 'pi pi-fw pi-users',
      },
      {
        label: 'Log Out',
        icon: 'pi pi-fw pi-sign-out',
      },
    ];
  }

  public logout(): void {
    this.authService.logout();
  }
}

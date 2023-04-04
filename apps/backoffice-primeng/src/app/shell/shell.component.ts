import {Component} from '@angular/core';
import {User} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import {Observable} from 'rxjs';
import {AuthService} from 'shared';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  public menu: MenuItem[];
  public user$: Observable<User | null>;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.user$ = this.authService.user$;
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
        command: () => this.handleLogout(),
      },
    ];
  }

  public handleLogout() {
    this.authService
      .logout()
      .subscribe(() => this.router.navigateByUrl('/login'));
  }
}

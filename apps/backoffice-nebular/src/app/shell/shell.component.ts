import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NbMenuItem, NbMenuService} from '@nebular/theme';
import {AuthService} from 'shared';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  public items: NbMenuItem[];
  constructor(
    private readonly menuService: NbMenuService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.items = [
      {
        title: 'Dashboard',
        link: '/dashboard',
        icon: 'home-outline',
      },
      {
        title: 'Team',
        link: '/dashboard',
        icon: 'people-outline',
      },
      {
        title: 'Offers',
        link: '/dashboard',
        icon: 'percent-outline',
      },
      {
        title: 'Partners',
        link: '/dashboard',
        icon: 'headphones-outline',
      },
      {
        title: 'Finances',
        link: '/dashboard',
        icon: 'credit-card-outline',
      },
      {
        title: 'Clients',
        link: '/clients',
        icon: 'person-outline',
      },
      {
        title: 'Log Out',
        icon: 'log-out-outline',
      },
    ];

    this.menuService.onItemClick().subscribe((menuBag) => {
      console.log(menuBag);
      if (menuBag.item.title === 'Log Out')
        this.authService
          .logout()
          .subscribe(() => this.router.navigateByUrl('/login'));
    });
  }
}

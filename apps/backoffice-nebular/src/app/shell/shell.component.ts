import {Component} from '@angular/core';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  public items: NbMenuItem[];
  constructor() {
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
        icon: 'credit-card-outline'
      },
      {
        title: 'Clients',
        link: '/clients',
        icon: 'person-outline',
      },
      {
        title: 'Log out',
        link: '/dashboard',
        icon: 'log-out-outline',
      },
    ]
  }
}

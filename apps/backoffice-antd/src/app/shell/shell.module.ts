import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {ShellComponent} from './shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('../clients/clients.module').then((m) => m.ClientsModule),
      },
    ],
  },
];

@NgModule({
  declarations: [ShellComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule,
  ],
})
export class ShellModule {}

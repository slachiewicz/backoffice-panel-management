import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {
  NbFormFieldModule,
  NbIconModule, NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbUserModule
} from '@nebular/theme';
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
    NbLayoutModule,
    NbSidebarModule,
    NbIconModule,
    NbEvaIconsModule,
    NbInputModule,
    NbFormFieldModule,
    NbUserModule,
    NbMenuModule,
  ],
})
export class ShellModule {}

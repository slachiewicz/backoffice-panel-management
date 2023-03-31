import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClientsComponent} from './clients/clients.component';
import {ShellComponent} from './shell/shell.component';
import {DashboardComponent} from './dashboard/dashboard.component';

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
        component: DashboardComponent,
      },
      {
        path: 'clients',
        component: ClientsComponent,
      },
    ],
  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

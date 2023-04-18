import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {NbCardModule, NbListModule, NbTagModule} from '@nebular/theme';
import {DashboardComponent} from './dashboard.component';
import {TrendGraphComponent} from 'shared';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(routes),
    TrendGraphComponent,
    NbCardModule,
    NbListModule,
    NbTagModule,
  ],
})
export class DashboardModule {}

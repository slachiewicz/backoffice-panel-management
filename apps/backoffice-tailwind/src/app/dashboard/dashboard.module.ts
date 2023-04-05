import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {IconsProviderModule} from '../icons-provider.module';
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
    IconsProviderModule,
    TrendGraphComponent,
  ],
})
export class DashboardModule {}

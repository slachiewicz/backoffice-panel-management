import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router, RouterModule, Routes} from '@angular/router';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzTagModule} from 'ng-zorro-antd/tag';
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
    CommonModule,
    FormsModule,
    NzFormModule,
    NzButtonModule,
    NzDividerModule,
    NzCardModule,
    NzInputModule,
    NzTagModule,
    NzCheckboxModule,
    TrendGraphComponent,
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule {}

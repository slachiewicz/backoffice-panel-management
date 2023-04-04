import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzTableModule} from 'ng-zorro-antd/table';
import {ClientsComponent} from './clients.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
  },
];

@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzModalModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ClientsModule {}

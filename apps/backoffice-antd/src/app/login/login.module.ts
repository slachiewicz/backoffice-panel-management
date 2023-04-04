import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzFormModule} from 'ng-zorro-antd/form';
import {LoginComponent} from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class LoginModule {}

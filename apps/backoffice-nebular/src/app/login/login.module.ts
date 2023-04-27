import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule
} from '@nebular/theme';
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
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NbIconModule,
    NbEvaIconsModule,
    NbLayoutModule,
    NbCheckboxModule,
    NbButtonModule,
    NbInputModule,
  ],
})
export class LoginModule {}

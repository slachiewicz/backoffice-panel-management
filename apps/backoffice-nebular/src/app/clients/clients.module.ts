import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbDateService, NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule
} from '@nebular/theme';
import {AddTicketDialogComponent} from './add-ticket-dialog/add-ticket-dialog.component';
import {ClientsComponent} from './clients.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
  },
];

@NgModule({
  declarations: [ClientsComponent, AddTicketDialogComponent],
  imports: [
    RouterModule.forChild(routes),
    NbDialogModule.forChild(),
    CommonModule,
    ReactiveFormsModule,
    NbFormFieldModule,
    NbInputModule,
    NbIconModule,
    NbEvaIconsModule,
    NbCardModule,
    NbButtonModule,
    NbDatepickerModule,
  ],
})
export class ClientsModule {}

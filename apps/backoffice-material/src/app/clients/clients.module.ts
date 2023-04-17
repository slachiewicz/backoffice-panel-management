import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {RouterModule, Routes} from '@angular/router';
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
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class ClientsModule {}

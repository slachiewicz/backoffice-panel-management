import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NbDialogRef} from '@nebular/theme';
import {TicketsService} from 'shared';

@Component({
  selector: 'app-add-ticket-dialog',
  templateUrl: './add-ticket-dialog.component.html',
})
export class AddTicketDialogComponent {
  public addTicketForm: FormGroup;
  constructor(private readonly dialogRef: NbDialogRef<unknown>) {
    this.addTicketForm = new FormGroup<any>({
      details: new FormControl(''),
      customerName: new FormControl(''),
      date: new FormControl(new Date()),
      priority: new FormControl(''),
    });
  }

  public handleAddTicket(): void {
    this.dialogRef.close(this.addTicketForm.value);
  }
}

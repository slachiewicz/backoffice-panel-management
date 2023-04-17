import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-ticket-dialog',
  templateUrl: './add-ticket-dialog.component.html',
})
export class AddTicketDialogComponent {
  public addTicketForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddTicketDialogComponent>) {
    this.addTicketForm = new FormGroup<any>({
      details: new FormControl(''),
      customerName: new FormControl(''),
      date: new FormControl(new Date()),
      priority: new FormControl(''),
    });
  }

  handleAddClick(): void {
    this.dialogRef.close(this.addTicketForm.value);
  }
}

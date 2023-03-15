import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { TicketsService } from "../../../../../libs/shared/src/lib/services/tickets.service";

@Component({
  selector: 'app-add-ticket-dialog',
  templateUrl: './add-ticket-dialog.component.html',
  styles: [],
})
export class AddTicketDialogComponent {
  public addTicketForm: FormGroup;
  constructor(private readonly ticketsService: TicketsService) {
    this.addTicketForm = new FormGroup<any>({
      details: new FormControl(''),
      customerName: new FormControl(''),
      date: new FormControl(new Date()),
      priority: new FormControl(''),
    });
  }

  public addTicket(): void {
    this.ticketsService.addTicket(this.addTicketForm.value).subscribe(() => {});
  }
}

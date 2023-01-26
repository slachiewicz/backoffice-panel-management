import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TicketsService} from '../../../../../libs/shared/src/lib/services/tickets.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styles: [''],
})
export class ClientsComponent {
  public tickets$: any;
  public displayDialog: boolean = false;
  public addTicketForm: FormGroup;

  constructor(private readonly ticketsService: TicketsService) {
    this.tickets$ = this.ticketsService.getTickets();
    this.addTicketForm = new FormGroup<any>({
      details: new FormControl(''),
      customerName: new FormControl(''),
      date: new FormControl(new Date()),
      priority: new FormControl(''),
    });
  }

  public addTicket(): void {
    this.ticketsService.addTicket(this.addTicketForm.value).subscribe(() => {
      this.displayDialog = false;
    });
  }

  public openAddDialog(): void {
    this.displayDialog = true;
  }
}

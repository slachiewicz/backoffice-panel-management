import {Component} from '@angular/core';
import {TicketsService} from '../services/tickets.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styles: [''],
})
export class ClientsComponent {
  public tickets$: any;

  constructor(private readonly ticketsService: TicketsService) {
    this.tickets$ = this.ticketsService.getTickets();
  }
}

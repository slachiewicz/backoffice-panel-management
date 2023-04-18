import {Component} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {TicketsService} from '../../../../../libs/shared/src/lib/services/tickets.service';
import {AddTicketDialogComponent} from './add-ticket-dialog/add-ticket-dialog.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent {
  public tickets$: any;

  constructor(
    private readonly ticketsService: TicketsService,
    private readonly dialogService: NbDialogService
  ) {
    this.tickets$ = this.ticketsService.getTickets();
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + nextColumnStep * index;
  }

  public openAddDialog(): void {
    this.dialogService.open(AddTicketDialogComponent);
  }
}

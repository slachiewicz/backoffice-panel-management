import {Component} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {switchMap} from 'rxjs';
import {Ticket} from 'shared';
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

  public handleOpenAddDialog(): void {
    const dialogRef = this.dialogService.open(AddTicketDialogComponent);
    dialogRef.onClose
      .pipe(
        switchMap((result: Ticket) => this.ticketsService.addTicket(result))
      )
      .subscribe(() => {});
  }
}

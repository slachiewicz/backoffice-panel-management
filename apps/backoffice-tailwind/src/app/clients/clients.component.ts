import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Dialog} from '@angular/cdk/dialog';
import {filter, switchMap} from 'rxjs';
import {Ticket} from 'shared';
import {TicketsService} from '../../../../../libs/shared/src/lib/services/tickets.service';
import {AddTicketDialogComponent} from './add-ticket-dialog/add-ticket-dialog.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent {
  public tickets$: any;
  public displayDialog: boolean = false;

  constructor(
    private readonly ticketsService: TicketsService,
    private readonly dialog: Dialog
  ) {
    this.tickets$ = this.ticketsService.getTickets();
  }

  public handleCancel() {
    this.displayDialog = false;
  }

  public handleOpenDialog() {
    const dialogRef = this.dialog.open(AddTicketDialogComponent, {
      panelClass:
        'relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'.split(
          ' '
        ),
    });

    dialogRef.closed
      .pipe(
        filter((result) => !!result),
        switchMap((result) => this.ticketsService.addTicket(result as Ticket))
      )
      .subscribe(() => {});
  }
}

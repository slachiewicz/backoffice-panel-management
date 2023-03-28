import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TicketsService} from '../../../../../libs/shared/src/lib/services/tickets.service';
import {AddTicketDialogComponent} from './add-ticket-dialog/add-ticket-dialog.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  public tickets$: any;
  public displayedColumns = ['details', 'customerName', 'date', 'priority'];

  constructor(
    private readonly ticketsService: TicketsService,
    private dialog: MatDialog
  ) {
    this.tickets$ = this.ticketsService.getTickets();
  }

  public addTicket(ticket: any): void {
    this.ticketsService.addTicket(ticket).subscribe(() => {});
  }

  public openAddDialog(): void {
    const dialogRef = this.dialog.open(AddTicketDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.addTicket(result);
    });
  }
}

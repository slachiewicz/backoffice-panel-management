import {Component} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {TicketsService} from '../../../../../libs/shared/src/lib/services/tickets.service';
import {AddTicketDialogComponent} from '../add-ticket-dialog/add-ticket-dialog.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styles: [`
    table {
      border-collapse: collapse;
    }

    table, thead, tbody, tr {
      width: 100%;
    }

    tr {
      border-bottom-color: rgba(0, 0, 0, 0.58);
      border-bottom-width: 1px;
      border-bottom-style: solid;
    }

    th, td {
      padding: 1rem;
    }
  `],
})
export class ClientsComponent {
  public tickets$: any;

  constructor(private readonly ticketsService: TicketsService, private readonly dialogService: NbDialogService) {
    this.tickets$ = this.ticketsService.getTickets();
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

  public openAddDialog(): void {
    this.dialogService.open(AddTicketDialogComponent, {
      context: {
        // title: 'This is a title passed to the dialog component',
      },
    });
  }
}

import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Ticket} from '../models/ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  constructor(private db: Firestore) {}

  public getTickets(): Observable<Ticket[]> {
    return collectionData(collection(this.db, 'tickets')).pipe(
      map(
        (tickets) =>
          tickets.map((ticket) => ({
            ...ticket,
            date: ticket['date'].toDate().toDateString(),
          })) as Ticket[]
      )
    );
  }

  public addTicket(ticket: Ticket): Observable<unknown> {
    return from(addDoc(collection(this.db, 'tickets'), ticket));
  }
}

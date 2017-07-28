import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable()
export class TicketService {

  private tickets = new Array<Ticket>();

  constructor() {
    this.tickets.push(new Ticket(1, 'ticket 1', 'ca marche !', new Date(), 'admin'));
    this.tickets.push(new Ticket(1, 'ticket 1', 'ca marche !', new Date(), 'admin'));
    this.tickets.push(new Ticket(1, 'ticket 1', 'ca marche !', new Date(), 'admin'));
    this.tickets.push(new Ticket(1, 'ticket 1', 'ca marche !', new Date(), 'admin'));
    this.tickets.push(new Ticket(1, 'ticket 1', 'ca marche !', new Date(), 'admin'));
  }

  public getTickets(): Promise<Array<Ticket>> {
    return Promise.resolve(this.tickets);
  }

  public setTicket(ticket: Ticket) {
    this.tickets.push(ticket);
  }
}

import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable()
export class TicketService {

  private tickets = new Array<Ticket>();

  constructor() {}

  public getTickets(): Promise<Array<Ticket>> {
    return Promise.resolve(this.tickets);
  }

  public setTicket(ticket: Ticket) {
    this.tickets.push(ticket);
  }

  public deleteTicket(ticket: Ticket) {
    const index = this.tickets.indexOf(ticket, 0);
    if (index > -1) {
      this.tickets.splice(index, 1);
    }
  }
}

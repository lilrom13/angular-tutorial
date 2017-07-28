import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable()
export class TicketService {

  private tickets = new Array<Ticket>();

  constructor() {}

  public getTickets(): Promise<Array<Ticket>> {
    return Promise.resolve(this.tickets);
  }

  public getTicket(id: number): Ticket {
    return this.findTicket(id);
  }

  public setTicket(ticket: Ticket) {
    ticket.id = this.tickets.length + 1;
    this.tickets.push(ticket);
  }

  public deleteTicket(ticket: Ticket) {
    const index = this.tickets.indexOf(ticket, 0);
    if (index > -1) {
      this.tickets.splice(index, 1);
    }
  }

  public updateTicket(ticket: Ticket) {
    const tmpTicket = this.findTicket(ticket.id);

    if (tmpTicket) {
      const index = this.tickets.indexOf(tmpTicket);

      if (index > -1) {
        this.tickets[index] = ticket;
      }
    }
  }

  private findTicket(ticketId: number): Ticket {
    for (const ticket of this.tickets) {
      if (ticket.id == ticketId) {
        return ticket;
      }
    }
    return null;
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { TicketService } from '../../../services/ticket.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {

  tickets: Array<Ticket>;

  constructor(private ticketService: TicketService, private alertService: AlertService) {
    this.tickets = new Array<Ticket>();
  }

  ngOnInit() {
    this.getTickets();
  }

  private getTickets() {
    this.ticketService.getTickets().then(
      tickets => {
        this.tickets = tickets;

        if (this.tickets.length === 0) {
          this.alertService.warning('Any ticket to show');
        }
      }
    );
  }
}

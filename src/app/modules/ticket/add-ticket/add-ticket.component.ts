import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { TicketService } from '../../../services/ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  ticketModel: Ticket;

  constructor(private ticketService: TicketService) {
    this.ticketModel = Ticket.GetNewInstance();
  }

  ngOnInit() {
  }

  newTicket() {
    this.ticketModel = Ticket.GetNewInstance();
  }

  onSubmit() {
    this.ticketModel.postTime = new Date();

    this.ticketService.setTicket(this.ticketModel);
  }
}

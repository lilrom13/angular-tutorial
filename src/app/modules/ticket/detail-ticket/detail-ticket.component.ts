import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { TicketService } from '../../../services/ticket.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-detail-ticket',
  templateUrl: './detail-ticket.component.html',
  styleUrls: ['./detail-ticket.component.css']
})
export class DetailTicketComponent implements OnInit {

  @Input() ticket: Ticket;

  @ViewChild('deleteTicketModal') deleteTicketModal;

  opened = false;

  constructor(private ticketService: TicketService, private alertService: AlertService) { }

  ngOnInit() {}

  deleteTicket() {
    this.deleteTicketModal.open();
  }

  deleteTicketConfirmation() {
    this.ticketService.deleteTicket(this.ticket);
    this.deleteTicketModal.close();
    this.alertService.success('Your ticket has been deleted.');
  }
}

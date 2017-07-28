import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { TicketService } from '../../../services/ticket.service';
import { AlertService } from '../../../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-ticket',
  templateUrl: './detail-ticket.component.html',
  styleUrls: ['./detail-ticket.component.css']
})
export class DetailTicketComponent implements OnInit {

  @Input() ticket: Ticket;

  @ViewChild('deleteTicketModal') deleteTicketModal;

  opened = false;

  constructor(private ticketService: TicketService, private alertService: AlertService, private router: Router) { }

  ngOnInit() {}

  deleteTicket() {
    this.deleteTicketModal.open();
  }

  deleteTicketConfirmation() {
    this.ticketService.deleteTicket(this.ticket);
    this.deleteTicketModal.close();
    this.alertService.success('Your ticket has been deleted.');
  }

  redirect() {
    this.router.navigate(['ticket', {edition: true, id: this.ticket.id}]);
  }
}

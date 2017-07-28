import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { TicketService } from '../../../services/ticket.service';
import { AlertService } from '../../../services/alert.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  ticketModel: Ticket;

  editionMode: boolean;

  ticketId: number;

  constructor(private ticketService: TicketService,
              private alertService: AlertService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.ticketModel = Ticket.GetNewInstance();
    this.editionMode = false;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.editionMode = params['edition'];
      this.ticketId = params['id'];

      if (this.editionMode) {
        const tmpTicketModel = this.ticketService.getTicket(this.ticketId);

        if (tmpTicketModel) {
          this.ticketModel = this.ticketService.getTicket(this.ticketId);
        } else {
          this.alertService.error('No ticket found.', true);
          this.router.navigate(['tickets']);
        }
      }
    });
  }

  newTicket() {
    this.ticketModel = Ticket.GetNewInstance();
  }

  onSubmit() {

    if (this.editionMode) {
      this.onEdit();
    } else {
      this.ticketModel.postTime = new Date();
      this.ticketService.setTicket(this.ticketModel);
    }

    this.alertService.success('Your ticket has been added', true);
    this.router.navigate(['tickets'])
  }

  onEdit() {
    this.ticketService.updateTicket(this.ticketModel);
  }
}

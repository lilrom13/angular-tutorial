import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-detail-ticket',
  templateUrl: './detail-ticket.component.html',
  styleUrls: ['./detail-ticket.component.css']
})
export class DetailTicketComponent implements OnInit {

  @Input() ticket: Ticket;

  constructor() { }

  ngOnInit() {}
}

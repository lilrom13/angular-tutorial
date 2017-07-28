import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { DetailTicketComponent } from './detail-ticket/detail-ticket.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';

@NgModule({
  imports: [
    CommonModule,
    TicketRoutingModule
  ],
  declarations: [AddTicketComponent, DetailTicketComponent, ListTicketComponent]
})
export class TicketModule { }

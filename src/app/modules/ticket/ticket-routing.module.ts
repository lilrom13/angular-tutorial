import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { DetailTicketComponent } from './detail-ticket/detail-ticket.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';

const routes: Routes = [
  { path: 'tickets', component: ListTicketComponent },
  { path: 'tickets/:id', component: DetailTicketComponent },
  { path: 'ticket', component: AddTicketComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }

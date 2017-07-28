import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app.routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TicketModule } from './modules/ticket/ticket.module';
import { TicketService } from './services/ticket.service';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './services/alert.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AlertComponent,
    HomeComponent
  ],
  imports: [
    TicketModule,
    AppRoutingModule,
    BrowserModule,
    ClarityModule.forRoot(),
  ],
  providers: [
    TicketService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

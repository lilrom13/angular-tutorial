import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/appRoutingModule';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TicketModule } from './modules/ticket/ticket.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    TicketModule,
    AppRoutingModule,
    BrowserModule,
    ClarityModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

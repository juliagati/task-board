import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicktListComponent } from './components/tickt-list/tickt-list.component';
import { TicketItemComponent } from './components/ticket-item/ticket-item.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { PopupComponent } from './components/popup/popup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TicktListComponent,
    TicketItemComponent,
    PageContainerComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule, MatInputModule  } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TablesComponent } from './tables/tables.component';
import {MatIconModule} from '@angular/material/icon';
import { QuickCardEditorButtonsComponent } from './quick-card-editor-buttons/quick-card-editor-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketDetailComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    TicketsListComponent,
    TablesComponent,
    QuickCardEditorButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TicketDetailComponent]
})
export class AppModule { }

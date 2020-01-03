import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(TicketDetailComponent);
  }
  
}

import { TicketDetailComponent } from './../ticket-detail/ticket-detail.component';
import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent implements OnInit {
  ticketName = "";
  tickets = [];
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  onKeyUp() {
    if (this.ticketName.length > 0)
      this.tickets.push(this.ticketName)
      this.ticketName = "";
  }

  open(ticket) {
    const modalRef = this.modalService.open(TicketDetailComponent);
    modalRef.componentInstance.name = ticket;
  }

}

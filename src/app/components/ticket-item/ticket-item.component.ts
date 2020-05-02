import { Ticket } from "./../../app.models";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "ticket-item",
  templateUrl: "./ticket-item.component.html",
  styleUrls: ["./ticket-item.component.css"]
})
export class TicketItemComponent implements OnInit {
  @Input() ticketC: Ticket;
  @Output() deleteClicked: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor() {}

  ngOnInit(): void {}

  deleteItem() {
    this.deleteClicked.emit(this.ticketC);
  }
}

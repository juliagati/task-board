import { Ticket } from "src/app/app.models";
import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.css"]
})
export class PopupComponent {
  @Input() name;
  title: string;
  body: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  closeModal() {
    this.activeModal.dismiss();
  }

  sendData() {
    let ticket: Ticket = {
      title: this.title,
      body: this.body,
      id: Date.now().toString()
    };

    this.activeModal.close(ticket);
  }
}

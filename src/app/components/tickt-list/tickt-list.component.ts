import { Ticket } from './../../app.models';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tickt-list',
  templateUrl: './tickt-list.component.html',
  styleUrls: ['./tickt-list.component.css']
})
export class TicktListComponent implements OnInit {
  @Input() ticketArry :Ticket[] ;
  @Output() deleteClicked: EventEmitter<Ticket>= new EventEmitter<Ticket>();
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteListenClicked($event){
       this.deleteClicked.emit($event);
       
  }

}

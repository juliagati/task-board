import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from '../popup/popup.component';
import { Ticket } from 'src/app/app.models';
import { LocalStorageKey } from 'src/app/enum';

@Component({
  selector: 'page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent implements OnInit {

  constructor(private modalService: NgbModal , private localStorageService : LocalStorageService) { }
  
  tickets: Ticket[]= [ ];

  ngOnInit(): void {
    this.loadArray();
  }

  loadArray(){
    let strArray = this.localStorageService.loadLocalStorage(LocalStorageKey.ticketKey);
    if(!strArray){
      this.tickets= [];
      return;
    }
    this.tickets = JSON.parse(strArray);
  }

  open() {
    const modalRef = this.modalService.open(PopupComponent).result;
  
    modalRef.then((ticket)=>{
      
     //ticket.id = Date.now();

      this.tickets.push(ticket);
      this.saveToLocalStorage();
    } ).catch((errMsg)=>{
      alert(errMsg);
    })
   
  }

  deleteItem($event){

    let index: number = this.tickets.findIndex(( ticket )=> $event.id === ticket.id);
     
    this.tickets.splice( index , 1);
    this.saveToLocalStorage();

  }

  saveToLocalStorage(){
    let strArray :string = JSON.stringify(this.tickets);
    this.localStorageService.saveToLocalStorage(LocalStorageKey.ticketKey ,strArray );
  }

}

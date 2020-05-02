import { Injectable } from '@angular/core';
import { LocalStorageKey } from '../enum';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


saveToLocalStorage(  key:LocalStorageKey , value : string  ){
   localStorage.setItem(key , value);
}

loadLocalStorage(key : LocalStorageKey){
   return localStorage.getItem(key);
}






}

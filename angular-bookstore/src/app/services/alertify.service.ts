import { Injectable } from '@angular/core';

declare let alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }



  success(message){
    alertify.success(message);
  }

  error(message){
    alertify.error(message);
  }
  
}

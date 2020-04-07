import { Injectable } from '@angular/core';
declare let alertifyjs:any;


@Injectable()
export class AlertifyjsService {

  constructor() { }



  success(message:string){
    alertifyjs.succes();
  }

  error(message:string){
    alertifyjs.error();
  }

  warning(message:string){
    alertifyjs.warning();
  }




}

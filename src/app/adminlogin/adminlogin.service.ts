import { Injectable } from '@angular/core';
import { addNewAdminLoginDto } from './adminlogin.component';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor() { }

  addAdminLogin(data: addNewAdminLoginDto){
    console.log(data);
  }

}

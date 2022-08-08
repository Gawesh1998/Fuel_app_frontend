import { Injectable } from '@angular/core';
import { addNewLoginDto } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  addLogin(data: addNewLoginDto) {
    console.log(data);
  }

  

}

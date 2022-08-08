import { Injectable } from '@angular/core';
import { addNewRegisterDto } from './register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  addRegister(data: addNewRegisterDto){
    console.log(data);
  }
}





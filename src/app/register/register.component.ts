import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any;

  constructor(private fb: FormBuilder, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fillingStationName: ['', Validators.required],
      licenseNo: ['', Validators.required],
      vehicleRegNo: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get fillingStationName(): any{
    return this.registerForm.get('fillingStationName');
  }
  get licenseNo(): any{
    return this.registerForm.get('licenseNo');
  }
  get vehicleRegNo(): any{
    return this.registerForm.get('vehicleRegNo');
  }
  get password(): any{
    return this.registerForm.get('password');
  }

  onSubmit(): any {
    console.log(this.registerForm.value);  
  }

}

export class addNewRegisterDto{
  public constructor(
    public fillingStationName: string,
    public licenseNo: string,
    public vehicleRegNo: string,
    public password: string
  ){}
  
}

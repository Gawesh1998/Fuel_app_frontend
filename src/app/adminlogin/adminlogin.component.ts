import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminloginService } from './adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  registerForm: FormGroup | any;
  adminloginForm: any;

  constructor(private fb: FormBuilder, private adminloginService: AdminloginService) { }

  ngOnInit(): void {
    this.adminloginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get username(): any{
    return this.adminloginForm.get('username');
  }
  get password(): any{
    return this.adminloginForm.get('password');
  }

  onSubmit(): any {
    console.log(this.adminloginForm.value);  
  }

}

export class addNewAdminLoginDto{
  public constructor(
    public usernameame: string,
    public password: string
  ){}
  
}

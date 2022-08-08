import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup | any;
  loginForm: any;

  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      licenseNo: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get licenseNo(): any{
    return this.loginForm.get('licenseNo');
  }

  get password(): any{
    return this.loginForm.get('password');
  }

  onSubmit(): any {
    console.log(this.loginForm.value);  
  }

  //  goRegister() {
  //   this.router.navigate(['/register']);
  // }
}

export class addNewLoginDto{
  public constructor(
    public licenseNo: string,
    public password: string
  ){}
  
}

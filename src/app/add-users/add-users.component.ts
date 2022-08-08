import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { IMyDpOptions } from 'mydatepicker';
import { AddUsersService } from './add-users.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  addUserForm: FormGroup | any
  // public myDatePickerOptions: IMyDpOptions = {
  //   // other options...
  //   dateFormat: 'dd.mm.yyyy',
  // }

  constructor(private router: Router, private fb: FormBuilder, private addUserService: AddUsersService) { }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      date: [null, Validators.required],
      name: ['', Validators.required],
      license: ['', Validators.required],
      vehicle: ['', Validators.required],
      shedualeDate: [null, Validators.required],
    });
  }

  setDate(): void {
    // Set today date using the patchValue function
    let date = new Date();
    this.addUserForm.patchValue({
      myDate1: {
        date: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        }
      }
    });
  }

  clearDate(): void {
    // Clear the date using the patchValue function
    this.addUserForm.patchValue({ myDate1: null });
  }

  get date(): any {
    return this.addUserForm.get('date');
  }
  get name(): any {
    return this.addUserForm.get('name');
  }
  get license(): any {
    return this.addUserForm.get('license');
  }
  get vehicle(): any {
    return this.addUserForm.get('vehicle');
  }
  get shedualeDate(): any {
    return this.addUserForm.get('shedualeDate');
  }

  onSubmit(): any {
    console.log(this.addUserForm.value);
    this.addUserService.create(this.addUserForm.value)
      .subscribe(res => {
        alert("Sheduale is successfully")
        console.log(res);
      }, error => {
        console.log(error);
      })
  }
}

export class addNewUsers {
  public constructor(
    public date: Date,
    public name: string,
    public license: string,
    public vehicle: string,
    public shedualeDate: string
  ) { }
}

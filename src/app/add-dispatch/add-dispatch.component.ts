import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { IMyDpOptions } from 'mydatepicker';
import { AddDispatchService } from './add-dispatch.service';

@Component({
  selector: 'app-add-dispatch',
  templateUrl: './add-dispatch.component.html',
  styleUrls: ['./add-dispatch.component.css']
})
export class AddDispatchComponent implements OnInit {

  dispatchForm : FormGroup | any
//   public myDatePickerOptions: IMyDpOptions = {
//     // other options...
//     dateFormat: 'dd.mm.yyyy',
// };


  constructor(private router: Router, private fb: FormBuilder, private addDispatchService: AddDispatchService) { }

  ngOnInit(): void {
    this.dispatchForm = this.fb.group({
      date: [null, Validators.required],
      name: ['', Validators.required],
      license: ['', Validators.required],
      vehicle: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  setDate(): void {
    // Set today date using the patchValue function
    let date = new Date();
    this.dispatchForm.patchValue({myDate: {
    date: {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()}
    }});
  }

  clearDate(): void {
    // Clear the date using the patchValue function
    this.dispatchForm.patchValue({myDate: null});
  }

  get date(): any{
    return this.dispatchForm.get('date');
  }
  get name(): any{
    return this.dispatchForm.get('name');
  }
  get license(): any{
    return this.dispatchForm.get('license');
  }
  get vehicle(): any{
    return this.dispatchForm.get('vehicle');
  }
  get status(): any{
    return this.dispatchForm.get('status');
  }

  onSubmit() : any{
    console.log(this.dispatchForm.value);
    this.addDispatchService.create(this.dispatchForm.value)
    .subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    })
  }
}

export class addNewDispatch{
  public constructor(
    public date: Date,
    public name: string,
    public license: string,
    public vehicle: string,
    public status: string
  ){}
}
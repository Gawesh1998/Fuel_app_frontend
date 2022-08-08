import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from './order.service';
// import { FuelReservesService } from '../inventry-service/clases/fuel-reserves.service';
// import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  registerForm: FormGroup | any;
  orderForm: any;

  constructor(private router: Router, private fb: FormBuilder, private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      license: ['', Validators.required],
      vehicle: ['', Validators.required],
      fuelType: ['', Validators.required],
      capacity: ['', Validators.required],
    });
  }

  get name(): any {
    return this.orderForm.get('name');
  }
  get license(): any {
    return this.orderForm.get('license');
  }
  get vehicle(): any {
    return this.orderForm.get('vehicle');
  }
  get fuelType(): any {
    return this.orderForm.get('fuelType');
  }
  get capacity(): any {
    return this.orderForm.get('capacity');
  }

  onSubmit(): any {
    console.log(this.orderForm.value);
    this.orderService.create(this.orderForm.value)
      .subscribe(res => {
        alert("Order is successfully and your order will be recive tomorrow!...")
        console.log(res);
      }, error => {
        console.log(error);
      })
  }

}

export class addNewOrderDto {
  public constructor(
    public name: string,
    public license: string,
    public vehicle: string,
    public fuelType: string,
    public capacity: string,
  ) { }

}

import { Component, OnInit } from '@angular/core';
import { OrderViewService } from './order-view.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  data: Array<{
    id: number,
    name: string,
    license: string,
    vehicle: string,
    fuelType: string,
    capacity: string,
  }> | any

  constructor(private orderViewService: OrderViewService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.orderViewService.getAll()
      .subscribe((res: any) => {
        console.log(res);
        this.data = res;
      }, (error: any) => {
        console.log(error);
      })
  }

}

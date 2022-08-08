import { Component, OnInit } from '@angular/core';
import { DispatchService } from './dispatch.service';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.css']
})
export class DispatchComponent implements OnInit {

  data: Array<{
    id: number,
    date: string,
    name: string,
    license: string,
    vehicle: string,
    status: string,
  }> | any

  constructor(private dispatchService: DispatchService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.dispatchService.getAll()
      .subscribe((res: any) => {
        console.log(res);
        this.data = res;
      }, (error: any) => {
        console.log(error);
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data: Array<{
    id: number,
    date: string,
    name: string,
    license: string,
    vehicle: string,
    shedualeDate: string,
  }> | any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.userService.getAll()
    .subscribe((res:any) => {
      console.log(res);
      this.data = res;
    }, (error : any) =>{
        console.log(error);
    })
    
  }

}

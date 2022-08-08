import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { addNewOrderDto } from './order.component';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any>{
    return this.http.post(environment.baseUrl + 'order/add', data);
  }
}

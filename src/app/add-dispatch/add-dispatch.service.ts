import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { addNewDispatch } from './add-dispatch.component';

@Injectable({
  providedIn: 'root'
})
export class AddDispatchService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(environment.baseUrl + 'dispatch/add', data);
  }
}

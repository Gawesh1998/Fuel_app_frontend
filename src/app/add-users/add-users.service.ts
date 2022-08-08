import { Injectable } from '@angular/core';
import { addNewUsers } from './add-users.component';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddUsersService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(environment.baseUrl + 'sheduale/add', data);
  }
}

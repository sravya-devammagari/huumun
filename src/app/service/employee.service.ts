import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = environment.apiUrl;


  constructor(public http: HttpClient) {
    
  }
  public getemployeeList(): Observable<any> {
    const uri = `${this.apiUrl}/v1/employees`;
    const params: HttpParams = new HttpParams();
    return this.http.get(uri, { params });
  }
}

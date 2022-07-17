import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  private apiUrl = "api/best";

  constructor(private http: HttpClient) { }


  get(): Observable<any> {
    const url = `${this.apiUrl}/get`;
    return this.http.get<any>(url);
  }
}

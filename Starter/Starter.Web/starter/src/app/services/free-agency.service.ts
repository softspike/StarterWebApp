import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FreeAgencyService {


  private apiUrl = 'api/FreeAgency';
  constructor(private http: HttpClient) { }

  get(id: number): Observable<any> {
    const url = `${this.apiUrl}/get?id=${id}`;
    return this.http.get<any>(url);
  }

  list(): Observable<any> {
    const url = `${this.apiUrl}/list`;
    return this.http.get<any>(url);
  }

  // upsert(request: any): Observable<any> {
  //   if (request.id) {
  //     return this.update(request);
  //   }

  //   return this.add(request);
  // }

  // // private add(request: any): Observable<any> {
  // //   const url = `${this.apiUrl}/add`;
  //   return this.http.post<any>(url, request);
  // }

  // private update(request: any): Observable<any> {
  //   const url = `${this.apiUrl}/update`;
  //   return this.http.post<any>(url, request);
  // }

  // getPod() {
  //   const url = `${this.apiUrl}/pod`;
  //   return this.http.get<ListItemColour[]>(url)
  //     .pipe(
  //       tap((data: ListItemColour[]) => {
  //         for (let i = 0; i < data.length; i++) {
  //           data[i].selected = true;
  //         }
  //       }));
  // }
    


  }


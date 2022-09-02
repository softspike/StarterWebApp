import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FreeAgencyModel, IdModel, InvitationRequest } from '../models/models.model';


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

  list(searchText: string): Observable<any> {
    const url = `${this.apiUrl}/list?searchText=${searchText}`;
    return this.http.get<any>(url);
  }

  submitUser(request: FreeAgencyModel): Observable<any> {
    const url = `${this.apiUrl}/submit-user`;
    return this.http.post<FreeAgencyModel>(url, request);
  }

  getOpenInvitations(playerId: string): Observable<any> {
    const url = `${this.apiUrl}/get-invitations?playerId=${playerId}`;
    return this.http.get<any>(url);
  }
  
  createnvitation(request: InvitationRequest): Observable<any> {
    const url = `${this.apiUrl}/create-invitation`;
    return this.http.post<InvitationRequest>(url, request);
  }

  acceptInvitation(request: IdModel): Observable<any> {
    const url = `${this.apiUrl}/accept-invitation`;
    return this.http.post<IdModel>(url, request);
  }

  rejectInvitation(request: IdModel): Observable<any> {
    const url = `${this.apiUrl}/reject-invitation`;
    return this.http.post<IdModel>(url, request);
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


    


  }


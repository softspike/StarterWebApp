import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = '/api/ApplicationUser/Register';

  constructor(private http: HttpClient) { }

registerUser(request: UserModel){
return this.http.post<any>(this.apiUrl, request)
}
}
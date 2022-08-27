import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

// loginUser(request: UserModel){
//   return this.http.post<any>(this.apiUrl, request)
//   }


// getUserProfile(){
//  // var tokenHeader = new HttpHeaders({'Authorization':'Bearer'+localStorage.getItem('token')})
//   return this.http.get(this.apiUrl+'UserProfile');
// }


getFromLS(): UserModel {
  const details = localStorage.getItem('currentUser');
  return JSON.parse(details);
}


}





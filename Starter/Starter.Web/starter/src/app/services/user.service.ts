import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


// formModel = this.fb.group ({
//   UserName: ['',Validators.required],
//   Email: ['',Validators.email],
//   FullName: [''],
//     Passwords: this.fb.group ({
//       Password: ['',[Validators.required,Validators.minLength(3)]],
//     //  ConfirmPassword: ['',Validators.required]
//     })

// });




// // makes a post reqest to the web api

// register(){
//   var body = {
//     UserName: this.formModel.value.UserName,
//     Email: this.formModel.value.Email,
//     FullName: this.formModel.value.FullName,
//     Password: this.formModel.value.Passwords.Password
//   };
//   return this.http.post(this.BASEURI+'/ApplicationUser/Register', body);
// }




}
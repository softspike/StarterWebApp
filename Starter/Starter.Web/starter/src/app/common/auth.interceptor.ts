// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Router } from "@angular/router";
// import { Observable, tap } from "rxjs";


// @Injectable()

// export class  AuthInterceptor implements HttpInterceptor{


//     constructor(private router: Router){

//     }

//             //append JSON web token
//             //all of the http requests in this app will be based through this function
//             intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//                 if(localStorage.getItem('token') !=null){
//             const clonedReq =  req.clone({
//                 headers : req.headers.set('Authorization', 'Bearer' + localStorage.getItem('token'))
//             }); 
//             return next.handle(clonedReq).pipe(
//                 tap(
//                     succ =>{},
//                     err=>{
//                         if(err.status == 401){
//                             // before redirecrting the user need remove a token from local storage
//                             localStorage.removeItem('token');
//                             this.router.navigateByUrl('/user/login');

//                         }
                        
//                     }
//                 )
//             )
//         }
//         else
//         return next.handle(req.clone());
//     }
// }

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const currentUser = this.authenticationService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.token;
        //const isApiUrl = request.url.startsWith(apiUrl);
        if (isLoggedIn) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
        private router: Router,
        private authenticationService: AuthenticationService
        ) {
  }
  
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     if (localStorage.getItem('token')!=null){
  //       console.log(localStorage)
  //       return true;
  //     }
      
  //   else {
  //     this.router.navigate(['user/login']);
  //     console.log(localStorage.getItem('currrentUser'))
  //     return false;
  //   }

    

  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
        // logged in so return true
        console.log('true')
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['user/login'], { queryParams: { returnUrl: state.url } });
    console.log('false')
    return false;
  
}
}
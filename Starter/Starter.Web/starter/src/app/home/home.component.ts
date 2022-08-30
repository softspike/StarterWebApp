import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { takeWhile } from 'rxjs/operators';
import { SnackbarService } from '../services/snackbar.service';
import { IdStringModel } from '../models/models.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  
  currentUser : any;
  private alive = true;
  constructor(private authenticationService: AuthenticationService,
    private snackBarService: SnackbarService
  ) { }

  ngOnInit() {
    this.currentUser = this.authenticationService.currentUserValue;

  }

  delete() {
 const request = new IdStringModel(this.currentUser.id);
    this.authenticationService.deleteUser(request)
      .pipe(takeWhile(() => this.alive))
      .subscribe((response: any) => {
if(response){
  this.snackBarService.show('User Deleted');
  this.authenticationService.logout();
}
      }
    ,
    (error: any) => {
      this.snackBarService.show('Server Error');
    });
  }
}

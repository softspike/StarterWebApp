import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MAT_MENU_DEFAULT_OPTIONS } from '@angular/material/menu';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  mobileQuery: MediaQueryList;
  isPlayer = false;
  isCaptain = false;

  constructor(
    private media : MediaMatcher,
    private authenticationService: AuthenticationService,
    private userService : UserService
  ) {
    

    this.mobileQuery = media.matchMedia('(min-width: 768px)');
  }


  ngOnInit() {
    this.isPlayer = this.userService.getFromLS().isPlayer;
    this.isCaptain = this.userService.getFromLS().isCaptain;
    console.log(this.userService.getFromLS())
    console.log(this.isCaptain)
  }

  onLogout(){
      this.authenticationService.logout();
    
  }
  

}

import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'router-outlet',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  mobileQuery: MediaQueryList;

  constructor(
    private titleService: Title,
    private router: Router,
    private activePage: ActivatedRoute,
    private media : MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');

   }

  ngOnInit() {
   
    console.log(this.mobileQuery.matches)
  }





  
}

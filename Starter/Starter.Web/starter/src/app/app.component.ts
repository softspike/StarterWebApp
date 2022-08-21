import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title= 'changeBrowserTitle';
  mobileQuery: MediaQueryList;
  
constructor(
            private titleService: Title,
            private router: Router,
            private activePage: ActivatedRoute,
            private media : MediaMatcher
            ){
            this.mobileQuery = media.matchMedia('(min-width: 768px)');
}

  ngOnInit() {
    this.changeTitle();
    console.log(this.mobileQuery.matches)
  }

  changeTitle() {
    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationEnd:
          this.titleService.setTitle(this.activePage.firstChild.snapshot.data.title);
          break;
          default:
          break;
      }
    });
  }
}


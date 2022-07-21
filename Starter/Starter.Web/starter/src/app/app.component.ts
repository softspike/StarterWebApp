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

//https://www.youtube.com/watch?v=8iWAChl3rCQ
  // route event function 
  // wea are trying to subscribe route events//whenever route change happens this event will be triggered
  // and we will subscribing to this event.
  changeTitle() {
    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationEnd:
          // what will happen are getting the current route. from it we are taking a snapshot of data=route data: title.
          //and we are getting that from selected property
          //what will happen whenever any event is changed. this event will get tirggered and since I'm subscribing to that event I checking whether that event is navigation
          // event. that means that page is landed.
          //later changing title of the browser and title of the page.
          this.titleService.setTitle(this.activePage.firstChild.snapshot.data.title);
          break;

          default:

          break;
      }
    });
  }



}


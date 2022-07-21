import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit {
  titles:any;

  constructor(private titleService: Title, private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbChanged.subscribe( crumbs => {
      this.titleService.setTitle(this.createTitle(crumbs));
    })
  }

  private createTitle(routesCollection: Breadcrumb[]) {
    const title = 'StarterApp |';
    const titles = routesCollection.filter((route) => route.displayName);

    if(!title.length) {return title;}

    const routeTitle = this.titlesToString(titles);
    return `${title} ${routeTitle} `;
  }


    private titlesToString(titles:any){
      return titles.reduce((prev:any, curr:any) => {
        return `${curr.displayName} - ${prev}`;
      }, '');
  }

}

// https://www.youtube.com/watch?v=m3w_dhD_Juw
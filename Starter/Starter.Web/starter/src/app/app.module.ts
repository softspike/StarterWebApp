import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgencyTableComponent } from './free-agency/agency-table/agency-table.component';
import { AgencyButtonComponent } from './free-agency/agency-button/agency-button.component';
import { TournamentListComponent } from './tournament-info/tournament-list/tournament-list.component';
import { TournamentButtonComponent } from './tournament-info/tournament-button/tournament-button.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { appRoutes } from './routes';


// feature Modules

import { MaterialModule } from './material/material/material.module';
import { NgxScreenfullModule } from '@ngx-extensions/screenfull';
import { BreadcrumbModule } from 'angular-crumbs';
import { BreadCrumbsComponent } from './common/bread-crumbs/bread-crumbs.component';
import { CaptainPageComponent } from './user-types/captain-page/captain-page.component';
import { PlayerPageComponent } from './user-types/player-page/player-page.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SetScrollDirective } from './directives/set-scroll.directive';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AgencyTableComponent,
    AgencyButtonComponent,
    TournamentListComponent,
    TournamentButtonComponent,
    MainLayoutComponent,
    BreadCrumbsComponent,
    CaptainPageComponent,
    PlayerPageComponent,
    PageNotFoundComponent,
    SetScrollDirective,


  ],


  imports: [

    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    BreadcrumbModule,
    FlexLayoutModule,
   

    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    NgxScreenfullModule,


    
    RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
], { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule
  ],

  providers: [


  ],
  bootstrap: [AppComponent]

})

export class AppModule { }

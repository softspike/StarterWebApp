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
    MainLayoutComponent
  ],


  imports: [

    RouterModule.forRoot(appRoutes),

    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    BrowserAnimationsModule
  ],

  providers: [


  ],
  bootstrap: [AppComponent]

})

export class AppModule { }

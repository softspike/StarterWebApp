import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgencyTableComponent } from './free-agency/agency-table/agency-table.component';
import { AgencyButtonComponent } from './free-agency/agency-button/agency-button.component';
import { TournamentListComponent } from './tournament-info/tournament-list/tournament-list.component';
import { TournamentButtonComponent } from './tournament-info/tournament-button/tournament-button.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { appRoutes } from './routes';
import { MaterialModule } from './material/material/material.module';
import { NgxScreenfullModule } from '@ngx-extensions/screenfull';
import { BreadcrumbModule } from 'angular-crumbs';
import { BreadCrumbsComponent } from './common/bread-crumbs/bread-crumbs.component';
import { CaptainPageComponent } from './user-types/captain-page/captain-page.component';
import { PlayerPageComponent } from './user-types/player-page/player-page.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SetScrollDirective } from './directives/set-scroll.directive';
import { ClosePopupComponent } from './common/close-popup/close-popup.component';
import { ExcelExportComponent } from './common/excel-export/excel-export.component';
import { UserComponent } from './user-types/user/user.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './common/auth.interceptor';
import { SubmitUserComponent } from './free-agency/submit-user/submit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    ClosePopupComponent,
    ExcelExportComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    SubmitUserComponent,


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
    ReactiveFormsModule,
    
 
 
    RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
], { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule
  ],

  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  
  bootstrap: [AppComponent]

})

export class AppModule { }

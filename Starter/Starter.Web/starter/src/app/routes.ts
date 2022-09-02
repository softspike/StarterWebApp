import { Routes } from '@angular/router';
import { AuthGuard } from './common/auth.guard';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { AgencyTableComponent } from "./free-agency/agency-table/agency-table.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RegistrationComponent } from './registration/registration.component';
import { CaptainPageComponent } from './user-types/captain-page/captain-page.component';
import { PlayerPageComponent } from './user-types/player-page/player-page.component';
import { UserComponent } from './user-types/user/user.component';

export const appRoutes: Routes = [

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

     { path: 'dashboard', component: MainLayoutComponent, canActivate: [AuthGuard], data: { title: 'StarterApp | Dashboard', breadcrumb: 'Dashboard' },
     children:
     [ { path: '', component: HomeComponent,  data: { title: 'StarterApp | Dashboard', breadcrumb: 'Dashboard > Home' }},
       { path: 'agency/table', component: AgencyTableComponent, data: { title: 'StarterApp | Agency Table', breadcrumb: 'Dashboard > Free Agency' },},
       { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { title: 'StarterApp | Dashboard', breadcrumb: 'Dashboard > Home' }},
       { path: 'dashboard/agency/table', component: AgencyTableComponent, data: { title: 'StarterApp | Agency Table', breadcrumb: 'Dashboard > Free Agency' },},
       { path: 'user-types/captain-page', component: CaptainPageComponent, data: { title: 'StarterApp | Captain', breadcrumb: 'Dashboard > Captain Page' },},
       { path: 'user-types/player-page', component: PlayerPageComponent, canActivate:[AuthGuard], data:{ title: 'StarterApp | Player', breadcrumb: 'Dashboard > Player Page' },},
       { path: 'user', component: UserComponent, data: { title: 'StarterApp | User'},},
       { path: '**', component: PageNotFoundComponent, data: { title: 'StarterApp | 404' }, },

    ]
    
    },

     { path: 'user/registration', component: RegistrationComponent, data: { title: 'StarterApp | Registration'},},

     { path: 'user/login', component: LoginComponent, data: { title: 'StarterApp | Login'},},

]
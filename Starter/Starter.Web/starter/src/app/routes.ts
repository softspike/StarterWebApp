import { Routes } from '@angular/router';
import { AgencyTableComponent } from "./free-agency/agency-table/agency-table.component";
import { HomeComponent } from './home/home.component';
import { TournamentListComponent } from "./tournament-info/tournament-list/tournament-list.component";
import { CaptainPageComponent } from './user-types/captain-page/captain-page.component';
import { PlayerPageComponent } from './user-types/player-page/player-page.component';

export const appRoutes: Routes = [


    { path: '', redirectTo: '/home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent, data: { title: 'StarterApp | Dashboard', breadcrumb: 'Dashboard > Home' },},

    { path: 'tournament/list', component: TournamentListComponent, data: { title: 'StarterApp | All Tournaments', breadcrumb: 'Dashboard > All Tournaments' },},

    { path: 'agency/table', component: AgencyTableComponent, data: { title: 'StarterApp | Free Agency', breadcrumb: 'Dashboard > Free Agency' },},

    { path: 'user-types/captain-page', component: CaptainPageComponent, data: { title: 'StarterApp | Captain', breadcrumb: 'Dashboard > Captain Page' },},

    { path: 'user-types/player-page', component: PlayerPageComponent, data: { title: 'StarterApp | Player', breadcrumb: 'Dashboard > Player Page' },},

]
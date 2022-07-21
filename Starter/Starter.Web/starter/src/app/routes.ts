import { Routes } from '@angular/router';
import { AgencyTableComponent } from "./free-agency/agency-table/agency-table.component";
import { TournamentListComponent } from "./tournament-info/tournament-list/tournament-list.component";

export const appRoutes: Routes = [


   // {path: '**', component: TournamentListComponent},

    { path: 'tournament/list', component: TournamentListComponent, data: { title: 'StarterApp | All Tournaments', breadcrumb: 'Dashboard > All Tournaments' },},

    { path: 'agency/table', component: AgencyTableComponent, data: { title: 'StarterApp | Free Agency', breadcrumb: 'Dashboard > Free Agency' },},

   // { path: 'tournament/list', component: TournamentListComponent },

    // { path: '', redirectTo: 'tournament/list', pathMatch: 'full' },

]
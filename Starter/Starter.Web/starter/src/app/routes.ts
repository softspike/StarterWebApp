import { Routes } from '@angular/router';
import { AgencyTableComponent } from "./free-agency/agency-table/agency-table.component";
import { TournamentListComponent } from "./tournament-info/tournament-list/tournament-list.component";

export const appRoutes: Routes = [

    { path: 'agency/table', component: AgencyTableComponent, data: {title: 'StarterApp | Free Agency', breadcrumb: 'Dashboard > Free Agency'},},
    { path: 'tournament/list', component: TournamentListComponent, data: {breadcrumb: 'All Tournaments > Tournament Sessions'},},
    { path: '', redirectTo: 'tournament/list', pathMatch: 'full' },

]
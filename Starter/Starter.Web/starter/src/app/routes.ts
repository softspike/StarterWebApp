import { Routes } from '@angular/router';
import { AgencyTableComponent } from "./free-agency/agency-table/agency-table.component";
import { TournamentListComponent } from "./tournament-info/tournament-list/tournament-list.component";

export const appRoutes: Routes = [

    { path: 'agency/table', component: AgencyTableComponent,data: { breadcrumb: 'Dashboard > Free Agency Table'},},

   // { path: 'tournament/list', component: TournamentListComponent },


    { path: 'tournament/list', component: TournamentListComponent, data: {breadcrumb: 'Dashboard > All Tournaments'},},


    // { path: '', redirectTo: 'tournament/list', pathMatch: 'full' },



]
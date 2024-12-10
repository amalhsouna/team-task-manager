import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { TeamListComponent } from './components/team-list/team-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
  { path: 'teams', component: TeamListComponent },
  { path: 'api/teams/:id', component: TeamDetailComponent }, 
  { path: '**', redirectTo: '/home', pathMatch: 'full' } //wildCard route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

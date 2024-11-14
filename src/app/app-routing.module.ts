import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { TeamListComponent } from './components/team-list/team-list.component';

const routes: Routes = [
  { path: 'teams', component: TeamListComponent },
  { path: 'teams/:id', component: TeamDetailComponent }, 
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

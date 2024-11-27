import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Team, TeamService } from 'src/app/services/team.service';
import { TaskFormDialogComponent } from '../task-form-dialog/task-form-dialog.component';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
})
export class TeamDetailComponent {
  team: any | null = null;
  newTask = { title: '', description: '' }; // Modèle pour le formulaire
  idTeam = 5

  showTaskFormDialog = false;

  constructor(private route: ActivatedRoute, private teamService: TeamService,
     private dialog: MatDialog) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.teamService.getDetailTeams(id).subscribe(
        (data: Team) => this.team = data,
        (error) => console.error('Erreur lors de la récupération des détails de l\'équipe', error)
      );
    }
  };

  onTaskAdded(newTask: any) {
    this.team.tasks.push(newTask); // Ajoute la nouvelle tâche à la liste
    this.showTaskFormDialog = false; // Ferme le popup après ajout de la tâche
  }

  openTaskForm() {
    const dialogRef = this.dialog.open(TaskFormDialogComponent, {
      data: { teamId: this.team.id }, // Passez `teamId` dans les données du popup
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Tâche reçue :', result);
        // Traitez la nouvelle tâche ici
      }
    });
  }
}

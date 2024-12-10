import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form-dialog',
  templateUrl: './task-form-dialog.component.html',
})
export class TaskFormDialogComponent{
  @Input() teamId?: number; // ID de l'équipe passé par le parent
  @Output() taskAdded = new EventEmitter<any>(); // Événement émis lorsque la tâche est ajoutée
  newTask = { title: '', description: '' };
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private taskService: TaskService) {}
  ngOnInit(): void {
    this.teamId = this.data.teamId; // Récupération du teamId des données
  }
  addTask() {
    if (!this.newTask.title || !this.newTask.description) {
      alert('Le titre et la description sont obligatoires.');
      return;
    }

    const task = { ...this.newTask }; // add id of team to task
    console.log(task);
    //call api task (add task to team)
    this.taskService.addTaskToTeam(task, this.teamId).subscribe(
      (response) => {
        this.taskAdded.emit(task); // send task to parent
        this.newTask = { title: '', description: '' }; // Resetting the form
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la tâche', error);
        alert("Une erreur s'est produite lors de l'ajout de la tâche.");
      }
    );
  }

  closeDialog() {
    this.taskAdded.emit(null); // Optionnel : émet un événement null pour fermer le popup
  }
 
}

import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  @Input() teamId!: number;
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    if (this.teamId) {
      this.taskService.getTasks(this.teamId).subscribe(data => {
        this.tasks = data;
      });
    }
  }

  createTask(title: string, description: string) {
    this.taskService.addTaskToTeam([], this.teamId).subscribe(() => {
      this.ngOnInit(); // Refresh the task list
    });
  }
}

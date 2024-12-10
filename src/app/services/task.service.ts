import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/api/teams';

  constructor(private http: HttpClient) {}

  getTasks(teamId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${teamId}/tasks`);
  }

  addTaskToTeam(task: any, teamId: number | undefined): Observable<any> {
    return this.http.post(`${this.apiUrl}/${teamId}/tasks`, task);
  }
}

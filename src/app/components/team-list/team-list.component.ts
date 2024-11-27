import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: any[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.loadTeams();  // Load teams on initialization
  }

  loadTeams() {
    this.teamService.getTeams().subscribe(data => {
      this.teams = data;
      console.log('Fetched teams:', this.teams);  // Log fetched teams
    },
    error => {
      console.error('Error fetching teams:', error);  // Log any errors
    }
  );
  }

  createTeam(name: string) {
    this.teamService.createTeam(name).subscribe(() => {
      this.loadTeams(); // Refresh the team list
    });
  }
}

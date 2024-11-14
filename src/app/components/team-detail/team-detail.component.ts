import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team, TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent {
  teamId: string | null = null;
  team: Team | null = null;


  constructor(private route: ActivatedRoute, private teamService: TeamService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.teamService.getDetailTeams(id).subscribe(
        (data: Team) => this.team = data,
        (error) => console.error('Erreur lors de la récupération des détails de l\'équipe', error)
      );
    }
  };
  
}

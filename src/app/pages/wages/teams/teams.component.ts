import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/interfaces/team';
import { Observable } from 'rxjs';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams$: Observable<Team[]> = new Observable<Team[]>()

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.teams$ = this.playerService.getTeams()
  }

}

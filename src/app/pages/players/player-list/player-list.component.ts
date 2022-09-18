import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from 'src/app/interfaces/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  players$?: Observable<Player[]>

  constructor(private playerService: PlayerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getPlayers()
  }

  getPlayers(): Observable<Player[]>{
    return this.players$ = this.playerService.getPlayers()
  }

  viewPlayerDetails(id: number) {
    this.router.navigate([`${id}`], {relativeTo: this.route})
  }

  deletePlayer(id: number) {
    this.playerService.deletePlayer(id)
  }

  navigateToAddPlayer(): void {
    this.router.navigate(['add-player'])
  }

}

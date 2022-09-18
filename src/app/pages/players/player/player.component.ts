import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from 'src/app/interfaces/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  player$: Observable<Player> = new Observable<Player>()

  constructor(private playerService: PlayerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.getPlayer(p['id'])
    })
    
  }

  getPlayer(id: number) {
    this.player$ = this.playerService.getPlayer(id)
  }

  navigateToEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  deletePlayer() {
    this.playerService.deletePlayer(this.route.snapshot.params['id'])
    this.router.navigate(['/players'])
  }

}

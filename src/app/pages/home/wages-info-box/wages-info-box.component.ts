import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from 'src/app/interfaces/player';
import { PlayerService } from 'src/app/services/player.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-wages-info-box',
  templateUrl: './wages-info-box.component.html',
  styleUrls: ['./wages-info-box.component.scss']
})
export class WagesInfoBoxComponent implements OnInit, OnDestroy {

  highestPaidPlayer: string = "";
  highestWage: number = 0;
  subscription?: Subscription

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.subscription = this.playerService.getPlayers().subscribe(players => {
      let copyOfPlayers = players
      let sortedPlayers: Player[]= copyOfPlayers.sort((a, b) => a.wage - b.wage)
      let highesPaidPlyr: Player = sortedPlayers[sortedPlayers.length-1]
      this.highestPaidPlayer = highesPaidPlyr.name;
      this.highestWage = highesPaidPlyr.wage
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  

}

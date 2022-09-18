import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-statistics-box',
  templateUrl: './statistics-box.component.html',
  styleUrls: ['./statistics-box.component.scss']
})
export class StatisticsBoxComponent implements OnInit {

  numOfPlayers: number = 0;
  totalWage: number = 0

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe((players) =>{
      this.numOfPlayers = players.length;
      let wages = 0;
      players.forEach(player => wages += player.wage);
      this.totalWage = wages
    })
  }
}

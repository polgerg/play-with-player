import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/app/interfaces/team';
import { PlayerService } from 'src/app/services/player.service';
import { WageService } from 'src/app/services/wage.service';

@Component({
  selector: 'app-wage-info-box',
  templateUrl: './wage-info-box.component.html',
  styleUrls: ['./wage-info-box.component.scss']
})
export class WageInfoBoxComponent implements OnInit {

  currentMoney$: Observable<number>
  monthlyIncome$: Observable<number>
  totalWages$: Observable<number>

  expectedMoneyNextMonth: number = 0

  constructor(private playerService: PlayerService, public wageService: WageService) {
    this.currentMoney$ = this.wageService.currentMoneyOfClub$;
    this.monthlyIncome$ = this.wageService.monthlyIncomeOfClub$;
    this.totalWages$ = this.playerService.getTotalWages()
   }

  ngOnInit(): void {
  }

  calculateFinancialStability(currentMoney: number, monthlyIncome: number, totalWages: number): string{
    if(totalWages! < monthlyIncome!) {
      return `The club is financial stable`
    } else {
      let months = 0;
      currentMoney = currentMoney! + (monthlyIncome! - totalWages!)
      while(currentMoney > 0){
        months++;
        currentMoney = currentMoney! + (monthlyIncome! - totalWages!)
      }
      return months === 1 ? `The club's financial reserves run out after 1 month` : `The club's financial reserves run out after ${months} months`
    }
  }
}

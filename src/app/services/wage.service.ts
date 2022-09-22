import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WageService {

  currentMoneyOfClub$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  monthlyIncomeOfClub$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { 
    this.currentMoneyOfClub$.next(30000000);
    this.monthlyIncomeOfClub$.next(20000000);
  }

  changeCurrentMoney(value: number) {
    this.currentMoneyOfClub$.next(value)
  }

  changeMonthylIncome(value: number) {
    this.monthlyIncomeOfClub$.next(value)
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WageService } from 'src/app/services/wage.service';

@Component({
  selector: 'app-wage-inputs',
  templateUrl: './wage-inputs.component.html',
  styleUrls: ['./wage-inputs.component.scss']
})
export class WageInputsComponent implements OnInit {

  wageForm: FormGroup

  constructor(fb: FormBuilder, private wageService: WageService) { 
    this.wageForm = fb.group({
      currentMoney: [''],
      monthlyIncome: [''],
    })
    this.wageService.currentMoneyOfClub$.subscribe(value => {
      this.currentMoney.patchValue(value)
    })
    this.wageService.monthlyIncomeOfClub$.subscribe(value => {
      this.monthlyIncome.patchValue(value)
    })
  }
  
  ngOnInit(): void {
  }

  get currentMoney(): FormControl {
    return this.wageForm.get('currentMoney') as FormControl
  }
  get monthlyIncome(): FormControl {
    return this.wageForm.get('monthlyIncome') as FormControl
  }

  changeCurrentMoney() {
    this.wageService.changeCurrentMoney(this.currentMoney.value)
  }

  changeMonthlyIncome() {
    this.wageService.changeMonthylIncome(this.monthlyIncome.value)
  }

}

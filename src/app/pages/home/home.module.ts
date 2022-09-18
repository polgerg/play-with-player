import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { StatisticsBoxComponent } from './statistics-box/statistics-box.component';

import { HomeRoutingModule } from './home-routing.modulte';
import { WagesInfoBoxComponent } from './wages-info-box/wages-info-box.component';

@NgModule({
  declarations: [
    HomeComponent,
    StatisticsBoxComponent,
    WagesInfoBoxComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

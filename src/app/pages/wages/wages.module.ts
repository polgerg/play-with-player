import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WagesRoutingModule } from './wages-routing.module';
import { WagesComponent } from './wages.component';
import { WageInfoBoxComponent } from './wage-info-box/wage-info-box.component';
import { TeamsComponent } from './teams/teams.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WageInputsComponent } from './wage-inputs/wage-inputs.component';

@NgModule({
  declarations: [
    WagesComponent,
    WageInfoBoxComponent,
    TeamsComponent,
    WageInputsComponent
  ],
  imports: [
    CommonModule,
    WagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WagesModule { }

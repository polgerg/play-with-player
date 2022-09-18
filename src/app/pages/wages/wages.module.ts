import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WagesRoutingModule } from './wages-routing.module';
import { WagesComponent } from './wages.component';

@NgModule({
  declarations: [
    WagesComponent
  ],
  imports: [
    CommonModule,
    WagesRoutingModule,
  ]
})
export class WagesModule { }

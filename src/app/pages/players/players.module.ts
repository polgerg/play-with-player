import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerComponent } from './player/player.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPlayerComponent } from './add-player/add-player.component'



@NgModule({
  declarations: [
    PlayersComponent,
    PlayerListComponent,
    PlayerComponent,
    PlayerEditComponent,
    AddPlayerComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    ReactiveFormsModule
  ]
})
export class PlayersModule { }

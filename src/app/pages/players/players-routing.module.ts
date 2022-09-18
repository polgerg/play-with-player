import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerComponent } from './player/player.component';
import { PlayersComponent } from './players.component';

const routes: Routes = [
  { path: '', component: PlayersComponent, children: [
    { path: '', component: PlayerListComponent},
    { path: 'add-player', component: AddPlayerComponent},
    { path: ':id', component: PlayerComponent},
    { path: ':id/edit', component: PlayerEditComponent},
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlayersRoutingModule { }

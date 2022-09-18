import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './pages/players/player-list/player-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule)},
  { path: 'players', loadChildren: () => import('./pages/players/players.module').then(module => module.PlayersModule)},
  { path: 'wages', loadChildren: () => import('./pages/wages/wages.module').then(module => module.WagesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

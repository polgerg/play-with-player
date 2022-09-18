import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeModule } from './pages/home/home.module';
import { PlayersModule } from './pages/players/players.module';
import { WagesModule } from './pages/wages/wages.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayersModule,
    HomeModule,
    WagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

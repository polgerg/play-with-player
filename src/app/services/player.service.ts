import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Player } from '../interfaces/player';
import { PlayersComponent } from '../pages/players/players.component';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private players: Player[]

  constructor() {
    this.players = 
    [
      {
          id: 1,
          name: "Hector Bellerin",
          shirtNumber: 10,
          team: "Arsenal",
          age: 23,
          wage: 230000,
          endOfContract: new Date('2023-10-11')
      },
      {
          id: 2,
          name: "Gareth McAuley",
          shirtNumber: 2,
          team: "Arsenal",
          age: 22,
          wage: 170000,
          endOfContract: new Date('2028-02-17')
      },
      {
          id: 3,
          name: "Matt Phillips",
          shirtNumber: 24,
          team: "Arsenal",
          age: 37,
          wage: 450000,
          endOfContract: new Date('2024-08-11')
      },
      {
          id: 4,
          name: "Salomon Rondon",
          shirtNumber: 13,
          team: "Arsenal",
          age: 32,
          wage: 250000,
          endOfContract: new Date('2024-07-10')
      },
      {
          id: 5,
          name: "Petr Cech",
          shirtNumber: 1,
          team: "Arsenal",
          age: 27,
          wage: 470000,
          endOfContract: new Date('2026-03-11')
      },
      {
          id: 6,
          name: "Olivier Giroud",
          shirtNumber: 5,
          team: "Arsenal",
          age: 21,
          wage: 160000,
          endOfContract: new Date('2022-12-22')
      },
      {
          id: 7,
          name: "Alex Iwobi",
          shirtNumber: 18,
          team: "Arsenal",
          age: 27,
          wage: 850000,
          endOfContract: new Date('2023-11-02')
      },
      {
          id: 8,
          name: "Laurent Koscielny",
          shirtNumber: 5,
          team: "Arsenal",
          age: 24,
          wage: 640000,
          endOfContract: new Date('2024-11-10')
      },
      {
          id: 9,
          name: "Mesut Ozil",
          shirtNumber: 23,
          team: "Arsenal",
          age: 19,
          wage: 840000,
          endOfContract: new Date('2023-05-22')
      },
      {
          id: 10,
          name: "Alexis Sanchez",
          shirtNumber: 52,
          team: "Arsenal",
          age: 21,
          wage: 960000,
          endOfContract: new Date('2024-04-11')
      },
      {
          id: 11,
          name: "Cesar Azpilicueta",
          shirtNumber: 10,
          team: "Chelsea",
          age: 22,
          wage: 670000,
          endOfContract: new Date('2027-06-18')
      },
      {
          id: 12,
          name: "Gary Cahill",
          shirtNumber: 7,
          team: "Chelsea",
          age: 32,
          wage: 440000,
          endOfContract: new Date('2022-02-17')
      },
      {
          id: 13,
          name: "Diego Costa",
          shirtNumber: 6,
          team: "Chelsea",
          age: 31,
          wage: 650000,
          endOfContract: new Date('2024-09-11')
      },
      {
          id: 14,
          name: "Salomon Rondon",
          shirtNumber: 18,
          team: "Chelsea",
          age: 20,
          wage: 850000,
          endOfContract: new Date('2028-07-10')
      },
      {
          id: 15,
          name: "Thibaut Courtois",
          shirtNumber: 17,
          team: "Chelsea",
          age: 18,
          wage: 520000,
          endOfContract: new Date('2024-03-11')
      },
      {
          id: 16,
          name: "Eden Hazard",
          shirtNumber: 22,
          team: "Chelsea",
          age: 26,
          wage: 720000,
          endOfContract: new Date('2025-12-22')
      },
      {
          id: 17,
          name: "Nemanja Matic",
          shirtNumber: 42,
          team: "Chelsea",
          age: 28,
          wage: 110000,
          endOfContract: new Date('2023-11-02')
      },
      {
          id: 18,
          name: "Victor Moses",
          shirtNumber: 1,
          team: "Chelsea",
          age: 24,
          wage: 540000,
          endOfContract: new Date('2024-10-06')
      },
      {
          id: 19,
          name: "Christian Benteke",
          shirtNumber: 41,
          team: "Chelsea",
          age: 19,
          wage: 280000,
          endOfContract: new Date('2024-05-20')
      },
      {
          id: 20,
          name: "Daniel Amartey",
          shirtNumber: 32,
          team: "Chelsea",
          age: 21,
          wage: 860000,
          endOfContract: new Date('2024-01-12')
      },
    ]
  }

  getPlayers(): Observable<Player[]> {
    return of(this.players).pipe(players => players)
  }

  getPlayer(id: number): Observable<Player> {
    return of(this.players).pipe(
        map(players => {        
          let selectedPlayer = players.find(player => player.id == id)
          return selectedPlayer!
        })
      )
  }

  patchPlayer(player: Player): Observable<Player> {
    let playerIndex = this.players.findIndex(plyr => plyr.id == player.id)
    this.players[playerIndex] = {...player}
    console.log(player)
    console.log(this.players)
    return of(player)
  }

  addPlayer(player: Player): Observable<Player> {
    let copyOfPlayers = this.players
    let playerIdsInOrder = copyOfPlayers.sort((a, b) => a.id - b.id)
    let highestId = playerIdsInOrder[playerIdsInOrder.length-1].id
    this.players.push({...player, id: highestId+1})
    return of(player)
  }

  deletePlayer(id: number): Observable<void> {
    console.log(id)
    let playerIndex = this.players.findIndex(player => player.id == id)
    this.players.splice(playerIndex, 1)
    return of()
  }

}

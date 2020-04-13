import { Player } from "src/app/models/player";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-type": "application/json",
    mode: "no-cors",
  }),
};
@Injectable({
  providedIn: "root",
})
export class PlayerService {
  url = "http://localhost:8181/players/";

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.url);
  }

  getPlayersByTeam(teamId: number): Observable<Player[]> {
    const url = `${this.url}team/${teamId}`;
    return this.http.get<Player[]>(url);
  }

  addPlayer(Player: Player): Observable<any> {
    return this.http.post<Player>(this.url, Player, httpOptions);
  }

  deletePlayer(Player: Player): Observable<any> {
    const url = `${this.url}${Player.id}`;
    return this.http.delete<Player>(url, httpOptions);
  }

  updatePlayer(Player: Player): Observable<any> {
    const url = `${this.url}${Player.id}`;
    return this.http.put<Player>(url, Player, httpOptions);
  }
}
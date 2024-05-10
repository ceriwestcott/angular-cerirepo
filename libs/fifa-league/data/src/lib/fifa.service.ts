import { Match, Player } from '@angular-cerirepo/fifa-league/util';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FifaService {
  getPlayers(): Observable<Player[]> {
    return of([{ name: 'Ceri' }, { name: 'Tom' }, { name: 'Dylan' }]);
  }

  getTeams(): Observable<string[]> {
    return of([
      'Arsenal',
      'Aston Villa',
      'Chelsea',
      'Liverpool',
      'Manchester City',
      'Manchester United',
      'Tottenham Hotspur',
      'Leicester City',
      'West Ham United',
      'Everton',
      'Leeds United',
      'Wolverhampton Wanderers',
      'Crystal Palace',
      'Southampton',
      'Newcastle United',
      'Brighton & Hove Albion',
      'Burnley',
      'Fulham',
      'West Bromwich Albion',
      'Sheffield United',
    ]);
  }

  createMatch(match: Match): void {
    console.log('Match created', match);
  }
}

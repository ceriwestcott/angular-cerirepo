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

  getHistoricalGames(): Observable<Match[]> {
    return of([
      {
        home: { name: 'Ceri', team: 'Arsenal' },
        away: { name: 'Tom', team: 'Chelsea' },
        winner: { name: 'Ceri', team: 'Arsenal' },
        score: { home: 2, away: 1 },
        inPlay: false,
      },
      {
        home: { name: 'Dylan', team: 'Liverpool' },
        away: { name: 'Ceri', team: 'Manchester City' },
        winner: { name: 'Ceri', team: 'Manchester City' },
        score: { home: 0, away: 3 },
        inPlay: false,
      },
      {
        home: { name: 'Tom', team: 'Manchester United' },
        away: { name: 'Dylan', team: 'Tottenham Hotspur' },
        winner: { name: 'Dylan', team: 'Tottenham Hotspur' },
        score: { home: 1, away: 2 },
        inPlay: true,
      },
    ]);
  }
}

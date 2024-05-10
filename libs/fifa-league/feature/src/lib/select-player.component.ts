import { Component } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Match, Player } from '@angular-cerirepo/fifa-league/util';
import { FifaService } from '@angular-cerirepo/fifa-league/data';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';

interface GameSetup {
  players: Player[];
  teams: string[];
}
@Component({
  selector: 'lib-select-player',
  standalone: true,
  imports: [CommonModule, NgFor, AsyncPipe, ReactiveFormsModule],
  templateUrl: './select-player.component.html',
})
export class SelectPlayerComponent {
  constructor(private fifaService: FifaService) {}
  matchForm = new FormGroup({
    home: new FormControl('', [Validators.required]),
    away: new FormControl('', [Validators.required]),
    homeTeam: new FormControl('', [Validators.required]),
    awayTeam: new FormControl('', [Validators.required]),
  });

  players$: Observable<Player[]> = this.fifaService.getPlayers();
  teams$: Observable<string[]> = this.fifaService.getTeams();

  setupData$: Observable<GameSetup> = combineLatest(
    this.players$,
    this.teams$,
    (players, teams) => ({ players, teams })
  );

  match: Match | undefined;

  createGame(): void {
    if (this.matchForm.invalid) {
      this.matchForm.setErrors({ invalid: true });
      return;
    }
    this.match = {
      home: {
        name: this.matchForm.value.home ?? 'Home Player',
        team: this.matchForm.value.homeTeam ?? 'Home Team',
      },
      away: {
        name: this.matchForm.value.away ?? 'Away Player',
        team: this.matchForm.value.awayTeam ?? 'Away Team',
      },
      inPlay: true,
    };
    this.fifaService.createMatch(this.match);
  }
}

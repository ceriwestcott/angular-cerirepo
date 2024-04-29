import { Component, EventEmitter, Inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Match, Player } from '@angular-cerirepo/fifa-league/util';
import { FifaService } from '@angular-cerirepo/fifa-league/data';
import {
  MatchTitleComponent,
  PlayerListComponent,
} from '@angular-cerirepo/fifa-league/ui';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-select-player',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    PlayerListComponent,
    MatchTitleComponent,
    AsyncPipe,
  ],
  templateUrl: './select-player.component.html',
})
export class SelectPlayerComponent {
  constructor(private fifaService: FifaService) {}
  matchForm = new FormGroup({
    home: new FormControl(''),
    away: new FormControl(''),
  });

  players$: Observable<Player[]> = this.fifaService.getPlayers();
  teams$: Observable<string[]> = this.fifaService.getTeams();

  match: Match | undefined;

  createGame() {}
}

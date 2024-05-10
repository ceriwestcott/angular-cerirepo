import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FifaService } from '@angular-cerirepo/fifa-league/data';
import { Match, GameResultPipe } from '@angular-cerirepo/fifa-league/util';

@Component({
  selector: 'lib-historical-games',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, GameResultPipe],
  templateUrl: './historical-games.component.html',
  styleUrl: './historical-games.component.css',
})
export class HistoricalGamesComponent {
  constructor(private fifaService: FifaService) {}

  historicalGames$ = this.fifaService.getHistoricalGames();
  selectedMatch: Match = {} as Match;

  matchDetails(match: Match): void {
    this.selectedMatch = match;
    document.getElementById('my_modal_6')?.click();
  }
}

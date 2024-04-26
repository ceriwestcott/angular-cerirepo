import { Component, EventEmitter } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Match, Player } from '@angular-cerirepo/fifa-league/util';
import { FifaService } from '@angular-cerirepo/fifa-league/data';
import {
  MatchTitleComponent,
  PlayerListComponent,
} from '@angular-cerirepo/fifa-league/ui';

@Component({
  selector: 'lib-select-player',
  standalone: true,
  imports: [CommonModule, NgFor, PlayerListComponent, MatchTitleComponent],
  templateUrl: './select-player.component.html',
})
export class SelectPlayerComponent {
  playerList: Player[] = [];
  match: Match | undefined;
  selectedPlayer = new EventEmitter<Player>();

  constructor(private fifaService: FifaService) {
    this.playerList = this.fifaService.getPlayers();
  }

  playerSelected(player: Player) {
    this.selectedPlayer.emit(player);
  }
}

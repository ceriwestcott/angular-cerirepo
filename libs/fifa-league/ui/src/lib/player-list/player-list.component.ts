import { Component, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '@angular-cerirepo/fifa-league/util';

@Component({
  selector: 'lib-player-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css',
})
export class PlayerListComponent {
  @Input() playerList: Player[] = [];

  playerSelected = new EventEmitter<Player>();

  onPlayerSelected(player: Player) {
    this.playerSelected.emit(player);
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '@angular-cerirepo/fifa-league/util';

@Component({
  selector: 'lib-match-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-title.component.html',
  styleUrl: './match-title.component.css',
})
export class MatchTitleComponent {
  @Input() player_one!: Player;
  @Input() player_two!: Player;
}

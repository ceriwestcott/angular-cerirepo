import { Player } from '@angular-cerirepo/fifa-league/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FifaService {
  getPlayers(): Player[] {
    return [
      {
        name: 'Ceri',
      },
      {
        name: 'Dylan',
      },
      {
        name: 'Tom',
      },
    ];
  }
}

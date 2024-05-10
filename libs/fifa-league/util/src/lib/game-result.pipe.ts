import { Pipe, PipeTransform } from '@angular/core';
import { Match } from './match.model';

@Pipe({
  name: 'gameResult',
  standalone: true,
})
export class GameResultPipe implements PipeTransform {
  transform(match: Match | undefined): any {
    if (!match?.home || !match?.away) {
      return '';
    }
    return `${match.home.name}(${match.score?.home}) - ${match.away.name}(${match.score?.away})`;
  }
}

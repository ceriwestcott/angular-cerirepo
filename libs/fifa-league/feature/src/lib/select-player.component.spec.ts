import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { SelectPlayerComponent } from './select-player.component';
import { FifaService } from '@angular-cerirepo/fifa-league/data';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { get } from 'http';
import { Player } from '@angular-cerirepo/fifa-league/util';
import { Observable, of } from 'rxjs';

describe('SelectPlayerComponent', () => {
  const getMockPlayers: Observable<Player[]> = of([
    {
      name: 'Ceri',
    },
    {
      name: 'Tom',
    },
    {
      name: 'Dylan',
    },
  ]);

  const getMockTeams: Observable<string[]> = of([
    'Arsenal',
    'Chelsea',
    'Liverpool',
  ]);

  let spectator: Spectator<SelectPlayerComponent>;
  const createComponent = createComponentFactory({
    component: SelectPlayerComponent,
    providers: [
      {
        provide: FifaService,
        useValue: {
          getPlayers: () => getMockPlayers,
          getTeams: () => getMockTeams,
          createMatch: () => console.log('Match created'),
        },
      },
    ],
    imports: [CommonModule, NgFor, AsyncPipe],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('#dropdowns', () => {
    it('should display a dropdown for players', () => {
      expect(spectator.queryAll("[data-role='home-dropdown']")).toHaveLength(3);
      expect(spectator.queryAll("[data-role='away-dropdown']")).toHaveLength(3);
    });
    it('should display a dropdown for teams', () => {
      expect(
        spectator.queryAll("[data-role='home-team-dropdown']")
      ).toHaveLength(3);
      expect(
        spectator.queryAll("[data-role='away-team-dropdown']")
      ).toHaveLength(3);
    });
  });
  describe('#createGame', () => {
    it('should create a game', () => {
      spectator.component.matchForm.setValue({
        home: 'Ceri',
        away: 'Tom',
        homeTeam: 'Arsenal',
        awayTeam: 'Chelsea',
      });
      spectator.component.createGame();
      expect(spectator.component.match).toEqual({
        home: {
          name: 'Ceri',
          team: 'Arsenal',
        },
        away: {
          name: 'Tom',
          team: 'Chelsea',
        },
        inPlay: true,
      });
    });
    it('should set errors if form is invalid', () => {
      spectator.component.createGame();
      expect(spectator.component.matchForm.errors).toEqual({ invalid: true });
      expect(
        spectator.query("[data-role='create-match-button']")
      ).toBeDisabled();
    });
  });
});

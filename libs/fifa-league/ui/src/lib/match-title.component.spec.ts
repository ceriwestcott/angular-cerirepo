import { MatchTitleComponent } from './match-title.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
describe('MatchTitleComponent', () => {
  let spectator: Spectator<MatchTitleComponent>;
  const createComponent = createComponentFactory(MatchTitleComponent);

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          player_one: { name: 'Player 1' },
          player_two: { name: 'Player 2' },
        },
      }))
  );

  it('should display both player names', () => {
    const player_one = spectator.query("[data-role='player_one']")?.innerHTML;
    const player_two = spectator.query("[data-role='player_two']")?.innerHTML;

    expect(player_one).toContain('Player 1');
    expect(player_two).toContain('Player 2');
  });
});

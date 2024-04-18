import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'fifa-league',
    loadChildren: () =>
      import('../../../../libs/fifa-league/shell/src/index').then(
        (m) => m.FifaLeagueModule
      ),
  },
];

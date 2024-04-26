import { Route } from '@angular/router';
export const appRoutes: Route[] = [
  {
    path: 'fifa-league',
    loadChildren: () =>
      import('@angular-cerirepo/fifa-league-ang').then(
        (m) => m.FifaLeagueModule
      ),
  },
];

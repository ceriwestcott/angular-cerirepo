import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SelectPlayerComponent,
  HistoricalGamesComponent,
} from '@angular-cerirepo/fifa-league/feature';

import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: SelectPlayerComponent,
  },
  {
    path: 'historic-games',
    component: HistoricalGamesComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FifaLeagueModule {}

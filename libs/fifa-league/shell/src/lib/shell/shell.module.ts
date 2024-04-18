import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPlayerComponent } from '@angular-cerirepo/fifa-league/feature';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: SelectPlayerComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FifaLeagueModule {}

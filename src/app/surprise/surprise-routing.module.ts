import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurprisePage } from './surprise.page';

const routes: Routes = [
  {
    path: '',
    component: SurprisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurprisePageRoutingModule {}

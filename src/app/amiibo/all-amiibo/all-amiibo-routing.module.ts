import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllAmiiboPage } from './all-amiibo.page';

const routes: Routes = [
  {
    path: '',
    component: AllAmiiboPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllAmiiboPageRoutingModule {}

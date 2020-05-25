import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmiiboPage } from './amiibo.page';

const routes: Routes = [
  {
    path: '',
    component: AmiiboPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmiiboPageRoutingModule {}

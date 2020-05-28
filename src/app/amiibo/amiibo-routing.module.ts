import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmiiboPage } from './amiibo.page';

const routes: Routes = [
  {
    path: '',
    component: AmiiboPage
  },
  {
    path: 'all-amiibo',
    loadChildren: () => import('./all-amiibo/all-amiibo.module').then( m => m.AllAmiiboPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmiiboPageRoutingModule {}

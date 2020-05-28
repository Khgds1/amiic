import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'amiibo',
    loadChildren: () => import('./amiibo/amiibo.module').then( m => m.AmiiboPageModule)
  },
  {
    path: 'changelog',
    loadChildren: () => import('./about/changelog/changelog.module').then( m => m.ChangelogPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'changelog',
    loadChildren: () => import('./about/changelog/changelog.module').then(m => m.ChangelogPageModule)
  },
  {
    path: 'all-amiibo',
    loadChildren: () => import('./amiibo/all-amiibo/all-amiibo.module').then(m => m.AllAmiiboPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

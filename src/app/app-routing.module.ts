import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'app-ideas',
    loadChildren: () => import('./pages/app-ideas/app-ideas.module').then( m => m.AppIdeasPageModule)
  },
  {
    path: 'news-details',
    loadChildren: () => import('./pages/news-details/news-details.module').then( m => m.NewsDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

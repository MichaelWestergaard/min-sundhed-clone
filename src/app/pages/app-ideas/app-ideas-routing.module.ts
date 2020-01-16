import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppIdeasPage } from './app-ideas.page';

const routes: Routes = [
  {
    path: '',
    component: AppIdeasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppIdeasPageRoutingModule {}

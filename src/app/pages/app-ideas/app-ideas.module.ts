import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppIdeasPageRoutingModule } from './app-ideas-routing.module';

import { AppIdeasPage } from './app-ideas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppIdeasPageRoutingModule
  ],
  declarations: [AppIdeasPage]
})
export class AppIdeasPageModule {}

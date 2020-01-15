import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import {InformartionCardsComponent} from '../components/informartion-cards/informartion-cards.component';
import { DocterInformartionComponent } from '../components/docter-informartion/docter-informartion.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  entryComponents: [InformartionCardsComponent, DocterInformartionComponent],
  declarations: [Tab2Page, InformartionCardsComponent, DocterInformartionComponent]
})
export class Tab2PageModule {}

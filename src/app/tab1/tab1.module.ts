import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { NewsCardComponent } from '../components/news-card/news-card.component';
import { AppIdeasComponent } from '../components/app-ideas/app-ideas.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  entryComponents: [WelcomeComponent, NewsCardComponent, AppIdeasComponent],
  declarations: [Tab1Page, WelcomeComponent, NewsCardComponent, AppIdeasComponent]
})
export class Tab1PageModule {}

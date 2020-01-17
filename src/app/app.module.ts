import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppIdeasPage } from 'src/app/pages/app-ideas/app-ideas.page';
import { NewsDetailsPage } from 'src/app/pages/news-details/news-details.page';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, AppIdeasPage, NewsDetailsPage],
  entryComponents: [AppIdeasPage, NewsDetailsPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), HttpClientModule ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

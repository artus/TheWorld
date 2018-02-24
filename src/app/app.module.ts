import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { CountryListPage } from '../pages/country-list/country-list';
import { CountryDetailPage } from '../pages/country-detail/country-detail';
import { AboutPage } from '../pages/about/about';

import { CountryServiceProvider } from '../providers/country-service/country-service';

@NgModule({
  declarations: [
    MyApp,
    CountryListPage,
    CountryDetailPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CountryListPage,
    CountryDetailPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CountryServiceProvider
  ]
})
export class AppModule {}

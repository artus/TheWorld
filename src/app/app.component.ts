import { Component, ViewChild  } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CountryListPage } from '../pages/country-list/country-list';
import { AboutPage } from '../pages/about/about';

import { CountryServiceProvider } from '../providers/country-service/country-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CountryListPage;
  @ViewChild(Nav) nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl : MenuController, public countryService : CountryServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
    
  navigateToPage(page) 
  {
      switch(page)
      {
          case "home":
              this.nav.popToRoot();
              break;
         
          case "about":
              this.nav.push(AboutPage);
              break;
      }
      
      this.menuCtrl.close();
  }
}


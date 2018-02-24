import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { CountryServiceProvider } from './../../providers/country-service/country-service';
import { Country } from './../../providers/country-service/Country';

/**
 * Generated class for the CountryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-country-detail',
  templateUrl: 'country-detail.html',
})
export class CountryDetailPage {
    
  country : Country;

  constructor(public navCtrl: NavController, public navParams: NavParams, public countryService : CountryServiceProvider) {
      this.country = this.navParams.get('country');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryDetailPage');
  }
    
  seeDetail(border) 
  {
      let country = this.countryService.searchCountryByAlpha3(border);
      
      this.navCtrl.push(CountryDetailPage, { country: country});
  }

}

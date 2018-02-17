import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CountryServiceProvider } from '../../providers/country-service/country-service';

/**
 * Generated class for the CountryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-country-list',
  templateUrl: 'country-list.html',
})
export class CountryListPage {
    
  searchQuery: string = "";
    
  title: string = "The world";

  constructor(public navCtrl: NavController, public navParams: NavParams, public countryServiceProvider : CountryServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryListPage');
  }
    
  onInput() {
      this.countryServiceProvider.searchCountries(this.searchQuery);
  }
    
  onCancel() {
      this.countryServiceProvider.allCountries();
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CountryDetailPage } from './../country-detail/country-detail';

import { CountryServiceProvider } from './../../providers/country-service/country-service';
import { Country } from './../../providers/country-service/Country';

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
      this.countryServiceProvider.getCountries();
  }
    
  getCountries() : Array<Country> {
      
      if (this.searchQuery == "")
          return this.countryServiceProvider.countries;
      
      return this.countryServiceProvider.searchCountries(this.searchQuery);
  }
    
  seeDetail(country : Country) {
      this.navCtrl.push(CountryDetailPage, { country : country });
  }
    
  onInput() {
      //this.countries = this.countryServiceProvider.searchCountries(this.searchQuery);
  }
    
  onCancel() {
      //this.countries = this.countryServiceProvider.countries;
      this.searchQuery = "";
  }

}

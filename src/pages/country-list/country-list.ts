import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CountryDetailPage } from './../country-detail/country-detail';

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
  countries : Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public countryServiceProvider : CountryServiceProvider) {
      this.countryServiceProvider.getCountries();
      this.countries = countryServiceProvider.countries;
  }

  ionViewDidLoad() {
  }
    
  seeDetail(country : any) {
      this.navCtrl.push(CountryDetailPage, { country : country });
  }
    
  onInput() {
      this.countries = this.countryServiceProvider.searchCountries(this.searchQuery);
  }
    
  onCancel() {
      this.countries = this.countryServiceProvider.countries;
  }

}

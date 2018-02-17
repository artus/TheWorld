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
    
  title: string = "The world";
  subTitle: string = "In the palm of your hand.";

  constructor(public navCtrl: NavController, public navParams: NavParams, public countryServiceProvider : CountryServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryListPage');
  }

}

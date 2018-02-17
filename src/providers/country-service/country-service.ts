import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// Observable
import { Observable } from 'rxjs/Observable';

import { Country } from './Country';

/*
  Generated class for the CountryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CountryServiceProvider {
    
  countriesUrl: string = "https://restcountries.eu/rest/v2/all";
  countryQueryUrl: string = "https://restcountries.eu/rest/v2/name/";
    
  countries: any;

  constructor(public http: Http) {
  }
    
  allCountries() {
      this.http.get(this.countriesUrl).map(res => res.json()).subscribe(data => {
          this.countries = data;
      },
      err => {
          this.countries = new Array<Country>();
      });
  }
    
  searchCountries(query) {
      if (query == "") this.allCountries();
      else {
          this.http.get(this.countryQueryUrl + query).map(res => res.json()).subscribe(data => {
              this.countries = data;
          }, 
          err => {
              this.countries = new Array<Country>();
          });
      }
  }
    
}

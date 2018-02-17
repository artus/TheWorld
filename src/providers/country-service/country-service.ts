import { Injectable } from '@angular/core';

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
  countries: Array<Country>;

  constructor() {
      this.countries = new Array<Country>();
  }
    
  get countries() : Array<Country> {
      return this.countries;
  }

}

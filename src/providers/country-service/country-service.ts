import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// Observable
import { CountryCache } from './CountryCache';
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
  lastUpdate : Date = new Date("2018-02-01T12:00:00.000Z");
    
  countries: Array<Country> = new Array<Country>();

  constructor(public http: Http) {
      this.countries = this.loadCountries();
  }
    
    getCountries() {
        this.http.get(this.countriesUrl).map(res => res.json()).subscribe(data => {
            this.log("List of countries returned from api, " + data.length + " records.");
            this.saveCountries(data);
            this.countries = this.loadCountries();
        },
        error => {
            this.log("Error while retrieving countries from api.")
            this.log(error);
            this.countries = this.loadCountries();
        });
    }
    
    getLastUpdate() : Date {
        return this.lastUpdate;
    }
    
    loadCountries() : Array<Country> {
        let storedCountriesString = localStorage.getItem("countries");
        let storedCountries = new Array<Country>();
        
        if (storedCountriesString === null)
        {
            storedCountries = CountryCache.countries;
            localStorage.setItem("countries", JSON.stringify(storedCountries));
            localStorage.setItem("lastUpdate", new Date().toISOString());
            this.log("Loaded countries from initial cache.");
        }
        else 
        {
            storedCountries = JSON.parse(storedCountriesString);
            this.lastUpdate = new Date(localStorage.getItem("lastUpdate"));
            this.log("Loaded countries from previously downloaded countries. Update from " + this.lastUpdate);
        }
        
        return storedCountries;
    }
    
    saveCountries(countries : Array<Country>) {
        localStorage.setItem('countries', JSON.stringify(countries));
        localStorage.setItem('lastUpdate', new Date().toISOString());
        
        this.lastUpdate = new Date(localStorage.getItem("lastUpdate"));
        this.log("Saved countries to device.");
    }
    
    searchCountries(query : string) : Array<Country> {
        let result = new Set<Country>();
        
        for (let country of this.countries) 
        {
            if (country.name.toLowerCase().includes(query.toLowerCase())) result.add(country);
            if (country.capital.toLowerCase().includes(query.toLowerCase())) result.add(country);
            if (country.alpha3Code.toLowerCase().includes(query.toLowerCase())) result.add(country);
        }
        
        return Array.from(result);
    }
    
    searchCountryByAlpha3(code : string) : Country
    {
        for (let country of this.countries)
        {
            if (country.alpha3Code.toLowerCase() == code.toLowerCase())
            {
                return country;
            }
        }
        
        return undefined;
    }
    
    log(message) 
    {
        let newDate = new Date().toLocaleTimeString();
        console.log(newDate + ": " + message);
    }
}

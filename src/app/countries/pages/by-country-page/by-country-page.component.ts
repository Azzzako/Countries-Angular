import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public country: Country[] = []
  public initialValue: string = ''

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.initialValue = this.countriesService.cacheStore.byCountries.term
    this.country = this.countriesService.cacheStore.byCountries.countries
  }

  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term)
      .subscribe(country => {
        this.country = country
      })
  }
}

import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {
  constructor(private countriesService: CountriesService) { }

  public regions: Country[] = []

  searchByRegion(term: string): void {
    this.countriesService.searchRegion(term)
    .subscribe(countries => {
      this.regions = countries
    })
  }
}

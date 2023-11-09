import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania'

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {
  constructor(private countriesService: CountriesService) { }

  public regions: Country[] = []
  public regionList: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  searchByRegion(term: Region): void {
    this.selectedRegion = term
    this.countriesService.searchRegion(term)
      .subscribe(countries => {
        this.regions = countries
      })
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent implements OnInit{
  constructor(private countriesService: CountriesService) { }

  public regions: Country[] = []
  public regionList: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region
    this.regions = this.countriesService.cacheStore.byRegion.countries
  }

  searchByRegion(term: Region): void {
    this.selectedRegion = term
    this.countriesService.searchRegion(term)
      .subscribe(countries => {
        this.regions = countries
      })
  }
}

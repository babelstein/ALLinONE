import { Component } from "@angular/core";
import { FreightsService } from 'src/services/freights.service';
import { Freight, FreightType, FreightSearchFilter } from './models';
import { Observable, Subscriber } from 'rxjs';

@Component({
  templateUrl: 'freights.component.html'
})


export class FreightsComponent {
  title = 'allinone';
  public freights: Freight[];
  public selectedFreight: Freight;
  private searchFiltersEmiter: Subscriber<FreightSearchFilter>;
  public searchFilters: FreightSearchFilter;
  public searchFilters$: Observable<FreightSearchFilter>;
  public sourceCountries: String[];
  public destinationCountries: String[];

  constructor(private freightsService: FreightsService) {
    console.log('%cFreightsComponent - created', 'color: red');
  }

  ngOnInit() {
    console.log('%cFreightsComponent - initialized', 'color: yellow');
    this.setState();
  }

  private setState() {
    this.searchFilters = new FreightSearchFilter();
    this.searchFilters.freightTypeFilters = Object.values(FreightType).filter(a => !Object.keys(FreightType).includes(a)) as FreightType[];
    this.searchFilters.destinationCountry = "";
    this.searchFilters.sourceCountry = "";

    this.searchFilters$ = new Observable<FreightSearchFilter>(e => this.searchFiltersEmiter = e);

    this.freightsService.getRows().subscribe((freights) => {
      this.freights = freights
      this.freightsService.getFreightsSourceCountries().subscribe((sourceCountries) => this.sourceCountries = sourceCountries);
      this.freightsService.getFreightsDestinationCountries().subscribe((destinationCountries) => {
        this.destinationCountries = destinationCountries;
        this.searchFiltersEmiter.next(this.searchFilters);
      });
    });
  }

  freightTypes(): FreightType[] {
    return Object.values(FreightType).filter(a => !Object.keys(FreightType).includes(a)) as FreightType[];
  }

  addFreightTypeFilter(type: FreightType) {
    if (!this.searchFilters.freightTypeFilters.includes(type)) {
      this.searchFilters.freightTypeFilters.push(type);
      this.searchFiltersEmiter.next(this.searchFilters);
    }
  }

  removeFreightTypeFilter(type: FreightType) {
    this.searchFilters.freightTypeFilters = this.searchFilters.freightTypeFilters.filter(filterType => filterType !== type);
    this.searchFiltersEmiter.next(this.searchFilters);
  }

  setFilterCountry(countryCode: string, freightLocalizationType: string) {
    switch (freightLocalizationType) {
      case "source":
        this.searchFilters.sourceCountry = countryCode;
        break;
      case "destination":
        this.searchFilters.destinationCountry = countryCode;
        break;
      default:
        break;
    }
    this.searchFiltersEmiter.next(this.searchFilters);
  }
}
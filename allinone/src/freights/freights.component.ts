import { Component } from "@angular/core";
import { FreightsService } from 'src/services/freights.service';
import { Freight, FreightType, FreightSearchFilter } from './models';
import { Observable, Subscriber, Subscription } from 'rxjs';

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
  private subscriptions = new Subscription();

  constructor(private freightsService: FreightsService) {
    console.log('%cFreightsComponent - created', 'color: red');
  }

  ngOnInit() {
    console.log('%cFreightsComponent - initialized', 'color: yellow');
    this.setState();
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

  private setState() {
    this.searchFilters = new FreightSearchFilter();
    this.searchFilters.freightTypeFilters = Object.keys(FreightType);
    this.searchFilters.destinationCountry = "";
    this.searchFilters.sourceCountry = "";

    this.searchFilters$ = new Observable<FreightSearchFilter>(e => this.searchFiltersEmiter = e);

    this.subscriptions.add(
      this.freightsService.getRows().subscribe((freights) => {
        this.freights = freights
        this.sourceCountries = freights.map(freight => freight.source.country)
        this.destinationCountries = freights.map(freight => freight.destination.country);
        setTimeout(() => {
          this.searchFiltersEmiter.next(this.searchFilters);
        })
      })
    );
  }

  freightTypes(): string[] {
    return Object.keys(FreightType);
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
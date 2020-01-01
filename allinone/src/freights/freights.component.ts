import { Component } from "@angular/core";
import { Freight } from './models/freight';
import { FreightsService } from 'src/services/freights.service';
import { FreightType } from './models/freightType';

@Component({
    templateUrl: 'freights.component.html'
})


export class FreightsComponent {
    title = 'allinone';
    public freights : Freight[];
    public selectedFreight: Freight;
    public freightTypeFilters : FreightType[];

    constructor(private freightsService : FreightsService){
      console.log('%cFreightsComponent - created', 'color: red');
    }

  ngOnInit() {
    console.log('%cFreightsComponent - initialized', 'color: yellow');
    this.setState();
  }

  private setState() {
    this.freightSearchFilters = new FreightSearchFilter();
    this.freightSearchFilters.freightTypeFilters = Object.values(FreightType).filter(a => !Object.keys(FreightType).includes(a));
    this.freightSearchFilters.destinationCountry = "";
    this.freightSearchFilters.sourceCountry = "";

    this.freightsService.getRows().subscribe((freights) => {this.freights = freights});
    this.freightsService.getFreightsSourceCountries().subscribe((sourceCountries) => this.sourceCountries = sourceCountries);
    this.freightsService.getFreightsDestinationCountries().subscribe((destinationCountries) => this.destinationCountries = destinationCountries);
  }

  freightTypes(): FreightType[] {
    return Object.values(FreightType).filter(a => !Object.keys(FreightType).includes(a));
  }

  addFreightTypeFilter(type: FreightType) {
    if (!this.freightSearchFilters.freightTypeFilters.includes(type)) {
      var filtersDeepCopy = JSON.parse(JSON.stringify(this.freightSearchFilters));

      let tempTable = filtersDeepCopy.freightTypeFilters.slice(0);
      tempTable.push(type);
      filtersDeepCopy.freightTypeFilters = tempTable;

      this.freightSearchFilters = filtersDeepCopy;
    }

    freightTypes() : FreightType[]{
      return Object.values(FreightType).filter(a => !Object.keys(FreightType).includes(a));
    }
  
    addFreightTypeFilter(type : FreightType){
      if(!this.freightTypeFilters.includes(type)){
        let tempTable = this.freightTypeFilters.slice(0);
        tempTable.push(type);

        this.freightTypeFilters = tempTable;
      }
    }
  
    removeFreightTypeFilter(type : FreightType){
      this.freightTypeFilters = this.freightTypeFilters.filter(filterType => filterType !== type)
    }
}
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

    ngOnInit(){
      console.log('%cFreightsComponent - initialized', 'color: yellow');
      this.freightsService.getRows().subscribe((freights) => {this.freights = freights;});
      this.freightTypeFilters = Object.values(FreightType).filter(a => !Object.keys(FreightType).includes(a));
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
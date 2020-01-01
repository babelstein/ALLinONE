import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { PriceCalculator, priceCalculatorFactory } from 'src/shared';
import { FreightSearchFilter, Freight } from 'src/freights/models';

@Component({
  selector: 'freight-list',
  templateUrl: './freight-list.component.html',
  providers: [{ provide: PriceCalculator, useFactory: priceCalculatorFactory, deps: [AuthService]}]
})
export class FreightListComponent implements OnInit, OnChanges {
  @Input() freights : Freight[];
  @Input() filters : FreightSearchFilter;
  @Output() freightSelectedEvent = new EventEmitter<Freight>();
  resultFreights : Freight[] = [];

  constructor(private authService: AuthService, private priceCalculator : PriceCalculator){
    console.log(priceCalculator.CalculcatePrice(1));
    console.log('%cFreightListComponent - created', 'color: red');
  }

  ngOnInit() {
    console.log('%cFreightListComponent - initialized', 'color: yellow');
  }

  ngOnChanges(){
    if(this.freights){
      this.filterFreights(this.filters);
    }
  }

  filterFreights(filters: FreightSearchFilter){
     let resultSet = this.freights.filter(freight => {return filters.freightTypeFilters.includes(freight.Type)});
     if(filters.sourceCountry !== ""){
       resultSet = resultSet.filter(freight => {return freight.Source.Country === filters.sourceCountry});
     }
     if(filters.destinationCountry !== ""){
      resultSet = resultSet.filter(freight => {return freight.Destination.Country === filters.destinationCountry});
    }

     this.resultFreights = resultSet;
  }

  canModify(freightUserId : number) : boolean{
    let authenticatedUser = this.authService.getAuthenticatedUser();
    return authenticatedUser !== null ? authenticatedUser.id === freightUserId : false;
  }
}
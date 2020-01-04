import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { PriceCalculator, priceCalculatorFactory } from 'src/shared';
import { FreightSearchFilter, Freight } from 'src/freights/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'freight-list',
  templateUrl: './freight-list.component.html',
  providers: [{ provide: PriceCalculator, useFactory: priceCalculatorFactory, deps: [AuthService]}]
})
export class FreightListComponent implements OnInit{
  @Input() freights : Freight[];
  @Input() filters : Observable<FreightSearchFilter>;
  @Output() freightSelectedEvent = new EventEmitter<Freight>();
  resultFreights : Freight[] = [];

  constructor(private authService: AuthService, private priceCalculator : PriceCalculator){
    console.log(priceCalculator.CalculcatePrice(1));
    console.log('%cFreightListComponent - created', 'color: red');
  }

  ngOnInit() {
    console.log('%cFreightListComponent - initialized', 'color: yellow');
    this.filters.subscribe((updatedFilters) => this.filterFreights(updatedFilters));
  }

  filterFreights(filters: FreightSearchFilter){
     let resultSet = this.freights.filter(freight => {return filters.freightTypeFilters.includes(freight.type)});
     if(filters.sourceCountry !== ""){
       resultSet = resultSet.filter(freight => {return freight.source.country === filters.sourceCountry});
     }
     if(filters.destinationCountry !== ""){
      resultSet = resultSet.filter(freight => {return freight.destination.country === filters.destinationCountry});
    }
    
     this.resultFreights = resultSet;
  }

  canModify(freightUserId : number) : boolean{
    let authenticatedUser = this.authService.getAuthenticatedUser();
    return authenticatedUser !== null ? authenticatedUser.id === freightUserId : false;
  }
}
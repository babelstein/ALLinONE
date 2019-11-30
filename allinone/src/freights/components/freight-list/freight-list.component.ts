import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Freight } from '../../Models/freight';
import { FreightType } from 'src/freights/Models/freightType';

@Component({
  selector: 'freight-list',
  templateUrl: './freight-list.component.html'
})
export class FreightListComponent implements OnInit, OnChanges {
  @Input() freights : Freight[];
  @Input() filterType : FreightType[];
  @Output() freightSelectedEvent = new EventEmitter<Freight>();
  resultFreights : Freight[] = [];

  constructor(){
    console.log('%cFreightListComponent - created', 'color: red');
  }

  ngOnInit() {
    console.log('%cFreightListComponent - initialized', 'color: yellow');
  }

  ngOnChanges(){
    if(this.freights){
      this.filterFreights(this.filterType);
    }
  }

  filterFreights(filterType){
    this.resultFreights = this.freights.filter(freight => {return filterType.includes(freight.Type)});
  }
}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Freight } from '../../Models/freight';

@Component({
  selector: 'freight-list',
  templateUrl: './freight-list.component.html'
})
export class FreightListComponent implements OnInit {
  @Input() freights : Freight[];
  @Output() freightSelectedEvent = new EventEmitter<Freight>();

  constructor(){
    console.log('%cRowListComponent - created', 'color: red');
  }

  ngOnInit() {
    console.log('%cRowListComponent - initialized', 'color: yellow');
  }
}
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FreightsService } from 'src/Services/freights.service';
import { Freight } from '../../Models/freight';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './freight-details.component.html'
})
export class FreightDetailsComponent implements OnInit {
  freight : Freight;
  @Output() freightEditedEvent = new EventEmitter<Freight>();
  
  constructor(
    private freightService : FreightsService, 
    private route:ActivatedRoute, 
    private router:Router) 
    { 
      console.log('%cRowDetailsComponent - created', 'color: red');
    }

  ngOnInit(){
    console.log('%cRowDetailsComponent - initialized' , 'color: yellow');
    let rowId = +this.route.snapshot.params['id'];
    this.freightService.getRow(rowId).subscribe((freight) => {this.freight = freight});
  }

  public saveFreight(){
    this.freightService.updateFreight(this.freight);
    this.freightEditedEvent.emit(this.freight);
    this.router.navigate(['/freights'])
  }
}
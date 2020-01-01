import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Freight } from 'src/freights/models';
import { FreightsService } from 'src/services/freights.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    templateUrl: './freight-edit.component.html'
})

export class FreightEditComponent implements OnInit{
    
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
    this.route.params.forEach((params: Params) => {
      this.freightService.Get(+params['id']).subscribe((freight) => {this.freight = freight});
    })
  }

  public saveFreight(){
    this.freightService.updateFreight(this.freight);
    this.freightEditedEvent.emit(this.freight);
    this.router.navigate(['/freights'])
  }

}
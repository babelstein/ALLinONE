import { Component } from "@angular/core";
import { Freight } from './Models/freight';
import { FreightsService } from 'src/Services/freights.service';

@Component({
    templateUrl: 'freights.component.html'
})


export class FreightsComponent {
    title = 'allinone';
    public freights : Freight[];
    public selectedFreight: Freight;
    constructor(private freightsService : FreightsService){
      console.log('%cFreightsComponent - created', 'color: red');
    }

    ngOnInit(){
      console.log('%cFreightsComponent - initialized', 'color: yellow');
      this.freightsService.getRows().subscribe((freights) => {this.freights = freights;});
    }
  
    public updateFreight(freightToUpdate : Freight){
      this.freightsService.updateFreight(freightToUpdate);
      this.selectedFreight = null;
    }
}
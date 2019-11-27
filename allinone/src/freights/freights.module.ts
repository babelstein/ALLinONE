import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FreightDetailsComponent } from './Components/freight-details/freight-details.component';
import { FreightListComponent } from './Components/freight-list/freight-list.component';
import { FreightsComponent } from './freights.component';
import { CommonModule } from '@angular/common';
import { FreightsRoutingModule } from './freights-routing.module';
import { FreightsRouteActivator } from 'src/Services/freights-route-activator.service';

@NgModule({
    declarations: [    
        FreightsComponent,
        FreightDetailsComponent,
        FreightListComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        FreightsRoutingModule
    ],
    providers: [FreightsRouteActivator],
    bootstrap: [FreightsComponent]
})
export class FreightsModule {
}

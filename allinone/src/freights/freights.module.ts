import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FreightDetailsComponent } from './components/freight-details/freight-details.component';
import { FreightListComponent } from './components/freight-list/freight-list.component';
import { FreightsComponent } from './freights.component';
import { CommonModule } from '@angular/common';
import { FreightsRoutingModule } from './freights-routing.module';
import { FreightExistsRouteActivator, CanEditFreightRouteActivator } from 'src/services/freights-route-activator.service';
import { FreightTypePipe } from 'src/shared/freightType.pipe';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
    declarations: [    
        FreightsComponent,
        FreightDetailsComponent,
        FreightListComponent,
        FreightTypePipe
    ],
    imports: [
        FormsModule,
        CommonModule,
        FreightsRoutingModule,
        MDBBootstrapModule.forRoot()
    ],
    providers: [
        FreightExistsRouteActivator,
        CanEditFreightRouteActivator
    ],
    bootstrap: [FreightsComponent]
})
export class FreightsModule {
}

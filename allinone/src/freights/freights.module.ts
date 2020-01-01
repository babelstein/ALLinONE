import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FreightDetailsComponent } from './components/freight-details/freight-details.component';
import { FreightListComponent } from './components/freight-list/freight-list.component';
import { FreightsComponent } from './freights.component';
import { CommonModule } from '@angular/common';
import { FreightsRoutingModule } from './freights-routing.module';
import { FreightExistsRouteActivator, CanEditFreightRouteActivator, IsUserAuthenticatedActivator } from 'src/services/freights-route-activator.service';
import { FreightTypePipe, FreightLocalizationPipe, ModalTriggerDirective, ModalComponent } from 'src/shared'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FreightEditComponent } from './components/frieght-edit/freight-edit.component';
import { FreightAddComponent } from './components/freight-add/freight-add.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [    
        FreightsComponent,
        FreightDetailsComponent,
        FreightListComponent,
        FreightEditComponent,
        FreightAddComponent,
        FreightTypePipe,
        FreightLocalizationPipe,
        ModalComponent,
        ModalTriggerDirective
    ],
    imports: [
        FormsModule,
        CommonModule,
        FreightsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MDBBootstrapModule.forRoot()
    ],
    providers: [
        FreightExistsRouteActivator,
        CanEditFreightRouteActivator,
        IsUserAuthenticatedActivator
    ],
    bootstrap: [FreightsComponent]
})
export class FreightsModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreightsComponent } from './freights.component';
import { FreightDetailsComponent } from './components/freight-details/freight-details.component';
import { FreightExistsRouteActivator, CanEditFreightRouteActivator } from '../services/freights-route-activator.service';

const routes : Routes = [
    {
        path: '',
        component: FreightsComponent
    },
    {
        path: ':id',
        component: FreightDetailsComponent,
        canActivate: [FreightExistsRouteActivator,CanEditFreightRouteActivator]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FreightsRoutingModule{}
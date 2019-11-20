import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreightsComponent } from './freights.component';
import { FreightDetailsComponent } from './Components/freight-details/freight-details.component';
import { FreightsRouteActivator } from '../Services/freights-route-activator.service';

const routes : Routes = [
    {
        path: '',
        component: FreightsComponent
    },
    {
        path: ':id',
        component: FreightDetailsComponent,
        canActivate: [FreightsRouteActivator]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FreightsRoutingModule{}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreightsComponent } from './freights.component';
import { FreightDetailsComponent } from './components/freight-details/freight-details.component';
import { FreightExistsRouteActivator, CanEditFreightRouteActivator, IsUserAuthenticatedActivator } from '../services/freights-route-activator.service';
import { FreightEditComponent } from './components/frieght-edit/freight-edit.component';
import { FreightAddComponent } from './components/freight-add/freight-add.component';

const routes : Routes = [
    {
        path: '',
        component: FreightsComponent
    },
    {
        path: 'edit/:id',
        component: FreightEditComponent,
        canActivate: [FreightExistsRouteActivator,CanEditFreightRouteActivator]
    },
    {
        path: 'new',
        component: FreightAddComponent,
        canActivate: [IsUserAuthenticatedActivator]
    },
    {
        path: ':id',
        component: FreightDetailsComponent,
        canActivate: [FreightExistsRouteActivator]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FreightsRoutingModule{}
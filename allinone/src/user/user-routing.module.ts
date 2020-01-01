import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { UserDetailsComponent } from './details.component';
import { NgModule } from '@angular/core';
import { UserLoggedInRouteActivator } from 'src/shared';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'details',
        component: UserDetailsComponent,
        canActivate: [UserLoggedInRouteActivator]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule{}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from 'src/errors/404.component';

const routes: Routes = [
  {
    path: '404',
    component: Error404Component
  },
  {
    path: 'freights', 
    loadChildren: () => import('../freights/freights.module').then(mod => mod.FreightsModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../user/user.module').then(mod => mod.UserModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

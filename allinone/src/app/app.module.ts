import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from 'src/errors/404.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { AuthService } from 'src/services/auth.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { JQ_TOKEN, TOASTR_TOKEN, IToastr, UserLoggedInRouteActivator } from 'src/shared';

let toastr: IToastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    AuthService,
    UserLoggedInRouteActivator,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

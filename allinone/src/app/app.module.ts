import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from 'src/errors/404.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { AuthService } from 'src/services/auth.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { JQ_TOKEN, TOASTR_TOKEN, IToastr, UserLoggedInRouteActivator } from 'src/shared';
import { HttpClientModule } from '@angular/common/http';

let toastr: IToastr = window['toastr'];

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    AuthService,
    { provide: TOASTR_TOKEN, useValue: toastr }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

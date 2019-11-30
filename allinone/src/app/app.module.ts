import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from 'src/errors/404.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { AuthService } from 'src/services/auth.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TOASTR_TOKEN, IToastr } from 'src/shared/toastr.service';

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
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    AuthService,
    { provide: TOASTR_TOKEN, useValue: toastr }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

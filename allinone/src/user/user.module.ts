import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login.component';
import { UserDetailsComponent } from './details.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

@NgModule({
    declarations: [
        UserComponent,
        LoginComponent,
        UserDetailsComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UserRoutingModule,
    ],
    providers: [],
    bootstrap: [LoginComponent]
})

export class UserModule{
}
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
    templateUrl: 'login.component.html',
    styles: [`
        .error { background-color: #E3C3C5;}
    `]
})

export class LoginComponent implements OnInit {
    loginFormGroup : FormGroup;
    invalidCredentials: boolean = false;

    ngOnInit(): void {
        this.loginFormGroup = new FormGroup({
            login: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    constructor(private router: Router, private authService : AuthService){}

    cancel(){
        this.router.navigate(['']);
    }

    login(){
        if(this.loginFormGroup.valid)
        {
            this.invalidCredentials = false;
            if(this.authService.login(this.loginFormGroup.value))
            {
                this.router.navigate(['freights']);
            }
            else{
                this.invalidCredentials = true;
            }
        }
    }

    isLoginFieldInvalid(){
        return this.loginFormGroup.controls.login.dirty && !this.loginFormGroup.controls.login.valid;
    }

    isPasswordFieldInvalid(){
        return this.loginFormGroup.controls.password.dirty && !this.loginFormGroup.controls.password.valid;
    }
}
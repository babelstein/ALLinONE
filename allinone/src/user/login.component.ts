import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup, Validator } from '@angular/forms';
import { registerContentQuery } from '@angular/core/src/render3';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    loginFormGroup : FormGroup;

    ngOnInit(): void {
        this.loginFormGroup = new FormGroup({
            login: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    constructor(private router: Router){}

    cancel(){
        this.router.navigate(['']);
    }

    login(){
        if(this.loginFormGroup.valid)
        {
            console.log(this.loginFormGroup.value);
            this.router.navigate(['freights']);
        }
    }
}
import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { IToastr, TOASTR_TOKEN } from 'src/shared/toastr.service';

@Component({
    templateUrl: 'details.component.html'
})

export class UserDetailsComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private router: Router,
        @Inject(TOASTR_TOKEN) private toastrService: IToastr){

    }
    
    userDetailsForm: FormGroup;

    ngOnInit(): void {
        this.userDetailsForm = new FormGroup({
            firstName: new FormControl(this.authService.userDetails.firstName),
            lastName: new FormControl(this.authService.userDetails.lastName)
        });
    }

    cancel(){
        this.router.navigate(['']);
    }

    save(formValues){
        this.authService.userDetails.firstName = formValues.firstName;
        this.authService.userDetails.lastName = formValues.lastName;
        this.toastrService.success("Pofile updated");
    }
}
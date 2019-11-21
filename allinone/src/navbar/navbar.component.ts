import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './navbar.component.html',
    selector: 'navbar-top'
})

export class NavbarComponent implements OnInit {
    constructor(private authService : AuthService, private router:Router){
    }

    isAuthorized() : boolean{
        return this.authService.isAuthenticated;
    }

    getUserName() : string{
        if(this.authService.isAuthenticated)
        {
            return this.authService.userDetails.firstName;
        }
        return "";
    }

    logout(){
        this.authService.logout()
        this.router.navigate([""]);
    }

    ngOnInit(): void {
    }
}
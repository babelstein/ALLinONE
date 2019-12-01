import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
    isAuthenticated : boolean = false;
    userDetails : IUser 
    login(loginFormValues){
        if(loginFormValues.login === "galakpizza")
        {
            this.isAuthenticated = true;
            this.userDetails = {            
                firstName: "Domino",
                lastName: "Bonczur",
                id: 1,
                username: "galakpizza"
            }    
        }

        return this.isAuthenticated;
    }

    getAuthenticatedUser() : IUser{
        if (this.isAuthenticated){
            return this.userDetails;
        }else{
            return null;
        }
    }

    logout() {
        this.isAuthenticated = false;
        this.userDetails = undefined;
    }
}
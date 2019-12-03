import { Injectable } from '@angular/core';
import { IUser } from 'src/user/models/user';
import { UserType } from 'src/user/models/userType';

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
                username: "galakpizza",
                userType: UserType.Employee
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
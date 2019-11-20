import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    ngOnInit(): void {
        console.log('%cUserComponent - initialized', 'color: yellow');
    }
    user : IUser;
}
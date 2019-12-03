import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/user/models/user';

@Component({
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    ngOnInit(): void {
        console.log('%cUserComponent - initialized', 'color: yellow');
    }
    user : IUser;
}
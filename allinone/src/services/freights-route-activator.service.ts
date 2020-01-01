import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FreightsService as FreightsRowService, FreightsService } from './freights.service';
import { AuthService } from './auth.service';
import { Freight } from 'src/freights/models/freight';

@Injectable()
export class FreightExistsRouteActivator implements CanActivate{
    constructor(private freightService: FreightsRowService, private router: Router){

    }

    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let rowExists = false;
        this.freightService.Get(+route.params['id']).subscribe((row) => { rowExists = !!row})
        
        if(rowExists){
            return true;
        }
        else{
            this.router.navigate(['404']);
        }
    }
}

@Injectable()
export class CanEditFreightRouteActivator implements CanActivate {
    private _freight: Freight;

    constructor(
        private freightService: FreightsService,
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        this.freightService.Get(+route.params['id']).subscribe((freight) => { this._freight = freight })
        let authenticatedUser = this.authService.getAuthenticatedUser();
        if (authenticatedUser !== null && this._freight !== null) {
            return authenticatedUser.id === this._freight.userId
        }
        else {
            this.router.navigate(['freights']);
        }
    }
}

@Injectable()
export class IsUserAuthenticatedActivator implements CanActivate{

    constructor(private authService : AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let authenticatedUser = this.authService.getAuthenticatedUser();
        if (authenticatedUser !== null) {
            return true;
        }else{
            this.router.navigate(['user','login'], { queryParams: { returnUrl: state.url }});
        }
    }
}
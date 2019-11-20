import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FreightsService as FreightsRowService } from './freights.service';

@Injectable()
export class FreightsRouteActivator implements CanActivate{
    constructor(private freightService: FreightsRowService, private router: Router){

    }

    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let rowExists = false;
        this.freightService.getRow(+route.params['id']).subscribe((row) => { rowExists = !!row})
        
        if(rowExists){
            return true;
        }
        else{
            this.router.navigate(['404']);
        }
    }
}
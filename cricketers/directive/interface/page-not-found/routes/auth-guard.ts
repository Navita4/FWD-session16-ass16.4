import {Component,Injectable} from '@angular/core';
import {ActivatedRouteSnapShot,Router,RouterStateSnapShot,CanActivate} from '@angular/router';

@Injectable()
export class AuthGuardComponent implements CanActivate{
    constructor(private _router:Router){}
    canActivate(next:ActivatedRouteSnapShot,state:RouterStateSnapShot){
        if(sessionStorage.getItem('access _token')){
            return true;
        };
        this._router.navigate(['/login']);
        return false;
    }
}
import {Injectable} from '@angular/core';
import {Resolve,ActivatedRouteSnapShot,RouterStateSnapShot} from '@angular/router';
import {Observable} from 'rxjx/observable';
import {CricketerDropDownService} from 'app/services/cricketer-drop.down.service';

@Injectable()
export class PlayerTypeResolveService implements Resolve<any>{
    constructor(private _cricketerDropDown:CricketerDropDownService){}
    resolve (route:ActivatedRouteSnapShot){
        return this._cricketerDropDown:CricketerDropDown.getPlayerType();
    }
}
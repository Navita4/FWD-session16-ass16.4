import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/observable';
import {CanDeactivate} from '@angular/router';

export interface CanComponentDeactivate{

    CanDeactivate:()=> Observable<boolean>|Promise<boolean>|boolean;
}
@Injectable()
export class UnsavedchangesGuardService implements CanDeactivate<CanComponentDeactivate>{

    canDeactivate(component:CanComponentDeactivate){

        return component.CanDeactivate?component.CanDeactivate():true;
    }
}
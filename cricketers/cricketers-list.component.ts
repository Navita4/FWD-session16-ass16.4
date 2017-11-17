import {ICricketList} from './../interface/cricketer-list';
import {Component,OnInit,Input} from '@angular/core';
import {CricketerService} from 'app/services/cricketer.service';
@Component({
    selector:'app-cricketers-list',
    templateUrl:'./cricketers-list.component.html',
    styleUrls:['./cricketers-list.component.css']

})
export class cricketersListComponent implements OnInit{
    cricketerDetail:ICricketList[];
/** Using constructor call cricketservice */

constructor(private _cricketService:cricketerService){}

/** get the cricketerDetail from cricketer-app */
private searchData:string;
private imgurl="https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg";

ngOnInit(){
    this.searchData="";
    this.cricketerDetail=this._cricketService;
    getcricketerList();
};
}
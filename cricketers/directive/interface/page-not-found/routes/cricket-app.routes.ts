import {RouterModule,Routes} from '@angular/router';
import {CricketerListComponent} from 'app/cricketers/cricketers-list.component';
import {CricketerComponent} from 'app/cricketer/cricketer.component';
import {CricketerDetailComponent} from 'app/cricketer-detail/cricketer-detail.component';
import {PageNotFoundComponent} from 'app/page-not-found/page-not-found.component';
import {AuthGuardComponent} from 'app/routes/auth-guard';
import {LoginComponent} from 'app/login/login.component';
import {UnsavedchangesGuardService} from 'app/routes/unsavedchanges-guard';
import {PlayerTypeResolveService} from 'app/routes/playertype.resolve.service';

const routes:Routes=[{

    path:'',redirectTo:'/cricketer',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'cricketer', component:CricketerComponent},
    canActivate:[AuthGuardComponent],
    canDeactivate:[UnsavedchangesGuardService],
    data:{
        message:'Add a cricketer'
    },
    resolve:{playerType:PlayerTypeResolveService},
    {path:cricketerList,component:CricketerListComponent},
    {path:CricketerDetail/:id,component:CricketerDetailComponent},
    {path:'**',component:PageNotFoundComponent}
];

export const appRouting=RouterModule.forRoot(routes);
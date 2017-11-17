import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {CricketerComponent} './cricketers/cricketers-list.component';

import { AppComponent } from './cricketer-app.component';
import {MyHighlighterDirective} from './app/directive/my-highlighter.directive';
import {CricketerDropDownService} from 'app/services/cricketer-drop-down.service';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './pipes/search.pipe';
import {OrderByPipe} from './pipes/order-by.pipe';
import {CricketerComponent} from 'app/cricketer/cricketer.component';
import {appRouting} from 'app/routes/cricket-app.routes';
import {CricketerService} from 'app/services/cricketer.service';
import {CricketerDetailComponent} from './cricketer-detail/cricketer-detail.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardComponent} from './routes/auth-guard';
import {UnsavedchangesGuardService} from 'app/routes/unsavedchanges.guard';
import {PlayerTypeResolveService} from 'app/routes/playertype.resolve.service';


@NgModule({
  declarations: [
    AppComponent,
    HttpModule,
    CricketerComponent,
    MyHighlighterDirective,
    CricketerDropDownService,
    FormsModule,
    SearchPipe,
    OrderByPipe,
    CricketerComponent,
    appRouting,
    CricketerService,
    CricketerDetailComponent,
    PageNotFoundComponent,
    LoginComponent,
    AuthGuardComponent,
    UnsavedchangesGuardService,
    PlayerTypeResolveService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,

  ],
  providers: [CricketerDropDownService,CricketerService,AuthGuardComponent,UnsavedchangesGuardService,PlayerTypeResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }

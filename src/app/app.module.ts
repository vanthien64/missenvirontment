import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cadidate } from './candidate/cadidate.component';
import { Homepage } from './homepage/homepage.component';
import { Login } from './login/login.component';
import {Competition} from './competition/competition.component';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    Homepage,
    Cadidate,
    Competition
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cadidate } from './candidate/cadidate.component';
import { Homepage } from './homepage/homepage.component';
import { Login } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    Homepage,
    Cadidate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

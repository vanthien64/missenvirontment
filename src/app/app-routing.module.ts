import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cadidate } from './candidate/cadidate.component';
import { Homepage } from './homepage/homepage.component';
import { Login } from './login/login.component';

const routes: Routes = [
  { path:"login",component:Login},
  { path:"homepage",component:Homepage},
  { path:'cadidate', component:Cadidate}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

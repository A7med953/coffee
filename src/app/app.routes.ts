import { Routes } from '@angular/router';

import { HomeLoginComponent } from './home-login/home-login.component';
import { HomeComponent } from './pages/home/home.component';



export const routes: Routes = [
{ path:'',redirectTo:'home',pathMatch:'full'},
{path:'home', component:HomeComponent},
{path:'login',component:HomeLoginComponent}
];

import { Routes } from '@angular/router';
import { Login } from './login/login'; 
import { Stran0 } from './stran0/stran0'; 

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component: Login,
    },
    {
        path:'stran0',
        component: Stran0,
    }
];

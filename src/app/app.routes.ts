import { Routes } from '@angular/router';
import { Login } from './login/login'; 
import { Tabela } from './tabela/tabela';
import { Stran0 } from './stran0/stran0'; 
import { Stran1 } from './stran1/stran1';
import { Stranm1 } from './stranm1/stranm1';


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
        path:'tabela',
        component: Tabela,
    },
    {
        path:'stran0',
        component: Stran0,
    },
    {
        path:'stran1',
        component: Stran1,
    },
    {
        path:'stranm1',
        component: Stranm1,
    }
];

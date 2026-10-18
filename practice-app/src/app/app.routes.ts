import { Routes } from '@angular/router';
import { LandingPage } from './features/landing-page/landing-page';
import { Menu } from './features/menu/menu';

export const routes: Routes = [
    
    {
        path: '',
        component:LandingPage
    },
    {
        path: 'menu',
        component: Menu
    }
];

import { Routes } from '@angular/router';
import { MainComponent } from '../auth/main/main.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>  MainComponent
    }
];

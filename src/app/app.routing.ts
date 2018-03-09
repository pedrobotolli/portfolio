import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetosComponent } from './projetos/projetos.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: '/projetos', component: ProjetosComponent },
    { path: '/', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

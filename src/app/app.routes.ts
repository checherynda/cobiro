import { Route, Routes } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { WebsitesComponent } from './websites/websites.component';

import { AuthGuard } from './guards/auth.guard';

const indexRoute: Route = {
    path: '',
    redirectTo: '/websites',
    pathMatch: 'full'
};

const fallbackRoute: Route = {
    path: '**',
    redirectTo: '/websites',
    pathMatch: 'full'
};

export const AppRoutes: Routes = [
    { path: 'register', component: RegistrationComponent },
    { path: 'websites', component: WebsitesComponent, canActivate: [AuthGuard] },
    indexRoute,
    fallbackRoute
];

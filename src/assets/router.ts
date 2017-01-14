import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './../app/login/login.component';
import { HomeComponent } from '../app/home/home.component';
import { SignComponent } from '../app/sign/sign.component';

import { IsUserLoggedIn } from '../app/services/user/user.service';

import { CShellComponent } from '../app/clientshell/clientshell.component';
import { ClientComponent } from '../app/clientshell/client/client.component';
import { ClientdetailComponent } from '../app/clientshell/clientdetail/clientdetail.component';

const rootRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [IsUserLoggedIn] },
    { path: 'sign', component: SignComponent },
    { path: 'client', component: CShellComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
]

export const rootRouter = RouterModule.forRoot(rootRoutes);

const childRoutes: Routes = [
    {
        path: 'client', children: [
            { path: '', component: ClientComponent },
            { path: ':id', component: ClientdetailComponent}
        ]
    }
];

export const childRouter = RouterModule.forChild(childRoutes);

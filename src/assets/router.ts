import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './../app/login/login.component';
import { SignComponent } from '../app/sign/sign.component';

import { IsUserLoggedIn } from '../app/services/user/user.service';

import { CShellComponent } from '../app/clientshell/clientshell.component';
import { ClientComponent } from '../app/clientshell/client/client.component';
import { ClientdetailComponent } from '../app/clientshell/clientdetail/clientdetail.component';
import { MenuComponent } from '../app/homeshell/menu/menu.component';
import { HShellComponent } from '../app/homeshell/hshell.component';

const rootRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'home', component: HShellComponent, canActivate: [IsUserLoggedIn],
        children: [
            { path: '', component: HShellComponent, outlet: 'inside' },
            { path: 'menu', component: MenuComponent, outlet: 'inside' },
            { path: 'client', component: CShellComponent, outlet: 'inside'},
            { path: 'client/:add', component: ClientdetailComponent, outlet: 'inside'}
        ]
    },
    { path: 'sign', component: SignComponent },
    { path: '**', redirectTo: 'home' }
];

export const rootRouter = RouterModule.forRoot(rootRoutes);
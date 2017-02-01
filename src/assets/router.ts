import { ShellComponent } from './../app/homeshell/shell/shell.component';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './../app/login/login.component';
import { SignComponent } from '../app/sign/sign.component';

import { IsUserLoggedIn } from '../app/services/user/user.service';

import { MenuComponent } from '../app/homeshell/menu/menu.component';
import { HShellComponent } from '../app/homeshell/hshell.component';

const rootRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'home', component: HShellComponent, canActivate: [IsUserLoggedIn],
        children: [
            { path: '', component: HShellComponent, outlet: 'inside' },
            { path: 'menu', component: MenuComponent, outlet: 'inside' },
            { path: 'shell', component: ShellComponent, outlet: 'inside'}
        ]
    },
    { path: 'sign', component: SignComponent },
    { path: '**', redirectTo: 'home' }
];

export const rootRouter = RouterModule.forRoot(rootRoutes);
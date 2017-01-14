import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './../app/login/login.component';
import { HomeComponent } from '../app/home/home.component';
import { IsUserLoggedIn } from '../app/services/user/user.service';
import { SignComponent } from '../app/sign/sign.component';

const theRouter: Routes = [
    {path: 'login', component: LoginComponent },
    {path: 'home', component: HomeComponent, canActivate: [IsUserLoggedIn] },
    {path: 'sign', component: SignComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
]

export const rootRouter = RouterModule.forRoot(theRouter);
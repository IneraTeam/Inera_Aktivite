import { SignComponent } from './../app/sign/sign.component';
import { IsauthService } from './../app/services/isauth/isauth.service';
import { HomeComponent } from './../app/home/home.component';
import { LoginComponent } from './../app/login/login.component';
import { Routes } from '@angular/router';

export const theRouter: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'sign', component: SignComponent },
    { path: 'home', component: HomeComponent, canActivate: [IsauthService] },
    { path: '**', redirectTo: 'login' }
]
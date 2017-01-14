import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routerInit } from '../assets/router';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { firebaseInit } from '../assets/firebase';
import { UserService, IsUserLoggedIn } from './services/user/user.service';
import { HomeComponent } from './home/home.component';
import { SignComponent } from './sign/sign.component';
import { CapitalizePipe } from './pipes/capitalize';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routerInit,
    firebaseInit
  ],
  providers: [AuthService, UserService, IsUserLoggedIn],
  bootstrap: [AppComponent]
})
export class AppModule { }

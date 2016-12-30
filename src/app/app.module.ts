import { firebaseConfig } from './../assets/firebaseconfig';
import { IsauthService } from './services/isauth/isauth.service';
import { AuthService } from './services/auth/auth.service';
import { theRouter } from './../assets/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule, AuthProviders, AuthMethods, FIREBASE_PROVIDERS } from 'angularfire2';

 export const config = {
    apiKey: "AIzaSyAd7cUm4qlXG1Q2xDV-rTiHSgluz6Ol0hA",
    authDomain: "inera1-e7f24.firebaseapp.com",
    databaseURL: "https://inera1-e7f24.firebaseio.com",
    storageBucket: "inera1-e7f24.appspot.com",
    messagingSenderId: "510388167767"
  };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(theRouter),
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    })
  ],
  providers: [AuthService, IsauthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

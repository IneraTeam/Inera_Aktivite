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
    RouterModule.forRoot(theRouter)
  ],
  providers: [AuthService, IsauthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

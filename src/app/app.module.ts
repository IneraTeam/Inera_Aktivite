import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { rootRouter } from '../assets/router';
import { firebaseInit } from '../assets/firebase';
import { rootComponents, pipes, rootServices } from './services/moduleItems';
import { InModule } from './services/in.module';

@NgModule({
  declarations: [
    AppComponent,
    rootComponents,
    pipes
  ],
  imports: [
    BrowserModule,
    InModule,
    FormsModule,
    HttpModule,
    rootRouter,
    firebaseInit
  ],
  providers: [rootServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

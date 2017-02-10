import { ActshellComponent } from './actshell/actshell.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { rootRouter } from '../assets/router';
import { firebaseInit } from '../assets/firebase';
import { InModule } from './modules/in.module';
import { rootComponents, rootServices, pipes } from './modules/rootItems';

@NgModule({
  declarations: [
    AppComponent,
    rootComponents,
    pipes,
    ActshellComponent
  ],
  imports: [
    BrowserModule,
    InModule,
    FormsModule,
    HttpModule,
    rootRouter,
    firebaseInit,
  ],
  providers: [rootServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
// routes
// client components
// services
import { UserService } from '../services/user/user.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { ShellComponent } from '../homeshell/shell/shell.component';
import { SDetailComponent } from '../homeshell/sdetail/sdetail.component';
import { SettingsComponent } from '../homeshell/settings/settings.component';

@NgModule({
  declarations: [
    ShellComponent,
    SDetailComponent,
    SettingsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: []
})
export class InModule { }

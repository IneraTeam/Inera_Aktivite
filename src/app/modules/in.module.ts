import { FormsModule } from '@angular/forms';
import { DetailComponent } from './../homeshell/shell/detail_items/detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { ThumbClient } from './../homeshell/shell/thumb_items/thumb/thumb.component';
import { ShellComponent } from './../homeshell/shell/shell.component';
import { NgModule } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

@NgModule({
  declarations: [
    ShellComponent,
    ThumbClient,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [UserService],
  bootstrap: []
})
export class InModule { }

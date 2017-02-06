import { FormsModule } from '@angular/forms';
import { DetailComponent } from './../homeshell/shell/detail_items/detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { ThumbClient } from './../homeshell/shell/thumb_items/thumb/thumb.component';
import { ShellComponent } from './../homeshell/shell/shell.component';
import { NgModule } from '@angular/core';
import { UserService } from '../services/user/user.service';

@NgModule({
  declarations: [
    ShellComponent,
    ThumbClient,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: []
})
export class InModule { }

import { ListComponent } from './../homeshell/shell/list/list.component';
import { ShellComponent } from './../homeshell/shell/shell.component';
import { NgModule } from '@angular/core';
// routes
// client components
// services
import { UserService } from '../services/user/user.service';

@NgModule({
  declarations: [
    ShellComponent,
    ListComponent
  ],
  imports: [
  ],
  providers: [UserService],
  bootstrap: []
})
export class InModule { }

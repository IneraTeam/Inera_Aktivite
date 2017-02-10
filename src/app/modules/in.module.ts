import { NgModule } from '@angular/core';
// routes
// client components
import { ClientComponent } from '../clientshell/client/client.component';
import { ClientdetailComponent } from '../clientshell/clientdetail/clientdetail.component';
import { CShellComponent } from '../clientshell/clientshell.component';
// services
import { UserService } from '../services/user/user.service';

@NgModule({
  declarations: [
    ClientComponent,
    CShellComponent,
    ClientdetailComponent
  ],
  imports: [
  ],
  providers: [UserService],
  bootstrap: []
})
export class InModule { }

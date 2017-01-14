import { NgModule } from '@angular/core';
import { childRouter } from '../../assets/router';

import { ClientComponent } from '../clientshell/client/client.component';
import { ClientdetailComponent } from '../clientshell/clientdetail/clientdetail.component';
import { CShellComponent } from '../clientshell/clientshell.component';

@NgModule({
  declarations: [
    ClientComponent,
    CShellComponent,
    ClientdetailComponent
  ],
  imports: [
    childRouter
  ],
  providers: [],
  bootstrap: []
})
export class InModule { }

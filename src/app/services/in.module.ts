import { NgModule } from '@angular/core';
import { CShellComponent } from '../clientshell/clientshell.component';
import { childRouter } from '../../assets/router';
import { ClientComponent } from '../clientshell/client/client.component';
import { ClientdetailComponent } from '../clientdetail/clientdetail.component';

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

import { async } from '@angular/core/testing';
import { AuthService } from './../../services/auth/auth.service';
import { UserService } from './../../services/user/user.service';
import { Component } from '@angular/core';
import { FirebaseListObservable, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-shell',
  template: `
  <div class="client">
  <div class="input-group mb-2 mr-sm-2 mb-sm-0 search">
    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Ara">
    <i class="input-group-addon fa fa-search"></i>
  </div>
  <button class="btn btn-success add"> Ekle </button>
  <div class="list">
  <div class="list-group">
  <app-item class="list-group-item" 
    *ngFor = " let item of itemList | async" [item] = "item" [target] = "target"></app-item>
  </div>
  </div>
</div>
  `,
  styles: [`
    .input-group-addon { background-color: inherit;}
    .search { width: 70%; float:left; }
    button.add { line-height: 1.5; float:right; }
    div.list { width: 100%; float:left; }
    .client{ padding: 5px; }
  `]
})
export class ShellComponent {
  public target: string;
  public itemList: FirebaseListObservable<any[]>;
  constructor(public user: UserService) {
    user.pagetarget.subscribe(target => {
      this.target = target;
      this.itemList = this.user.db(target);
    });
  }

}

import { IClient } from './../../models/interfaces';
import { async } from '@angular/core/testing';
import { AuthService } from './../../services/auth/auth.service';
import { UserService } from './../../services/user/user.service';
import { Component, AfterContentInit } from '@angular/core';
import { FirebaseListObservable, AuthMethods } from 'angularfire2';


@Component({
  selector: 'app-shell',
  templateUrl: './shell.html',
  styleUrls: ['./shell.css']
})
export class ShellComponent implements AfterContentInit {
  public target: string;
  public w;
  public itemList: FirebaseListObservable<any[]>;
  constructor(public user: UserService) {
    this.w = new Framework7({
      router: true,
      material: true
    });
    user.pagetarget.subscribe(target => {
      this.target = target;
      this.itemList = this.user.db(target);
    });
  }

  ngAfterContentInit() {

  }

  addItem() {
    this.user.navInChild('shell/new', { 'title': this.addtitle(), 'path': this.target });
  }

  edit() {
    alert('edit');
  }

  delete(item: IClient) {
    this.user.db(`/clients/${item.$key}`).remove();
  }

  addtitle(): string {
    let add: string;
    this.user.pagetitle.subscribe(title => add = title.slice(0, -3) + ' Ekle');
    return add;
  }

  edittitle(): string {
    let edit: string;
    this.user.pagetitle.subscribe(title => edit = title.slice(0, -3) + ' Düzenle');
    return edit;
  }
}

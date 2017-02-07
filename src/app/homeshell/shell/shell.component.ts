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
  public isDataArrived = false;
  constructor(public user: UserService) {
    this.w = new Framework7({
      router: true,
      material: true
    });
    user.pagetarget.subscribe(target => {
      this.target = target;
      this.itemList = this.user.db(target);
      this.checkIfDataExist(this.itemList);
    });
  }

  ngAfterContentInit() {

  }

  addItem() {
    this.user.navInChild('shell/new',
      { 'title': this.addtitle(), 'path': this.target });
  }

  edit(item) {
    this.user.navInChild(`shell/${item.$key}`,
      { 'title': this.edittitle(), 'path': this.target });
  }

  delete(item: IClient) {
    this.user.db(`/clients/${item.$key}`).remove();
  }

  checkIfDataExist(fbList: FirebaseListObservable<any[]>) {
    fbList.$ref.once('value', snap => this.isDataArrived = snap.exists());
  }

  addtitle(): string {
    let add: string;
    this.user.pagetitle.subscribe(title => title ? add = title.slice(0, -3) + ' Ekle' : null);
    return add;
  }

  edittitle(): string {
    let edit: string;
    this.user.pagetitle.subscribe(title => title ? edit = title.slice(0, -3) + ' Düzenle' : null);
    return edit;
  }
}

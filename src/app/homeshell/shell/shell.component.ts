import { async } from '@angular/core/testing';
import { AuthService } from './../../services/auth/auth.service';
import { UserService } from './../../services/user/user.service';
import { Component, AfterContentInit } from '@angular/core';
import { FirebaseListObservable, AuthMethods } from 'angularfire2';


interface Framework7 {
  router: boolean;
  material: boolean;
}

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
}

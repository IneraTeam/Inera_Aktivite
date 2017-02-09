import { User } from './../models/classes';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  mail: string;
  preuser$key: string;
  constructor(private user: UserService) {
    this.user.queryparams.subscribe(param => {
      this.mail = param['mail'];
      this.preuser$key = param['key'];
    });
  }

  ngOnInit() {
  }

  signIn(formvalue): void {
    this.user.checkIfPreUser(formvalue.email)
      .take(1).subscribe(data => {
        this.user.createUser(formvalue)
          .then((userID) => {
            // user
            const preUserData = data[0];
            this.user.db(`users/${userID}`).push('')
              .ref.parent.set({
                'name': preUserData.fullname,
                'mail': preUserData.mail,
                'role': preUserData.role,
                'createdAt': preUserData.createdAt,
                'manager': preUserData.manager,
                'phone': preUserData.phone,
                'team': preUserData.team,
                'username': preUserData.username
              })
              .then(() => {
                // /users/ düğümü doldu
                const path = 'preusers/' + this.preuser$key;
                this.user.db(path).remove();
              }).then(() => {
                // /preusers'dan ilgili kayıt silindi
                this.user.basics.then(basics => {
                  // yeni user'ın bilgileri getirildi
                  this.user.setLocalInfo(basics['name'], basics['role'])
                    .then(() => this.user.navInChild());
                    // user home'a yönlendirildi
                });
              });
          }).catch(err => console.log('Error@signIn | sign.component.ts', err));
      });
  }
}

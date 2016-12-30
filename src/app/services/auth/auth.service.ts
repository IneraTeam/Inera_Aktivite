import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthService {
  public user = {};
  constructor(private af: AngularFire) {
    this.af.auth.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('currentUser', user.uid);
      } else {
        this.user = {};
        localStorage.removeItem('currentUser');
      }
    });
  }

  login(input) {
    this.af.auth.login(input).then(user => {
      this.user = user;
    })
    .catch(error => {
      console.log(error);
    });
  }

  logout() {
    this.af.auth.logout();
    localStorage.removeItem('currentUser');
  }
}

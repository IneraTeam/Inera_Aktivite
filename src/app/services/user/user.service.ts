import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, CanActivate } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class UserService {
  private userPath: string = '/users/';
  public currentPage: Subject<string>;
  constructor(private auth: AuthService, private router: Router, private location: Location) {
    this.currentPage = new Subject<string>();
  }

  get info(): firebase.Promise<any> {
    return this.auth.list(`${this.userPath}/${this.auth.id}`)
      .$ref.once('value');
  }

  get basics() {
    return this.info.then((snapshot) => {
      return {
        name: snapshot.child('/name/').val(),
        role: snapshot.child('/role/').val(),
      }
    });
  }

  login(param) {
    return this.auth.login(param)
      .then(() => this.navigateURL())
      .catch((err) => console.log(err));

  }

  createUser(param) {
    this.auth.addUser(param)
      .then(() => this.navigateURL())
      .catch((err) => console.log(err));
  }

  navigateURL(path?: string) {
    if (path) {
      this.router.navigate([path]);
    } else {
      this.basics.then(basics => {
        this.router.navigateByUrl(`/home/(inside:menu/${basics.role})`);
      });
    }
  }

  navigateBack() {
    this.location.back();
  }
}

@Injectable()
export class IsUserLoggedIn implements CanActivate {
  constructor(private router: Router, private af: AuthService) { }
  canActivate(): Observable<boolean> {
    return this.af.auth.map(authState => {
      !authState ?
        this.router.navigate(['/login']) : null;
      return !!authState;
    }).take(1);
  }
}

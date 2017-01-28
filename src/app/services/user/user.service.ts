import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, CanActivate, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';

@Injectable()
export class UserService {
  public currentPage: Subject<string>;
  constructor(private auth: AuthService, private router: Router, private location: Location) {
    this.currentPage = new Subject<string>();
  }

  get info(): firebase.Promise<any> {
    return this.auth.list(`/users/${this.auth.id}`)
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

  get routerEvent() {
    return this.router.events
      .filter(events => events instanceof NavigationEnd)
      .map( event => event.url);
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

  navigateURL(path?: string, title?: string) {
    if (path) {
      this.currentPage.next(title);
      this.router.navigateByUrl(path);
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
  constructor(private router: Router, private af: AuthService, public user: UserService) { }
  canActivate(): Observable<boolean> {
    return this.af.auth.map(authState => {
      !authState ?
        this.router.navigate(['/login']) : this.user.navigateURL();
      return !!authState;
    }).take(1);
  }
}

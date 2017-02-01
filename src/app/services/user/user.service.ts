import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, CanActivate, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';

@Injectable()
export class UserService {
  constructor(
    private auth: AuthService, private router: Router,
    private location: Location, private act: ActivatedRoute,
  ) {
  }

  get info(): firebase.Promise<any> {
    return this.auth.list(`/users/${this.auth.id}`)
      .$ref.once('value');
  }

  get basics() {
    return this.info.then((snapshot) => {
      const name = snapshot.child('/name/').val();
      const role = snapshot.child('/role/').val();
      return { name: name, role: role };
    });
  }

  get routerEvent() {
    return this.router.events
      .filter(events => events instanceof NavigationEnd)
      .map(event => event.url);
  }

  get local() {
    return localStorage.getItem('userInfo');
  }

  get name() {
    return JSON.parse(this.local)['name'];
  }

  get role() {
    return JSON.parse(this.local)['role'];
  }

  get pagetitle() {
    return this.act.queryParams.map(param => param['title']);
  }

  setLocalInfo(name: string, role: string): Promise<boolean> {
    localStorage.setItem('userInfo',
      JSON.stringify({ name: name, role: role }));
    return Promise.resolve();
  }

  login(param) {
    return this.auth.login(param)
      .then(() => {
        this.basics.then(basics => {
          this.setLocalInfo(basics.name, basics.role)
            .then(() => this.navInChild());
        });
      })
      .catch((err) => console.log(err));
  }

  createUser(param) {
    return this.auth.addUser(param)
      .then(() => {
        this.basics.then(basics => {
          this.setLocalInfo(basics.name, basics.role)
            .then(() => this.navInChild());
        });
      })
      .catch((err) => console.log(err));
  }

  navParentRoute(path: string) {
    this.router.navigate([path]);
  }

  navInChild(inPath?: string) {
    if (this.role) {
      this.router.navigate(['/home', {
        outlets: {
          'inside': !inPath ? 'menu' : inPath
        }
      }]);
    } else {
      console.log(' localStorage ile ilgili sıkınt');
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
      // last login date ? localStorage
      return !!authState;
    }).take(1);
  }
}

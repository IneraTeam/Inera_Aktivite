import { QueryParams } from './../../models/interfaces';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, CanActivate, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';

@Injectable()
export class UserService {
  constructor(
    private auth: AuthService, private router: Router,
    private location: Location, private act: ActivatedRoute,
  ) { }

  get info(): firebase.Promise<any> {
    return this.db(`/users/${this.auth.id}`)
      .$ref.once('value');
  }

  get basics() {
    return new Promise((resolve, reject) => {
      resolve(this.info.then(snapshot => {
        const name = snapshot.child('/name/').val();
        const role = snapshot.child('/role/').val();
        return ({ name: name, role: role });
      }));
    });
  }

  get routerEvent() {
    return this.router.events.take(1)
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

  get queryparams() {
    return this.act.queryParams;
  }

  get pagetitle() {
    return this.queryparams.map(param => param['title']);
  }

  get pagetarget() {
    return this.queryparams.map(param => param['path']);
  }

  checkIfPreUser(usermail) {
    return this.db('preusers').map(preuser => {
      return preuser.filter(pre => pre.mail === usermail);
    });
  }

  db(path, preserveshapshot?: boolean) {
    return this.auth.list(path, preserveshapshot);
  }

  setLocalInfo(name: string, role: string): Promise<boolean> {
    localStorage.setItem('userInfo',
      JSON.stringify({ name: name, role: role }));
    return new Promise((resolve, reject) => resolve(true));
  }

  login(param) {
    return this.auth.login(param);
  }

  createUser(param) {
    return this.auth.addUser(param)
      .then((state: FirebaseAuthState) => state.uid)
      .catch((err) => err);
  }

  navParentRoute(path: string, queryparams?: any) {
    this.router.navigate([path], queryparams);
  }

  navInChild(inPath?: string, queryparams?: QueryParams) {
    if (this.role) {
      if (queryparams) {
        this.router.navigate(['/home', {
          outlets: {
            'inside': !inPath ? 'menu' : inPath
          }, preserveQueryParams: false
        }], {
            queryParams: {
              'title': queryparams.title || '',
              'path': queryparams.path || ''
            }
          });
      } else {
        this.router.navigate(['/home', {
          outlets: {
            'inside': !inPath ? 'menu' : inPath
          }, preserveQueryParams: false
        }]);
      }
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

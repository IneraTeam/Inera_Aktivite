import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class IsauthService implements CanActivate {
  constructor(private router: Router, private af: AuthService) { }
  canActivate(): Observable<boolean> {
    return this.af.auth.take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        !authenticated ?
          this.router.navigate(['login']) : this.router.navigate(['/home']);
      });
  }
}

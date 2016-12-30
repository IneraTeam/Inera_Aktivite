import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class IsauthService implements CanActivate {
  constructor(private router: Router, private af: AuthService) { }
  canActivate() {
    return this.af.authenticated ? true : false;
  }
}

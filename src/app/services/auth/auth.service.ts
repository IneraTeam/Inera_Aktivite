import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(private af: AngularFire) { }

  login(input) {
    let parameters = JSON.stringify(input);
  }
}

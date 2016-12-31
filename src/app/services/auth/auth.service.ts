import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseAuth } from 'angularfire2';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;
  constructor(public auth: FirebaseAuth) {
    this.auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }
}

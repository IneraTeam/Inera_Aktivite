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

  get authenticated(): boolean{
    return this.authState !== null;
  }

  get id(): string{
    return this.authenticated ? this.authState.uid : '';
  }

  login(input): firebase.Promise<FirebaseAuthState>{
    return this.auth.login(input)
    .catch(err => console.log('AuthService#login :', err));
  }

  logout() {
    this.auth.logout();
  }
}

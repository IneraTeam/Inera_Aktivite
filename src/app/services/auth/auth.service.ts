import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, AngularFireAuth } from 'angularfire2';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;
  constructor(public auth: AngularFireAuth, private af: AngularFire) {
    auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id() {
    return this.authenticated ? this.authState.uid : '';
  }

  list(path: string) {
    return this.af.database.list(`${path}`);
  }

  login(input): firebase.Promise<FirebaseAuthState> {
    return this.auth.login(input);
  }

  addUser(input): firebase.Promise<FirebaseAuthState> {
    return this.auth.createUser({
      email: input.email,
      password: input.password
    }).then(() => {
      return this.list(`/users/${this.id}`).push('')
        .ref.parent.set({
          name: input.names,
          role: 'user'
        });
    });
  }

}
